// app/AddContactForm.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchUsers } from "./services/api";

type ContactFormProps = {
  onSubmit: (formData: {
    userId?: string;
    userName?: string;
    phone: string;
    email?: string;
    address?: string;
  }) => void;
};

type UserOption = { id: string; name: string };
const AddContactForm = ({ onSubmit }: ContactFormProps) => {
  // export default function AddContactForm({ onSubmit }: ContactFormProps) {
  const router = useRouter();
  // const [suggestions, setSuggestions] = useState([]);
  // const [users, setUsers] = useState([]);
  const [suggestions, setSuggestions] = useState<UserOption[]>([]);
  const [users, setUsers] = useState<UserOption[]>([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  const [formData, setFormData] = useState({
    userId: "",
    userName: "",
    phone: "",
    email: "",
    address: "",
  });

  const [error, setError] = useState("");

  // تبدیل اعداد فارسی/عربی به لاتین و حذف غیرعددی
  // const normalizePhone = (value: string) => {
  //   if (!value) return "";
  //   const step1 = value
  //     .replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
  //     .replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660));
  //   return step1.replace(/\D/g, "").slice(0, 11);
  // };

  // جستجوی کاربر هنگام تایپ
  const handleUserNameChange = (e) => {
    const name = e.target.value.trim();
    setFormData({ ...formData, userName: name, userId: undefined });

    if (name === "") {
      setError("");
      return;
    }
    //-----------------------------------------------------------#################################################
    const filtered = users.filter(
      (u) => u.name.toLowerCase() === name.toLowerCase()
    );

    if (filtered.length === 0) {
      setError("✅ کاربر جدید است. بعد از ثبت، یک مخاطب برایش ساخته می‌شود.");
    } else {
      setError("ℹ️ این کاربر در سیستم موجود است. از لیست انتخاب کنید.");
    }
  };

  // انتخاب کاربر از لیست پیشنهاد
  const handleSelectUser = (user) => {
    setFormData({
      ...formData,
      userId: user.id,
      userName: user.name,
    });
    setSuggestions([]);
    setError("این کاربر در سیستم موجود است. در حال ثبت مخاطب برای او هستید.");
  };

  // تغییر بقیه فیلدها
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ارسال فرم ----------------------------------------------------------------######################
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.userId && !formData.userName) {
      setError("لطفا نام کاربر را وارد کنید یا از لیست انتخاب کنید.");
      return;
    }

    await onSubmit(formData); // اینجا Phonebook خودش loadData رو صدا می‌زنه
    setFormData({
      userId: "",
      userName: "",
      phone: "",
      email: "",
      address: "",
    });
    setError("");
  };

  return (
    <div className="p-4" style={{ direction: "ltr" }}>
      <h1 className="text-2xl mb-4">➕ افزودن مخاطب جدید</h1>

      <button
        onClick={() => router.push("/")}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        ⬅ بازگشت به صفحه اصلی
      </button>

      <form onSubmit={handleSubmit} className="space-y-3 max-w-md relative">
        {/* ورودی نام کاربر */}
        <div>
          <label htmlFor="userName" className="block mb-1 font-semibold">
            نام کاربر:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleUserNameChange}
            className="border px-2 py-1 w-full rounded"
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

        {/* پیام خطا یا هشدار */}
        {error && <p className="text-red-600 text-sm">{error}</p>}

        {/* شماره تلفن */}
        <div>
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
          />
        </div>

        {/* دکمه ارسال */}
        <button
          type="submit"
          // onClick={() => router.refresh()}
          // onClick={() => router.push("/")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          ثبت مخاطب
        </button>
      </form>
    </div>
  );
};
export default AddContactForm;
