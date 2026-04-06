export const getRole = () => {
  if (typeof window === "undefined") return "guest";

  const role = sessionStorage.getItem("role");

  if (!role) return "guest";

  return role;
};