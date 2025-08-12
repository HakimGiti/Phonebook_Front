"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchUsers } from "../services/api";
import { fetchUsersWithContacts } from "../services/api";

export default function AddContactPage() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    userId: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("خطا در دریافت کاربران:", error);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  // تبدیل اعداد فارسی/عربی به لاتین و حذف غیرعددی
  const normalizePhone = (value: string) => {
    if (!value) return "";
    const step1 = value
      .replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
      .replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660));
    return step1.replace(/\D/g, "").slice(0, 11); // ۱۱ رقم دقیق
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const cleaned = normalizePhone(value);
      setFormData((prev) => ({ ...prev, phone: cleaned }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.userId) {
      alert("لطفاً یک کاربر را انتخاب کنید.");
      return;
    }
    if (!/^\d{11}$/.test(formData.phone)) {
      alert("شماره تلفن باید دقیقا ۱۱ رقم باشد (مثال: 9123456789).");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: Number(formData.userId),
          phone: formData.phone,
          email: formData.email || null,
          address: formData.address || null,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        alert(`خطا در ثبت مخاطب: ${text || res.statusText}`);
        return;
      }

      alert("مخاطب با موفقیت اضافه شد");
      setFormData({ userId: "", phone: "", email: "", address: "" }); // پاک کردن فرم
      const updatedList = await fetchUsersWithContacts(); // 🎯 گرفتن لیست جدید مرتب شده
      console.log("📌 لیست جدید مرتب‌شده:", updatedList);
      router.push("/"); // اگه بخوای می‌تونی به صفحه اصلی بری:
    } catch (error) {
      console.error(error);
      alert("خطایی رخ داد");
    }
  };

  if (loading) return <p>در حال بارگذاری کاربران...</p>;

  return (
    <div className="p-4" style={{ direction: "ltr" }}>
      <h1 className="text-2xl mb-4">➕ افزودن مخاطب جدید</h1>

      <button
        onClick={() => router.push("/")}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        ⬅ بازگشت به صفحه اصلی
      </button>

      <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
        <div>
          <label htmlFor="userId" className="block mb-1 font-semibold">
            کاربر مربوطه:
          </label>
          <select
            id="userId"
            name="userId"
            required
            value={formData.userId}
            onChange={handleChange}
            className="border px-2 py-1 w-full rounded"
          >
            <option value="">-- انتخاب کاربر --</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 font-semibold">
            شماره تلفن (۱۱ رقمی):
          </label>
          <input
            type="tel"
            inputMode="numeric"
            id="phone"
            name="phone"
            pattern="^\d{11}$"
            title="شماره تلفن باید دقیقا ۱۱ رقم باشد"
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength={11}
            className="border px-2 py-1 w-full rounded"
          />
        </div>

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

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          ثبت مخاطب
        </button>
      </form>
    </div>
  );
}
