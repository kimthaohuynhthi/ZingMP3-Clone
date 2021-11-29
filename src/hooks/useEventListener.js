// libs
import { useEffect } from "react";

const useEventListener = (eventName, isHover, handler) => {
  useEffect(
    () => {
      const isSupported = window && window.addEventListener;
      if (!isSupported) return false;
      if (isHover) window.addEventListener(eventName, handler);
      return () => {
        window.removeEventListener(eventName, handler);
      };
    },
    [eventName, isHover, handler] //Recall only if eventName or element changes
  );
};
export default useEventListener;
