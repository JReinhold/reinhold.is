export const toLocaleDateString = (date: Date): string =>
  date.toLocaleDateString(
    typeof window !== "undefined" ? window.navigator?.language : undefined,
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );
