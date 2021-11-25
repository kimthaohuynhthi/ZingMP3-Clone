import { useRef, useEffect } from "react";

const useEventListener = ({ eventName, handler, element = window }) => {
  console.log("voooo");
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => {
      saveHandler.current(event);
    };

    element.addEventListener(eventName, eventListener);
    element.removeEventListener(eventName, eventListener);
  }, [eventName, element]);
};
export default useEventListener;
