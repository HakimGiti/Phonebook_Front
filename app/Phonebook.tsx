// /app/Phonebook.tsx
"use client";

import { useEffect, useState } from "react";
import { fetchContacts, deleteUser } from "./services/api";
import Link from "next/link";
import AddContactForm from "./AddContactForm";
import Modal from "@/components/Modal";
import EditContactsForm from "./EditContactsForm"; // ✅ اصلاح import

interface User {
  id: number;
  name: string;
}

interface PhonebookItem {
  id: number;
  phone: string;
  email?: string;
  address?: string;
  user?: User;
}

type contacts = {
  id: number;
  phone?: string;
  email?: string;
  address?: string;
  userId: number;
  userName?: string; // اضافه شد
};

const Phonebook = () => {
  const [phonebook, setPhonebook] = useState<PhonebookItem[]>([]);
  const [error, setError] = useState<string>("");
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredPhonebook, setFilteredPhonebook] = useState<PhonebookItem[]>(
    []
  );
  const [editingContacts, setEditingContacts] = useState<
    PhonebookItem[] | null
  >(null);

  const loadData = async () => {
    try {
      const data = await fetchContacts();
      if (Array.isArray(data)) {
        setPhonebook(data);
        setFilteredPhonebook(data);
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

  function normalizeDigits(str: string) {
    return str.replace(/[۰-۹]/g, (d) =>
      String.fromCharCode(d.charCodeAt(0) - 0x06f0 + 0x30)
    );
  }

  useEffect(() => {
    if (!searchQuery) {
      setFilteredPhonebook(phonebook);
    } else {
      const lowerQuery = searchQuery.toLowerCase();
      const normalizedQuery = normalizeDigits(searchQuery);
      const filtered = phonebook.filter((item) => {
        const normalizedPhone = normalizeDigits(item.phone);
        return (
          normalizedPhone.includes(normalizedQuery) ||
          item.user?.name.toLowerCase().includes(lowerQuery) ||
          item.email?.toLowerCase().includes(lowerQuery) ||
          item.address?.toLowerCase().includes(lowerQuery)
        );
      });
      setFilteredPhonebook(filtered);
    }
  }, [searchQuery, phonebook]);

  const handleDeleteUser = async (userId?: number) => {
    if (!userId) return;
    if (!window.confirm("آیا از حذف این کاربر و تمام مخاطبینش مطمئن هستید؟"))
      return;
    try {
      await deleteUser(userId);
      setPhonebook((prev) => prev.filter((p) => (p.user?.id ?? 0) !== userId));
    } catch (err) {
      console.error(err);
      setError("حذف کاربر با خطا مواجه شد");
    }
  };

  const groupedPhonebook = filteredPhonebook.reduce((groups, item) => {
    const userName = item.user?.name ?? "بدون نام کاربر";
    (groups[userName] ??= []).push(item);
    return groups;
  }, {} as Record<string, PhonebookItem[]>);

  return (
    <div className="w-screen">
      <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-10 text-blue-700">
          📘 دفترچه تلفن
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-xl">
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

      <div className="container">
        <div className="flex m-6 max-w-2xl p-4 bg-blue-300 rounded-lg">
          <div className="flex w-sm p-2 border rounded-lg shadow">
            <input
              type="text"
              placeholder="نام, شماره, ایمیل یا آدرس ..."
              className="flex-1 w-full p-2 border rounded-lg shadow hover:bg-blue-50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex items-center p-2">🔍</div>
          </div>
          <div className="flex justify-start gap-4 m-2 max-w-2xl">
            <button
              onClick={() => setShowAddForm((prev) => !prev)}
              className="flex mx-5 w-full p-5 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow"
            >
              <div className="flex gap-3 items-center">
                <span className="ring-1 rounded-full w-6">
                  {showAddForm ? "▲" : "▼"}
                </span>
                <span className="ml-2">افزودن مخاطب</span>
              </div>
            </button>
          </div>
        </div>

        {showAddForm && (
          <div className="container">
            <div className="flex justify-end w-full m-6 max-w-2xl p-4 bg-yellow-500 rounded-lg">
              <AddContactForm
                onSubmit={async () => {
                  await loadData();
                }}
              />
            </div>
          </div>
        )}

        {Object.entries(groupedPhonebook)
          .sort(([a], [b]) => a.localeCompare(b, "fa"))
          .map(([userName, items]) => {
            const userId = items[0]?.user?.id;
            return (
              <div
                key={userId ?? userName}
                className="m-6 w-full max-w-2xl p-4 bg-blue-300 rounded-lg"
              >
                <div className="flex mb-6 gap-5 items-center justify-between">
                  <h2 className="text-xl font-bold mb-2">{userName}</h2>
                  <div className="flex">
                    {userId && (
                      <button
                        onClick={() => handleDeleteUser(userId)}
                        className="mx-3 bg-red-700 text-white px-3 py-1 rounded-lg hover:bg-red-900"
                      >
                        حذف کاربر
                      </button>
                    )}
                    <button
                      onClick={() => setEditingContacts(items)}
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

        {editingContacts && (
          <Modal onClose={() => setEditingContacts(null)}>
            <EditContactsForm
              contacts={editingContacts.map((c) => ({
                ...c,
                userName: c.user?.name ?? "بدون نام کاربر", // اضافه شد
              }))}
              onCancel={async () => {
                await loadData(); // ⬅️ رفرش والد
                setEditingContacts(null); // بستن مودال
              }}
              onSubmit={async () => {
                await loadData(); // گرفتن داده‌های جدید از API
                setEditingContacts(null); // بستن مودال بعد از بروزرسانی
              }}
              onChange={async () => {
                await loadData(); // 🔄 همینجا هم والد رفرش میشه
              }}
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Phonebook;
