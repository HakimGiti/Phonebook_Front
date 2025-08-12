// app/service/api.ts
export const API_URL = "http://localhost:3000"; // بک‌اند NestJS

// دریافت لیست کاربران (user) ----------------------------------
export async function fetchUsers() {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

// دریافت لیست مخاطبین (contacts) -----------------------------------
export async function fetchContacts() {
  const res = await fetch(`${API_URL}/contacts`);
  if (!res.ok) throw new Error("Failed to fetch contacts");
  //return res.json();
  const data = await res.json();
  return data;
}

// دریافت لیست شماره‌ها (phonebook) ------------------------------------
export async function fetchPhonebook() {
  const res = await fetch(`${API_URL}/phonebook`);
  if (!res.ok) throw new Error("Failed to fetch phonebook");
  return res.json();
}

//  حذف یک شماره از لیست شماره‌ها phonebook ----------------------------------------
export async function deletePhonebookEntry(id: number) {
  const res = await fetch(`${API_URL}/phonebook/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete phonebook entry");
  // اگر پاسخی وجود نداشت
  if (res.status === 204) return null;
  try {
    return await res.json();
  } catch {
    return null; // در صورتی که پاسخی به شکل JSON وجود نداشت
  }
}
//---------------------------------------------------------------
export async function fetchUsersWithContacts() {
  const res = await fetch(`${API_URL}/contacts/users-with-contacts`);
  if (!res.ok) throw new Error("Failed to fetch users with contacts");
  return res.json();
}
//---------------------------------------------------------------
export async function deleteUser(userId: number) {
  const res = await fetch(`${API_URL}/users/${userId}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete user");
  }
}

