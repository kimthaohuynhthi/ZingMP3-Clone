// libs
import { useEffect } from "react";

const useEventListener = (eventName, isHover, handler) => {
  useEffect(
    () => {
      const isSupported = window && window.addEventListener;
      if (!isSupported) return false;
      if (isHover) window.addEventListener(eventName, handler);
      else window.removeEventListener(eventName, handler);

      return () => {
        window.removeEventListener(eventName, handler);
      };
    },
    [eventName, isHover, handler] // Re-run if eventName or element changes
  );
};
export default useEventListener;
