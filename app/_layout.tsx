import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "@/store";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "@/helpers/hooks/useColorScheme";
import { useFonts } from "expo-font";

const RootLayout = () => {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ title: "Приветствие", headerShown: false }}
          />
          <Stack.Screen
            name="(auth)"
            options={{ title: "Авторизация", headerShown: false }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{ title: "Приложение", headerShown: false }}
          />
        </Stack>
      </Provider>
    </ThemeProvider>
  );
};

export default RootLayout;
