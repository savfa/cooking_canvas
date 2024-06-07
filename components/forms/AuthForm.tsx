import {
  ImageBackground,
  SafeAreaView, ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

import {router} from "expo-router";
import {Images} from "@/helpers/constants/Images";
import FormField from "@/components/forms/FormField";
import ButtonPrimary from "@/components/ButtonPrimary";
import {AppRoute} from "@/helpers/constants/routes";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store";
import {useCallback, useMemo, useState} from "react";
import {AppOperation} from "@/store/app/app";

interface Iprops {
  isLogin?: boolean;
  isRegister?: boolean;
}

const AuthForm =  (props: Iprops) => {
  const { isLogin, isRegister, ...rest } = props;

  const dispatch = useDispatch<AppDispatch>();

  const [values, setValues] = useState<any>({name: ``, email: ``, password: ``, confirmPassword: ``});

  const handleChange = useCallback((name: string, value: string) => {
    setValues((prevState: any) => {
      return {...prevState, [name]: value}
    })
  }, [])

  const {
    title,
    submitButtonText,
    handleSubmit,
    questionText,
    questionActionText,
    handleQuestion
  } = useMemo(() => {
    let title = ``;
    let submitButtonText = ``;
    let handleSubmit = (): any => ``;
    let questionText = ``;
    let questionActionText = ``;
    let handleQuestion = (): any => null;

    if (isLogin) {
      title = `Вход`;
      submitButtonText = `войти`;
      handleSubmit = () => {
        dispatch(AppOperation.login({ email: values.email, password: values.password }))
      };
      questionText = `У вас еще нет аккаунта? `;
      questionActionText = `Зарегистрироваться`;
      handleQuestion = () => router.push(AppRoute.REGISTER)
    }
    if (isRegister) {
      title = `регистрация`;
      submitButtonText = `зарегистрироваться`;
      handleSubmit = () => {
        dispatch(AppOperation.register({name: values.name, email: values.email, password: values.password }))
      };
      questionText = `У вас уже есть аккаунт? `;
      questionActionText = `Войти`;
      handleQuestion = () => router.push(AppRoute.LOGIN)
    }

    return { title, submitButtonText, handleSubmit, questionText, questionActionText, handleQuestion }
  }, [isLogin, isRegister, values])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <ImageBackground source={Images.cookEgg} resizeMode="cover" style={styles.imageBackground}>
        <ScrollView  contentContainerStyle={{
          minHeight: '100%',
        }}>
          <View style={styles.content}>
            <View>
              <Text style={styles.text}>Cooking canvas</Text>
              <Text style={[styles.text, styles.description]}>Создавай свои кулинарные рецепты</Text>
              <Text style={[styles.text, styles.loginText]}>{title}</Text>
            </View>

            {isRegister && (
              <FormField placeholder="Имя" beforeIronIconName="person" onChangeText={(value: string) => handleChange(`name`, value)}/>
            )}
            <FormField placeholder="Email адрес" beforeIronIconName="mail" onChangeText={(value: string) => handleChange(`email`, value)}/>
            <FormField placeholder="Пароль" beforeIronIconName="key" secureTextEntry onChangeText={(value: string) => handleChange(`password`, value)}/>
            {isRegister && (
              <FormField placeholder="Подтвердите пароль" beforeIronIconName="key" secureTextEntry onChangeText={(value: string) => handleChange(`confirmPassword`, value)}/>
            )}

            <ButtonPrimary text={submitButtonText} handlePress={handleSubmit} />

            <Text style={[styles.text, styles.textQuestion]}>{questionText}
              <Text  style={[styles.textQuestion, styles.textQuestionInner]} onPress={handleQuestion}>{questionActionText}</Text>
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default AuthForm;

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
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textQuestionInner: {
    color: '#FF6B00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}) as any;
