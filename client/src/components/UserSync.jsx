import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

export default function UserSync() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const syncUser = async () => {
      try {
        await axios.post("http://localhost:5000/api/user/sync", {
          email: user.primaryEmailAddress.emailAddress,
          name: user.fullName,
        });
      } catch (err) {
        console.log(err?.response?.data || err.message);
      }
    };

    syncUser();
  }, [isLoaded, user]);

  return null;
}
