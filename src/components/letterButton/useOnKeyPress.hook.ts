import { useEffect } from "react";

export const usePressedKeys = (onPressedKey: (letter: string) => void) => {
  useEffect(() => {
    const handlePressedKey = (event: KeyboardEvent) => {
      onPressedKey(event.key);
    };
    window.addEventListener("keydown", handlePressedKey);

    return () => {
      window.removeEventListener("keydown", handlePressedKey);
    };
  }, []);
};
