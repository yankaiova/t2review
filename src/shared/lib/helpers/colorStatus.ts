export const colorStatus = (text: string) => {
  if (text === "завершена") return "green";
  if (text === "отменена") return "red";
  return "orange";
};
