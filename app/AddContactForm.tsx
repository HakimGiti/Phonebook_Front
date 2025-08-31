// app/AddContactForm.tsx
"use client";

import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import { searchUsers } from "./services/api";
import { addContact } from "./services/api";

// داده‌های فرم
export type ContactFormData = {
  userId?: number;
  userName?: string;
  phone: string;
  email?: string;
  address?: string;
};

// پراپس‌های کامپوننت
type AddContactFormProps = {
  onSubmit?: (formData: ContactFormData) => void;
};

type UserOption = { id: number; name: string };

const AddContactForm = ({ onSubmit }: AddContactFormProps) => {
  // const router = useRouter();

  const [suggestions, setSuggestions] = useState<UserOption[]>([]);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<ContactFormData>({
    userId: undefined,
    userName: "",
    phone: "",
    email: "",
    address: "",
  });

  // 📌 تبدیل اعداد فارسی/عربی به لاتین و حذف غیرعددی
  const normalizePhone = (value: string) => {
    if (!value) return "";
    const step1 = value
      .replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
      .replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660));
    return step1.replace(/\D/g, "").slice(0, 11);
  };

  // 📌 ارسال فرم
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const payload: ContactFormData = { ...formData };
      if (!Number.isInteger(payload.userId as number)) {
        if (payload.userId) {
          delete payload.userName; // اگر id مشخص بود، نیازی به name نیست
        } else {
          delete (payload as any).userId; // اگر id نبود، name لازمه
        }
      }
      console.log("payload_1", payload);
      const data = await addContact(payload);
      //alert(" مخاطب با موفقیت ثبت شد ✅");

      // پاک کردن فرم
      setFormData({
        userId: undefined,
        userName: "",
        phone: "",
        email: "",
        address: "",
      });
      setError("");
      onSubmit?.(payload);
      // alert(err.search); // اینجا میاد: "این شماره قبلاً ثبت شده است."
      console.log("dataaaa=:", data);
      console.log("errrrrror=:", error);
      setError(error);
    } catch (err) {
      setError(err.message || "خطای داخلی سرور");
      console.log("error.message= ", err.message);
    }
  };

  // 📌 تغییر مقادیر
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "phone") {
      setFormData({ ...formData, phone: normalizePhone(e.target.value) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  // 🔍 نگه‌داشتن query برای debounce
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  // 📌 جستجو نام کاربر
  const handleUserNameChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    //const name = e.target.value.trim();
    const name = e.target.value;
    setFormData({ ...formData, userName: name, userId: undefined });
    setQuery(name); // فقط query رو تغییر می‌دیم
  };

  // 📌 وقتی کاربر تایپش تموم شد (debouncedQuery تغییر کرد)
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSuggestions([]);
      setError("");
      return;
    }
    searchUsers(debouncedQuery)
      .then((data) => {
        setSuggestions(data);
        if (data.length === 0) {
          setError(error || "✅ کاربر جدید است. بعد از ثبت ساخته می‌شود.");
        } else {
          setError(
            error ||
              "ℹ️ این کاربر در سیستم موجود است. لطفا از لیست انتخاب کنید."
          );
        }
      })
      .catch(() => setError(error || "خطا در دریافت کاربران موجود"));
  }, [debouncedQuery]);

  // 📌 انتخاب کاربر از لیست
  const handleSelectUser = (u: { id: number; name: string }) => {
    setFormData((f) => ({ ...f, userId: u.id, userName: u.name }));
    setSuggestions([]);
    setError("این کاربر در سیستم موجود است. در حال ثبت مخاطب برای او هستید.");
  };

  function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  }

  return (
    <div className="p-4 w-full" style={{ direction: "rtl" }}>
      <form onSubmit={handleSubmit} className="space-y-3 max-w-full relative">
        {/* نام کاربر */}
        <div className="w-full">
          <label
            htmlFor="userName"
            className="flex gap-5 max-w-full mb-1 font-semibold"
          >
            نام کاربر:
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </label>

          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleUserNameChange}
            className="flex border px-2 py-1 w-full rounded"
            style={{ direction: "ltr" }}
            placeholder="نام کاربر را وارد کنید..."
          />
          {suggestions.length > 0 && (
            <ul className="absolute bg-white border rounded mt-1 max-h-40 overflow-y-auto w-full z-10">
              {suggestions.map((u) => (
                <li
                  key={u.id}
                  onClick={() => handleSelectUser(u)}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                >
                  {u.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* تلفن */}
        <div className="w-full">
          <label htmlFor="phone" className="block mb-1 font-semibold">
            شماره تلفن (۱۱ رقمی):
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="^\d{11}$"
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength={11}
            className="border px-2 py-1 w-full rounded"
            style={{ direction: "ltr" }}
          />
        </div>

        {/* ایمیل */}
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            ایمیل (اختیاری):
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border px-2 py-1 w-full rounded"
            style={{ direction: "ltr" }}
          />
        </div>

        {/* آدرس */}
        <div>
          <label htmlFor="address" className="block mb-1 font-semibold">
            آدرس (اختیاری):
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border px-2 py-1 w-full rounded"
            style={{ direction: "ltr" }}
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          ثبت مخاطب
        </button>
      </form>
    </div>
  );
};

export default AddContactForm;
