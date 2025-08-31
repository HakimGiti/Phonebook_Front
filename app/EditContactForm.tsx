// /app/EditContactForm.tsx

"use client";

import { useState } from "react";
import { updateContact } from "./services/api";

type User = { id: number; name: string };

export type EditableContact = {
  id: number;
  phone: string;
  email?: string;
  address?: string;
  user?: User;
};

type Props = {
  contact: EditableContact;
  onSubmit?: () => void; // بعد از موفقیت
  onCancel?: () => void; // بستن بدون ذخیره
};

export default function EditContactForm({
  contact,
  onSubmit,
  onCancel,
}: Props) {
  const [form, setForm] = useState({
    phone: contact.phone ?? "",
    email: contact.email ?? "",
    address: contact.address ?? "",
  });
  const [error, setError] = useState<string>("");

  const normalizePhone = (value: string) => {
    if (!value) return "";
    const step1 = value
      .replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
      .replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660));
    return step1.replace(/\D/g, "").slice(0, 11);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "phone") {
      setForm((f) => ({ ...f, phone: normalizePhone(e.target.value) }));
    } else {
      setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await updateContact(contact.id, {
        phone: form.phone || undefined,
        email: form.email || undefined,
        address: form.address || undefined,
      });
      onSubmit?.();
    } catch (err: any) {
      setError(err?.message || "خطا در ویرایش مخاطب");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3"
      style={{ direction: "rtl" }}
    >
      <div className="grid grid-cols-1 gap-3">
        <div>
          <label className="mb-1 block text-sm font-medium">نام کاربر</label>
          <input
            type="text"
            value={contact.user?.name ?? "—"}
            readOnly
            className="w-full rounded border bg-gray-100 px-2 py-1"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">
            شماره تلفن (۱۱ رقمی)
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            maxLength={11}
            className="w-full rounded border px-2 py-1"
            style={{ direction: "rtl" }}
            required
            pattern="^\d{11}$"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">ایمیل</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded border px-2 py-1"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">آدرس</label>
          <input
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
            className="w-full rounded border px-2 py-1"
          />
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded bg-gray-200 px-3 py-2 text-sm hover:bg-gray-300"
        >
          انصراف
        </button>
        <button
          type="submit"
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          ذخیره تغییرات
        </button>
      </div>
    </form>
  );
}