import { Stack } from 'expo-router';
import {Provider, useDispatch} from "react-redux";
import store from "@/store";

export default function RootLayout() {

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{title: 'Приветствие',  headerShown: false }}  />
        <Stack.Screen name="(auth)" options={{title: 'Авторизация',  headerShown: false }}  />
        <Stack.Screen name="(tabs)" options={{title: 'Приложение',  headerShown: false }}  />
      </Stack>
    </Provider>
  );
}
