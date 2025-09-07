// /app/components/Modal.tsx
"use client";

import { useEffect } from "react";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  title?: string;
};

export default function Modal({ children, onClose, title }: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />
      {/* dialog */}
      <div className="relative z-[101] w-fit rounded-xl bg-white p-4 shadow-xl">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title ?? "ویرایش"}</h3>
          <button
            onClick={onClose}
            className="rounded px-2 py-1 text-gray-600 hover:bg-gray-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

