"use client";

import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4" style={{ direction: "ltr" }}>
      <div className="flex items-center justify-between">
        <a
          href="./"
          className="inline-block mb-4 px-3 py-3 bg-[#007bff] text-white border-0 decoration-0 text-[16px] rounded-2xl"
        >
          بازگشت به صفحه اصلی
        </a>
        <h1 className="text-xl font-bold justify-center">لیست کاربران</h1>
      </div>
      <table className="border-collapse border border-gray-400 mt-4 w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">جنسیت</th>
            <th className="border border-gray-400 px-4 py-2">شغل</th>
            <th className="border border-gray-400 px-4 py-2">کد شناسایی</th>
            <th className="border border-gray-400 px-4 py-2">کد ملی</th>
            <th className="border border-gray-400 px-4 py-2">نام کاربری</th>
            <th className="border border-gray-400 px-4 py-2">نام</th>
            <th className="border border-gray-400 px-4 py-2">ردیف</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any, index: number) => (
            <tr key={user.id}>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {user.gender}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">{user.job}</td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {user.nationalId}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {user.nationalCode}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {user.username}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">{user.name}</td>
              <td className="border border-gray-400 px-4 py-2 text-center">{index+1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
