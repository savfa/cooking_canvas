import React from "react";

import {
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Header from "@/components/Header";
import RecipeCard from "@/components/RecipeCard";

const { width } = Dimensions.get("window");

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}>
        <Header />

        <FlatList
          contentContainerStyle={{ gap: 10 }}
          numColumns={2}
          columnWrapperStyle={{ gap: 10 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => <RecipeCard style={styles.item} />}
          data={[
            { key: 1 },
            { key: 2 },
            { key: 3 },
            { key: 4 },
            { key: 5 },
            { key: 6 },
            { key: 7 },
            { key: 8 },
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1d64d",
  },
  scrollView: {
    minWidth: "100%",
    minHeight: "100%",
  },
  item: {
    maxWidth: (width - 10) / 2,
  },
  title: {
    fontSize: 32,
  },
}) as any;
