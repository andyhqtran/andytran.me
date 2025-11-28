import localForage from "localforage";
import { type AtomEffect } from "recoil";

export const localForageEffect =
  <Type>(key: string): AtomEffect<Type> =>
  ({ setSelf, onSet, trigger }) => {
    const loadPersisted = async () => {
      const savedValue: string | null = await localForage.getItem(key);

      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
    };

    if (trigger === "get") {
      loadPersisted();
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localForage.removeItem(key)
        : localForage.setItem(key, JSON.stringify(newValue));
    });
  };
