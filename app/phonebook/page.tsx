"use client";

import { useEffect, useState } from "react";
import { fetchPhonebook, deletePhonebookEntry } from "../services/api";

export default function PhonebookPage() {
  const [phonebook, setPhonebook] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await fetchPhonebook();
      if (data && Array.isArray(data.users)) {
        setPhonebook(data.users);
      } else {
        throw new Error("فرمت داده دریافتی نامعتبر است");
      }
    } catch (err) {
      console.error(err);
      setError("بارگذاری داده‌ها با خطا مواجه شد");
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("آیا از حذف این مخاطب مطمئن هستید؟")) return;

    try {
      await deletePhonebookEntry(id);
      setPhonebook((prev) => prev.filter((p: any) => p.id !== id));
    } catch (err) {
      console.error(err);
      setError("حذف مخاطب با خطا مواجه شد");
    }
  };

  return (
    <div className="p-4" style={{ direction: "ltr" }}>
      <div className="flex items-center justify-between">
        <a
          href="./"
          className="inline-block mb-4 px-3 py-3 bg-[#007bff] text-white border-0 decoration-0 text-[16px] rounded-2xl"
        >
          بازگشت به صفحه اصلی
        </a>
        <h1 className="text-xl font-bold justify-center">دفترچه تلفن</h1>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <table className="border-collapse border border-gray-400 mt-4 w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2 text-center">
              حذف
            </th>
            <th className="border border-gray-400 px-4 py-2">شماره</th>
            <th className="border border-gray-400 px-4 py-2">نام</th>
            <th className="border border-gray-400 px-4 py-2">ردیف</th>
          </tr>
        </thead>
        <tbody>
          {phonebook.map((p: any, index: number) => (
            <tr key={p.id}>
              <td className="border border-gray-400 px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(p.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  حذف
                </button>
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {p.phone}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {p.name}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {index + 1}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}