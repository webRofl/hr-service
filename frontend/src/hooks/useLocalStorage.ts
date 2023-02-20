type LSKeys = 'isMenuOpen' | 'refreshToken';

export const useLocalStorage = () => {
  const localStorage = window.localStorage;

  if (!localStorage.getItem('hrServiceLS')) {
    localStorage.setItem('hrServiceLS', JSON.stringify({}));
  }

  const storage = JSON.parse(localStorage.getItem('hrServiceLS')!);

  const updateLocalStorage = (value: unknown): void => {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem('hrServiceLS', jsonValue);
  };

  const LSGetter = (key: LSKeys): string | null => {
    return storage[key];
  };

  const LSSetter = (key: LSKeys, value: unknown): void => {
    storage[key] = value instanceof String ? value : JSON.stringify(value);
    updateLocalStorage(storage);
  };

  return {
    LSGetter,
    LSSetter,
  };
};
