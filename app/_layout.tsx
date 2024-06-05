import { Stack } from 'expo-router';
import {Provider, useDispatch} from "react-redux";
import store from "@/store";

export default function RootLayout() {

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{title: 'Первый',  headerShown: false }}  />
        <Stack.Screen name="(auth)" options={{title: 'Авторизация',  headerShown: true }}  />
      </Stack>
    </Provider>
  );
}
