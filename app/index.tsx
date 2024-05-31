import {ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {router} from "expo-router";
import {Images} from "@/constants/Images";

export default function Index() {

  const onPress = () => {
    router.push('/login')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ImageBackground source={Images.food} resizeMode="cover" style={styles.imageBackground}>
        <View style={styles.content}>
          <Text style={styles.text}>Cooking canvas</Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={[styles.text, styles.buttonText]}>Продолжить</Text>
          </TouchableOpacity>
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
    height: '100%'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
  button: {

  },
  buttonText: {
    fontSize: 16,
  }
}) as any;
