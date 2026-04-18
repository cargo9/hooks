import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  // Це custom hook.
  // Він поводиться схоже на useState, але ще вміє читати і записувати значення в localStorage.
  const [value, setValue] = useState(() => {
    // initialValue може бути або готовим значенням, або функцією, яка повертає значення.
    // Так ми підтримуємо обидва варіанти, як це робить звичайний useState.
    const fallbackValue =
      typeof initialValue === "function" ? initialValue() : initialValue;

    // Пробуємо прочитати раніше збережене значення з браузера.
    const storedValue = window.localStorage.getItem(key);

    if (storedValue !== null) {
      try {
        // localStorage зберігає тільки текст,
        // тому ми перетворюємо JSON-рядок назад у звичайне JavaScript-значення.
        return JSON.parse(storedValue);
      } catch {
        // Якщо там зіпсовані дані, видаляємо їх,
        // щоб застосунок не падав через помилку парсингу.
        window.localStorage.removeItem(key);
      }
    }

    // Якщо в браузері ще нічого немає, беремо початкове значення.
    return fallbackValue;
  });

  // Кожного разу, коли value змінюється, записуємо нове значення в localStorage.
  // Завдяки цьому дані переживають перезавантаження сторінки.
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Повертаємо пару [значення, функція зміни], щоб hook використовувався майже як useState.
  return [value, setValue];
}
