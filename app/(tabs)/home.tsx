import React from "react";

import {
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Header from "@/components/Header";
import RecipeCard from "@/components/RecipeCard";

const { width } = Dimensions.get("window");

const Home = () => (
  // const { width } = useWindowDimensions();

  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />

    <FlatList
      ListHeaderComponent={<Header />}
      stickyHeaderIndices={[0]}
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
  </View>
);
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    maxWidth: (width - 10) / 2,
  },
  title: {
    fontSize: 32,
  },
}) as any;
