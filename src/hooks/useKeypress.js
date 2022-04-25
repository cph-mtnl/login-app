import { useEffect } from "react";

export default function useKeypress(target, callback) {
  useEffect(() => {
    const enterHandler = (event) => {
      if (event.key === target) {
        callback();
      }
    };
    window.addEventListener("keypress", enterHandler);

    // Cleanup
    return () => {
      window.removeEventListener("keypress", enterHandler);
    };
  }, []);
}
