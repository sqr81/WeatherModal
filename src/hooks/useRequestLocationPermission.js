import { useEffect, useState } from "react";
import { requestLocationPermission } from "../requestPermission";

export default () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPermission = async () => {
      setIsLoading(true);
      const authorized = await requestLocationPermission();

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      setIsAuthorized(authorized);
      setIsLoading(false);
    }
    getPermission();
  }, []);

  return { isLoading, isAuthorized }
}