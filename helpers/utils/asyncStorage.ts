import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN: string = `token`;

export const getUserAuthToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(TOKEN);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    return null;
  }
};

export const setUserAuthToken = async (token: string) => {
  try {
    return await AsyncStorage.setItem(TOKEN, JSON.stringify(token));
  } catch (e) {
    // saving error
    return null;
  }
};

export const deleteUserAuthToken = async () => {
  try {
    return await AsyncStorage.removeItem(TOKEN);
  } catch (e) {
    // remove error
    return null;
  }
};
