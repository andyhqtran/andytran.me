import { getCookie, setCookie } from 'cookies-next';
import { AtomEffect } from 'recoil';

export const nextCookieEffect =
  <Type>(key: string): AtomEffect<Type> =>
  ({ setSelf, onSet, trigger }) => {
    const loadPersisted = async () => {
      const savedValue = getCookie(key);

      if (savedValue != null) {
        if (typeof savedValue === 'string') {
          setSelf(JSON.parse(savedValue));
        }
      }
    };

    if (trigger === 'get') {
      loadPersisted();
    }

    onSet((newValue, _, isReset) => {
      isReset ? getCookie(key) : setCookie(key, JSON.stringify(newValue));
    });
  };
