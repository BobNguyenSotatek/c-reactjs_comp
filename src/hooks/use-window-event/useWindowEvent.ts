import { useEffect } from 'react';

export function useWindowEvent<K extends string>(
  type: K,
  listener: K extends keyof WindowEventMap
    ? (this: Window, ev: WindowEventMap[K]) => void
    : (this: Window, ev: CustomEvent) => void,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    window.addEventListener(type, listener as EventListenerOrEventListenerObject, options);
    return () =>
      window.removeEventListener(type, listener as EventListenerOrEventListenerObject, options);
  }, [type, listener, options]);
}
