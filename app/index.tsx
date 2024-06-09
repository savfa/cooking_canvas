import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Images } from "@/helpers/constants/Images";
import { useEffect } from "react";
import { AppOperation } from "@/store/app/app";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { getAuthorizationStatus } from "@/store/app/selectors";
import { router } from "expo-router";
import { AppRoute } from "@/helpers/constants/routes";

export default function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(AppOperation.checkAuth());
  }, [dispatch]);

  useEffect(() => {
    const preview = setTimeout(() => {
      switch (authorizationStatus) {
        case `WAIT_SERVER_RESPONSE`:
        case `NO_AUTH`:
          router.push(AppRoute.LOGIN);
          break;
        case `AUTH`:
          router.push(AppRoute.HOME);
          break;
        default:
          break;
      }
    }, 2000);

    return () => {
      clearTimeout(preview);
    };
  }, [authorizationStatus]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={Images.food}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.content}>
          <View>
            <Text style={styles.text}>Cooking canvas</Text>
            <Text style={[styles.text, styles.description]}>
              Твой кулинарный холст
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    flex: 1,
    paddingLeft: 35,
    paddingRight: 35,
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 37,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    fontWeight: 500,
  },
}) as any;
