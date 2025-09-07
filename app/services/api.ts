// /app/service/api.ts



// ------------------- Base URL --------------------
export const API_URL = "http://localhost:3000";

// ############################################ Users ############################################
//
// دریافت لیست کاربران ----------------------------------
export async function fetchUsers() {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}
// حذف کاربر --------------------------------------------
export async function deleteUser(userId: number) {
  if (!Number.isInteger(userId)) {
    throw new Error("invalid userId");
  }
  const res = await fetch(`${API_URL}/users/${userId}`, {
    method: "DELETE",
  });
  if (res.status === 204) return null; // ✅ اگر حذف شد و پاسخی نبود
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Failed to delete user");
  }
  try {
    return await res.json();
  } catch {
    return null;
  }
}
// /users/search?q=... ----------------------------------
export async function searchUsers(query: string) {
  if (!query.trim()) return []; // چیزی نفرست، فقط یه آرایه خالی بده
  const res = await fetch(
    `${API_URL}/users/search?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error("Failed to search users");
  try {
    return await res.json();
  } catch {
    return null;
  }
}

// ########################################## Contacts ##########################################
//
// دریافت لیست مخاطبین (contacts) -----------------------
export async function fetchContacts() {
  const res = await fetch(`${API_URL}/contacts`);
  if (!res.ok) throw new Error("Failed to fetch contacts");
  try {
    return await res.json();
  } catch {
    return null;
  }
}
//-------------------------------------------------------
export async function fetchUsersWithContacts() {
  const res = await fetch(`${API_URL}/contacts/users-with-contacts`);
  if (!res.ok) throw new Error("Failed to fetch users with contacts");
  try {
    return await res.json();
  } catch {
    return null;
  }
}

// ------------------- Update One Contact --------------------
export async function updateContact(
  id: number,
  payload: {
    phone?: string;
    email?: string;
    address?: string;
    userId?: number;
    userName?: string;
  }
) {
  const res = await fetch(`${API_URL}/contacts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  // تلاش برای خواندن پاسخ
  let data: any = null;
  try {
    data = await res.json();
  } catch {
    /* ممکنه 204 برگرده */
  }

  if (!res.ok) {
    let msg = "خطای ناشناخته";
    try {
      const err = await res.json();
      msg = err.message || msg;
    } catch {}
    throw new Error(msg);
  }
  return data;
}

// ------------------- Update Grouped Contacts --------------------
export async function updateContactsBulk(
  contacts: {
    id: number;
    phone?: string;
    email?: string;
    address?: string;
    userId?: number;
  }[]
) {
  const res = await fetch(`${API_URL}/contacts/bulk`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contacts),
  });

  let data: any = null;
  try {
    data = await res.json();
  } catch {
    /* ممکنه 204 برگرده */
  }

  if (!res.ok) {
    const msg =
      (Array.isArray(data?.message) ? data.message.join("، ") : data?.message) ||
      "Failed to update contacts";
    throw new Error(msg);
  }
  return data;
}



//-----------------------------------------------------------
type AddContactData = {
  id: number;
  phone: string;
  email?: string;
  address?: string;
};
type AddContactResult = {
  data: AddContactData | null;
  error: string | null;
};

type AddContactError = {
  message: string | null;
};

// ------------------- Add Contact --------------------
export async function addContact(contact: any): Promise<AddContactResult> {
  try {
    const res = await fetch(`${API_URL}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    console.log("⚠️ status", res.status, res.statusText);

    if (!res.ok) {
      const err2: AddContactError = await res.json();
      // پیام خطای بک‌اند را به کاربر نشان بده (مثلاً ⚠️ شماره تلفن تکراری است.)
      console.log("⚠️ Errorrrrrr======", err2.message);
      //throw new Error(err2.message || "خطای ناشناخته !");

      throw new Error(
        (Array.isArray(err2?.message)
          ? err2.message.join("، ")
          : err2?.message) ||
          (res.status === 409
            ? "⚠️ شماره تلفن تکراری است."
            : res.status === 400
            ? "درخواست نامعتبر است."
            : "خطای ناشناخته")
      );
    }

    const data: AddContactData = await res.json();
    console.log("dataAAAAA=", data);

    return {
      data: data,
      error: null,
    };
  } catch (err: unknown) {
    return {
      data: null,
      error: err instanceof Error ? err.message : JSON.stringify(err),
    };
  }
}

// ########################################## phonebook ##########################################
//
// دریافت لیست شماره‌ها ----------------------------------
export async function fetchPhonebook() {
  const res = await fetch(`${API_URL}/phonebook`);
  if (!res.ok) throw new Error("Failed to fetch phonebook");
  try {
    return await res.json();
  } catch {
    return null;
  }
}

//  حذف یک شماره از لیست شماره‌ها phonebook --------------
export async function deletePhonebookEntry(id: number) {
  const res = await fetch(`${API_URL}/phonebook/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete phonebook entry");
  if (res.status === 204) return null;
  try {
    return await res.json();
  } catch {
    return null;
  }
}

