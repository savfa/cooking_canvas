import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN: string = `token`;

export const getUserAuthToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(TOKEN);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const setUserAuthToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(TOKEN, JSON.stringify(token));
  } catch (e) {
    // saving error
  }
};

export const deleteUserAuthToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN)
  } catch(e) {
    // remove error
  }
}