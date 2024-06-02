import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import {router} from "expo-router";
import {Images} from "@/constants/Images";
import FormField from "@/components/FormField";

export default function Index() {

  const onPress = () => {
    router.push('/login')
  }

  const handleQuestion = () => {
    router.push('/register')
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
          <TouchableOpacity style={[styles.button]} onPress={onPress}>
            <Text style={[styles.text, styles.buttonText]}>Вход</Text>
          </TouchableOpacity>
          <Text style={[styles.text, styles.textQuestion]}>У вас нет аккаунта? {' '}
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
  button: {
    width: '100%',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 25,
    lineHeight: 30,
    textTransform: 'uppercase',
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
