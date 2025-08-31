// /app/EditContactsForm.tsx

"use client";

import { useState } from "react";

type ContactForm = {
  id: number;
  phone: string;
  email: string;
  address: string;
  userId: number;
  userName?: string; // اگر می‌خوای نمایش بدی
};

type Contact = {
  id: number;
  phone?: string;
  email?: string;
  address?: string;
  userId: number;
  userName?: string; // اضافه شد
};

type Props = {
  contacts: Contact[];
  onSubmit: () => void;
  onCancel: () => void;
};

export default function EditContactsForm({
  contacts,
  onSubmit,
  onCancel,
}: Props) {
  const [form, setForm] = useState<ContactForm[]>(
    contacts.map((c) => ({
      id: c.id,
      phone: c.phone ?? "",
      email: c.email ?? "",
      address: c.address ?? "",
      userId: c.userId,
      userName: c.userName, // می‌تونی نگه داری یا حذف کنی
    }))
  );

  const handleChange = (
    index: number,
    field: keyof ContactForm,
    value: string
  ) => {
    const updated = [...form];
    // چون همه فیلدها رشته یا عدد هستند، این خط درست میشه
    (updated[index][field] as string | number) = value;
    setForm(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await Promise.all(
      form.map((c) =>
        fetch(`http://localhost:3000/contacts/${c.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone: c.phone,
            email: c.email,
            address: c.address,
            userId: c.userId, // این بمونه چون توی Entity داری
          }),
        })
      )
    );

    onSubmit();
  };

  // نام کاربر را از اولین مخاطب بگیریم
  const userName = contacts[0]?.userName ?? "بدون نام کاربر";

  return (
    <form
      onSubmit={handleSubmit}
      style={{ direction: "rtl" }}
      className="space-y-4"
    >
      {/* نام کاربر بالای فرم */}
      <div>
        <label className="block mb-1 font-bold text-lg">نام کاربر:</label>
        <div className="p-2 bg-gray-100 rounded">{userName || "—"}</div>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">شماره تلفن</th>
            <th className="border border-gray-300 p-2">ایمیل</th>
            <th className="border border-gray-300 p-2">آدرس</th>
          </tr>
        </thead>
        <tbody>
          {form.map((c, index) => (
            <tr key={c.id}>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  value={c.phone}
                  onChange={(e) => handleChange(index, "phone", e.target.value)}
                  className="border rounded p-1 w-full"
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
            </tr>
          ))}
        </tbody>
      </table>

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
