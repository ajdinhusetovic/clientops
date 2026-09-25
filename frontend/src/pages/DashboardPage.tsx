import { useEffect, useState } from "react";
import { useAuth, UserButton } from "@clerk/react";

import { getCurrentUser } from "../api/users";
import type { CurrentUser } from "../types/user";

export function DashboardPage() {
  const { getToken } = useAuth();

  const [user, setUser] = useState<CurrentUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    async function loadCurrentUser() {
      try {
        const token = await getToken();

        if (!token) {
          throw new Error("Clerk did not provide a session token");
        }

        const currentUser = await getCurrentUser(token);

        if (!isCancelled) {
          setUser(currentUser);
        }
      } catch (requestError) {
        if (!isCancelled) {
          setError(
            requestError instanceof Error
              ? requestError.message
              : "Unable to load your account",
          );
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    void loadCurrentUser();

    return () => {
      isCancelled = true;
    };
  }, [getToken]);

  if (isLoading) {
    return <p>Loading your account...</p>;
  }

  if (error) {
    return <p>Unable to load account: {error}</p>;
  }

  if (!user) {
    return <p>User account was not found.</p>;
  }

  const displayName =
    [user.firstName, user.lastName].filter(Boolean).join(" ") || user.email;

  return (
    <section>
      <header>
        <div>
          <h2>Dashboard</h2>
          <p>Welcome, {displayName}.</p>
        </div>

        <UserButton />
      </header>

      <div>
        <h3>Your account</h3>
        <p>Email: {user.email}</p>
        <p>User ID: {user.id}</p>
      </div>
    </section>
  );
}
