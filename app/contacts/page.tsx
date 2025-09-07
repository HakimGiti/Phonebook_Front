"use client";

import { useEffect, useState } from "react";
import { fetchContacts, fetchUsers } from "../services/api";

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState<string>("");
  const [loadingUsers, setLoadingUsers] = useState(true);

  // فرم داده‌ها
  const [formData, setFormData] = useState({
    userId: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    // بارگذاری مخاطبین
    fetchContacts()
      .then((data) => setContacts(data))
      .catch((err) => {
        console.error(err);
        setError("بارگذاری داده‌ها با خطا مواجه شد");
      });

    // بارگذاری کاربران برای انتخاب در فرم
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.error("خطا در دریافت کاربران:", err))
      .finally(() => setLoadingUsers(false));
  }, []);

  // تغییرات فرم
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // تابع ثبت مخاطب جدید
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

      const newContact = await res.json();

      // اضافه کردن مخاطب جدید به لیست بدون رفرش صفحه
      setContacts((prev) => [...prev, newContact]);

      alert("مخاطب با موفقیت اضافه شد");

      // پاک کردن فرم
      setFormData({ userId: "", phone: "", email: "", address: "" });
    } catch (error) {
      console.error(error);
      alert("خطایی رخ داد");
    }
  };

  // حذف مخاطب
  const deleteContact = async (id: number) => {
    if (!window.confirm("آیا از حذف این مخاطب مطمئن هستید؟")) return;

    try {
      const res = await fetch(`http://localhost:3000/contacts/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete contact");

      setContacts(contacts.filter((c) => c.id !== id));
    } catch (error) {
      console.error(error);
      setError("حذف مخاطب با خطا مواجه شد");
    }
  };

  if (loadingUsers) return <p>در حال بارگذاری کاربران...</p>;

  return (
    <div className="p-4" style={{ direction: "ltr" }}>
      {/* بازگشت به صفحه اصلی --------------------------------------------------------------------*/}
      <div className="flex items-center">
        <a
          href="./"
          className="inline-block mb-4 px-3 py-3 bg-[#007bff] text-white border-0 decoration-0 text-[16px] rounded-2xl"
        >
          بازگشت به صفحه اصلی
        </a>
      </div>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      <div className="gap-10 w-full justify-between">
        {/* فرم افزودن مخاطب ------------------------------------------------------------------------*/}
        <form
          onSubmit={handleSubmit}
          className="flex w-full mb-6 p-4 border rounded shadow"
          style={{ direction: "ltr" }}
        >
          <div className="w-full">
            <h2 className="flex justify-end mb-4 font-semibold text-lg">
              ➕ افزودن مخاطب جدید
            </h2>
            <div className="flex gap-10 justify-center w-full">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                ثبت مخاطب
              </button>
              <div className="mb-3">
                <div className="flex justify-center">
                  <label htmlFor="userId" className="block mb-1 font-bold">
                    کاربر مربوطه
                  </label>
                </div>
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
              <div className="mb-3 ">
                <div className="flex justify-center">
                  <label htmlFor="phone" className="block mb-1 font-semibold">
                    شماره تلفن (۱۱ رقمی)
                  </label>
                </div>
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

              <div className="mb-3">
                <div className="flex justify-center">
                  <label htmlFor="email" className="block mb-1 font-semibold">
                    ایمیل (اختیاری):
                  </label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border px-2 py-1 w-full rounded"
                />
              </div>

              <div className="mb-3">
                <div className="flex justify-center">
                  <label htmlFor="address" className="block mb-1 font-semibold">
                    آدرس (اختیاری):
                  </label>
                </div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border px-2 py-1 w-full rounded"
                />
              </div>
            </div>
          </div>
        </form>

        {/* جدول مخاطبین -----------------------------------------------------------------------------*/}
        <div className="w-full">
          <h1 className="flex text-xl font-bold justify-center">
            لیست مخاطبین
          </h1>
          <table className="border-collapse border border-gray-400 mt-4 w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2 text-center">
                  حذف
                </th>
                <th className="border border-gray-400 px-4 py-2">آدرس</th>
                <th className="border border-gray-400 px-4 py-2">ایمیل</th>
                <th className="border border-gray-400 px-4 py-2 text-center">
                  شماره
                </th>
                <th className="border border-gray-400 px-4 py-2 text-center">
                  Contact_id
                </th>
                <th className="border border-gray-400 px-4 py-2 text-center">
                  ردیف
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c: any, index: number) => (
                <tr key={c.id}>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    <button
                      onClick={() => deleteContact(c.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                    >
                      حذف
                    </button>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {c.address}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {c.email}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {c.phone}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {c.id}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
