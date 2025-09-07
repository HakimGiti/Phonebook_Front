// /app/EditContactsForm.tsx
"use client";

import { useState, useEffect } from "react";

// داده‌های فرم
export type ContactFormData = {
  userId?: number;
  userName?: string;
  phone: string;
  email?: string;
  address?: string;
};

type ContactForm = {
  id?: number;
  phone: string;
  email: string;
  address: string;
  userId: number;
  userName?: string;
};

type Contact = {
  id?: number;
  phone?: string;
  email?: string;
  address?: string;
  userId: number;
  userName?: string;
};

type Props = {
  contacts: Contact[];
  onSubmit: () => void; // برای ذخیره کل فرم
  onCancel: () => void; // بستن مودال
  onChange?: () => void | Promise<void>; // اطلاع والد برای رفرش
};

export default function EditContactsForm({
  //------------------------ پارامترهای تابع (که در ادامه استفاده می شوند)
  contacts, //--------------
  onSubmit, //--------------
  onCancel, //--------------
  onChange, //--------------
}: Props) {
  const [form, setForm] = useState<ContactForm[]>(
    contacts.map((c) => ({
      id: c.id,
      phone: c.phone ?? "",
      email: c.email ?? "",
      address: c.address ?? "",
      userId: c.userId,
      userName: c.userName,
    }))
  );
  //66666666666666666666666666666666666666666666666666666666666666666666666
  //6666666666666666666666666666666666666666666666666666666
  // 📌 هندلر برای رفرش دیتای مخاطبین
  const refreshContacts = async () => {
    try {
      const userId = contacts[0]?.userId;
      if (!userId) return;

      const res = await fetch(
        `http://localhost:3000/contacts?userId=${userId}`
      );
      if (!res.ok) return;

      const data = await res.json();
      setForm(
        data.map((c: Contact) => ({
          id: c.id,
          phone: c.phone ?? "",
          email: c.email ?? "",
          address: c.address ?? "",
          userId: c.userId,
          userName: c.userName,
        }))
      );
    } catch (err) {
      console.error("خطا در رفرش مخاطبین:", err);
    }
  };
  //666666666666666666666666666666666666666666666666666
  //66666666666666666666666666666666666666666666666666666666666666666666666

  const [error, setError] = useState<string>("");

  // 📌 تبدیل اعداد فارسی/عربی به لاتین و حذف غیرعددی
  const normalizePhone = (value: string) => {
    if (!value) return "";
    const step1 = value
      .replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
      .replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660));
    let numeric = step1.replace(/\D/g, "").slice(0, 11);
    return numeric;
  };

  //8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  // تغییر مقادیر فیلدها
  const handleChange = (
    index: number,
    field: keyof ContactForm,
    value: string
  ) => {
    const updated = [...form];
    if (field === "phone") {
      value = normalizePhone(value); // فقط اعداد
      if (value.length > 11) value = value.slice(0, 11); // محدودیت max
      // اعتبارسنجی استاندارد ایران: 11 رقم و شروع با 09
      if (value.length === 11 && /^0[0-9]{10}$/.test(value)) {
        setError(""); // درست شد
      } else {
        setError(
          "شماره تلفن باید ۱۱ رقم باشد و با 0 شروع شود (مثلاً 09123456789)"
        );
      }
    }

    (updated[index][field] as string | number) = value;
    setForm(updated);
  };

  //8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  // 🗑️ هندلر حذف
  const handleDelete = async (id: number) => {
    // اگر آیتم جدید (بدون id) است: فقط از فرم حذف کن و والد را اطلاع بده
    if (!id) {
      setForm((prev) => prev.filter((c) => c.id !== id));
      try {
        await onChange?.();
      } catch (err) {
        console.error("onChange error:", err);
      }
      return;
    }

    const confirmDelete = window.confirm("آیا مطمئن هستید؟");
    if (!confirmDelete) {
      // ❌ کنسل شد → هیچ کاری نکن
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/contacts/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("خطا در حذف مخاطب");
      }

      // 1) آپدیت state محلی
      setForm((prev) => {
        const updated = prev.filter((c) => c.id !== id);

        // ✅ اگر بعد از حذف هیچ مخاطبی باقی نموند → فرم بسته بشه
        if (updated.length === 0) {
          onCancel(); // بستن مودال
        }

        return updated;
      });
      // 2) اطلاع والد که داده‌ها تغییر کرد (بدون بستن مودال)
      try {
        await onChange?.();
      } catch (err) {
        console.error("onChange failed:", err);
      }
    } catch (err) {
      console.error(err);
      setError("خطا در حذف مخاطب");
    }
  };

  // افزودن مخاطب جدید
  const handleAddContact = () => {
    const newContact: ContactForm = {
      phone: "",
      email: "",
      address: "",
      userId: contacts[0]?.userId ?? 0,
      userName: contacts[0]?.userName ?? "",
    };
    setForm([...form, newContact]);
  };
  //8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  //888888888888888888888888888888888888888888888888888888888888888888888888888
  // ذخیره تغییرات
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      // 1) پیدا کردن آیتم‌هایی که id دارند و شماره‌شان خالی است -> باید حذف شوند ----------------------------
      const toDeleteIds = form
        .filter((c) => c.id && (!c.phone || c.phone.trim() === ""))
        .map((c) => c.id!) as number[];

      // در صورت وجود حذف‌های احتمالی، از کاربر تایید بگیر
      if (toDeleteIds.length > 0) {
        const confirmMsg =
          `تعداد ${toDeleteIds.length} مخاطب دارای شماره خالی پیدا شد.\n` +
          `این مخاطبین حذف خواهند شد. آیا مطمئن هستید؟`;
        if (!window.confirm(confirmMsg)) {
          // کاربر لغو کرد → متوقف کن (یا تصمیم بگیر حذف‌ها را نادیده بگیریم)
          return;
        }

        // 2) ارسال درخواست‌های حذف (می‌تونی از API batch/delete هم استفاده کنی اگر موجود باشه) ----------------------------
        const deleteResponses = await Promise.all(
          toDeleteIds.map((id) =>
            fetch(`http://localhost:3000/contacts/${id}`, { method: "DELETE" })
          )
        );

        // بررسی پاسخ‌ها
        for (const res of deleteResponses) {
          if (!res.ok) {
            // خواندن خطای سرور در صورت امکان
            const data = await res.json().catch(() => ({}));
            throw new Error(data.message || "خطا در حذف مخاطب");
          }
        }
      }

      // 3) آماده‌سازی لیست برای bulk (حذف مواردی که قبلاً حذف شدند) ----------------------------
      const cleanedContacts = form
        .filter((c) => !(c.id && toDeleteIds.includes(c.id))) // حذف رکوردهایی که پاک شدند
        .map((c) => {
          const copy: any = {
            ...c,
            email: c.email?.trim() || undefined,
            address: c.address?.trim() || undefined,
          };
          // اگر آیتم جدید (بدون id) هست، حذف فیلد id تا سرور بدونه create کنه
          if (!c.id) delete copy.id;
          return copy;
        });
      console.log("📤 ارسال به بک‌اند:", cleanedContacts); // 👇 برای تست: نمایش کل آرایه که یکبار ارسال میشه

      // 4) ارسال bulk برای بقیه ------------------------------------------------------------
      const res = await fetch("http://localhost:3000/contacts/bulk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contacts: cleanedContacts }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.message || data.error || "خطا در ذخیره مخاطبین");
        return;
      }
      // 5) اطلاع والد و بستن (onSubmit در والد انجام loadData و بستن مودال) ----------------------------
      await onSubmit();
    } catch (err: any) {
      console.error(err);
      setError(err.message || "خطای شبکه یا سرور");
    }
  };
  //888888888888888888888888888888888888888888888888888888888888888888888888888
  //8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  // نام کاربر را از اولین مخاطب بگیریم
  const userName = contacts[0]?.userName ?? "بدون نام کاربر";

  return (
    <form
      onSubmit={handleSubmit}
      style={{ direction: "rtl" }}
      className="space-y-4"
    >
      <div>
        <label className="block mb-1 font-bold text-lg">نام کاربر:</label>
        <div className="p-2 bg-gray-100 rounded">{userName || "—"}</div>
      </div>

      {error && <div className="text-red-600 font-bold mb-2">{error}</div>}

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">شناسه</th>
            <th className="border border-gray-300 p-2">شماره تلفن</th>
            <th className="border border-gray-300 p-2">ایمیل</th>
            <th className="border border-gray-300 p-2">آدرس</th>
            <th className="border border-gray-300 p-2">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {form.map((c, index) => (
            <tr key={c.id ?? `new-${index}`}>
              <td className="border border-gray-300 p-2">{c.id ?? "—"}</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  value={c.phone}
                  onChange={(e) =>
                    handleChange(index, "phone", normalizePhone(e.target.value))
                  }
                  maxLength={11}
                  className="border border-gray-300 p-2 w-full"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="email"
                  value={c.email}
                  onChange={(e) => handleChange(index, "email", e.target.value)}
                  className="border rounded p-1 w-full"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  value={c.address}
                  onChange={(e) =>
                    handleChange(index, "address", e.target.value)
                  }
                  className="border rounded p-1 w-full"
                />
              </td>
              <td className="border border-gray-300 p-2 text-center">
                <button
                  type="button"
                  onClick={() => handleDelete(c.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        type="button"
        onClick={handleAddContact}
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        + افزودن مخاطب
      </button>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          انصراف
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          ذخیره تغییرات
        </button>
      </div>
    </form>
  );
}
