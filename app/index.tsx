import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

import {router} from "expo-router";
import {Images} from "@/helpers/constants/Images";
import FormField from "@/components/FormField";
import ButtonPrimary from "@/components/ButtonPrimary";
import {useEffect} from "react";
import {AppOperation} from "@/store/app/app";
import {AppRoute} from "@/helpers/constants/routes";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store";

export default function Index() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(AppOperation.checkAuth())
  }, [dispatch])

  const onPress = () => {
    router.push(AppRoute.LOGIN)
  }

  const handleQuestion = () => {
    router.push(AppRoute.REGISTER)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <ImageBackground source={Images.food} resizeMode="cover" style={styles.imageBackground}>
        <View style={styles.content}>
          <View>
            <Text style={styles.text}>Cooking canvas</Text>
            <Text style={[styles.text, styles.description]}>Создай свои кулинарные рецепты</Text>
            <Text style={[styles.text, styles.loginText]}>Вход</Text>
          </View>
          <FormField placeholder="Email адрес" ironIconName="mail" />
          <FormField placeholder="Пароль" ironIconName="key" secureTextEntry />

          <ButtonPrimary text="вход" handlePress={onPress} />

          <Text style={[styles.text, styles.textQuestion]}>У вас еще нет аккаунта? {' '}
              <Text  style={[styles.textQuestion, styles.textQuestionInner]} onPress={handleQuestion}>Зарегистрироваться</Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flex: 1,
    paddingLeft: 35,
    paddingRight: 35,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 37,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    fontWeight: 'semibold',
  },
  loginText: {
    fontSize: 33,
  },

  textQuestion: {

    fontSize: 16,
  },
  textQuestionInner: {
    color: '#FF6B00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}) as any;
