"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  fetchPhonebook,
  deletePhonebookEntry,
  deleteUser,
} from "./services/api";

import Link from "next/link";

interface User {
  id: number;
  name: string;
}

interface PhonebookItem {
  id: number;
  name: string;
  phone: string;
  user: User;
}

const Phonebook = () => {
  const router = useRouter();
  const [phonebook, setPhonebook] = useState<PhonebookItem[]>([]);
  const [error, setError] = useState<string>("");

  // لود داده‌ها
  const loadData = async () => {
    try {
      // حتماً fetchPhonebook رو طوری تغییر بده که از fetch با cache: 'no-store' استفاده کنه
      const data = await fetchPhonebook();
      if (data && Array.isArray(data.users)) {
        const sortedData = [...data.users].sort((a, b) =>
          (a.name || "").localeCompare(b.name || "")
        );
        setPhonebook(sortedData);
      } else {
        throw new Error("فرمت داده دریافتی نامعتبر است");
      }
    } catch (err) {
      console.error(err);
      setError("بارگذاری داده‌ها با خطا مواجه شد");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm("آیا از حذف این مخاطب مطمئن هستید؟")) return;
    try {
      await deletePhonebookEntry(id);
      setPhonebook((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      setError("حذف مخاطب با خطا مواجه شد");
    }
  };

  const handleDeleteUser = async (userId: number) => {
    if (!window.confirm("آیا از حذف این کاربر و تمام مخاطبینش مطمئن هستید؟"))
      return;
    try {
      await deleteUser(userId);

      router.push("/");
      //router.refresh(); // صفحه رو کامل رفرش کن تا داده‌ها جدید بیاد
      // اگر بخوای میتونی این خط رو حذف کنی چون صفحه رفرش شده و دوباره لود میشه:
      // setPhonebook((prev) => prev.filter((p) => p.user.id !== userId));
    } catch (err) {
      console.error(err);
      setError("حذف کاربر با خطا مواجه شد");
    }
  };

  // گروه‌بندی بر اساس نام کاربر
  const groupedPhonebook = phonebook.reduce((groups, item) => {
    const userName = item.name || "بدون نام کاربر";
    if (!groups[userName]) groups[userName] = [];
    groups[userName].push(item);
    return groups;
  }, {} as Record<string, (typeof phonebook)[0][]>);

  return (
    <div className="w-screen">
      {/* عنوان */}
      <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-10 text-blue-700">
          📘 دفترچه تلفن
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-xl">
          <Link href="/phonebook" className="block">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg shadow">
              📒 Phonebook
            </button>
          </Link>

          <Link href="/contacts" className="block">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg shadow">
              👤 Contact
            </button>
          </Link>

          <Link href="/users" className="block">
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 rounded-lg shadow">
              🧑‍💼 User
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center my-6">
        <button
          onClick={() => router.push("/add-contact")}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          ➕ افزودن مخاطب جدید
        </button>
      </div>

      <div className="container">
        {Object.entries(groupedPhonebook).map(([userName, items]) => {
          const userId = items[0].id;
          return (
            <div
              key={userName}
              className="m-6 w-full max-w-xl p-4 bg-blue-300 rounded-lg"
            >
              <div className="flex mb-6 gap-5 items-center justify-between">
                <h2 className="text-xl font-bold mb-2">{userName}</h2>
                <div className="flex">
                  <button
                    onClick={() => handleDeleteUser(userId)}
                    className="mx-3 bg-red-700 text-white px-3 py-1 rounded-lg hover:bg-red-900"
                  >
                    حذف کاربر
                  </button>
                  <button
                    onClick={() => alert("فرم ویرایش اینجا باید باز شود")}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                  >
                    ویرایش
                  </button>
                </div>
              </div>
              <p>{items.map((i) => i.phone).join(", ")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Phonebook;
