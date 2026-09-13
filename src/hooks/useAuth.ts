import { useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/api";
import { useAuthStore } from "@/stores/auth-store";

export function useAuth() {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      async function loadUser() {
        const response = await getCurrentUser();

        if (response.ok) {
          const data = await response.json();

          useAuthStore.getState().setUser(data);
        }
      }

      setLoading(false);

      loadUser();
    }, []);

    return { loading };
}