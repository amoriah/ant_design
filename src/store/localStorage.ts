const isAuthentication = localStorage.getItem("isAuthentication") === "true";
const sessionStr = localStorage.getItem("session");
const currentSession = sessionStr ? JSON.parse(sessionStr) : null;
const usersStorage = JSON.parse(localStorage.getItem("users") || "[]");
const reservationsStore = JSON.parse(
  localStorage.getItem("reservations") || "[]"
);

const localStore = {
  isAuthentication,
  sessionStr,
  currentSession,
  usersStorage,
  reservationsStore,
};

export default localStore;
