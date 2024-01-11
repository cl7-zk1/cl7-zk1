import { useState, useEffect } from "react";

// React FC is FunctionComponent
const StatusBar: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => {
      console.log("online");
      setIsOnline(true);
    };
    const handleOffline = () => {
      console.log("offline");
      setIsOnline(false);
    };

    // Add EventListener for offline and online status bar
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      // Run this a before component didUnmounted
      // Add EventListener for offline and online status bar
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
};

export default StatusBar;
