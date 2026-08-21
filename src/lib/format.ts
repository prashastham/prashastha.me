export function formatDate(
  dateString: string,
  style: "long" | "compact" = "long",
): string {
  const date = new Date(dateString);

  if (style === "compact") {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
