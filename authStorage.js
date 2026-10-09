
import * as SecureStore from "expo-secure-store";

const SESSION_KEY = "cordiiaCartSession";

// Save the logged-in user's session
export const saveSession = async (session) => {
  await SecureStore.setItemAsync(
    SESSION_KEY,
    JSON.stringify(session)
  );
};

// Get the saved session
export const getSession = async () => {
  const savedSession = await SecureStore.getItemAsync(SESSION_KEY);

  if (!savedSession) {
    return null;
  }

  return JSON.parse(savedSession);
};

// Remove the saved session during logout
export const removeSession = async () => {
  await SecureStore.deleteItemAsync(SESSION_KEY);
};
