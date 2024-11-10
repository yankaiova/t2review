export const saveUser = (user: number): void => {
  localStorage.setItem("user", String(user));
};
export const cleanUser = (): void => {
  localStorage.removeItem("user");
};
export const getUser = (): number | null => {
  return localStorage.getItem("user")
    ? Number(localStorage.getItem("user"))
    : null;
};
