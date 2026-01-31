export const getUserRole = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
// conditional render
  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload.role;
};
