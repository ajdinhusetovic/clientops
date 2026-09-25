import type { CurrentUser } from "../types/user";

const API_URL = "http://localhost:3000";

export async function getCurrentUser(token: string): Promise<CurrentUser> {
  const response = await fetch(`${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Unable to load user: ${response.status}`);
  }

  return response.json() as Promise<CurrentUser>;
}
