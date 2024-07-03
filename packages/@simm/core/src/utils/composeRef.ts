import { MutableRefObject, RefCallback } from 'react';

export const composeRef = <T>(...refs: (MutableRefObject<T> | RefCallback<T> | null | undefined)[]): RefCallback<T> => {
  return (instance: T | null) => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(instance);
      } else if (ref && typeof ref === 'object') {
        (ref as MutableRefObject<T | null>).current = instance;
      }
    });
  };
}
