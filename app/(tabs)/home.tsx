import React from "react";

import {
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import Header from "@/components/Header";
import RecipeCard from "@/components/RecipeCard";
import ThemedScreen from "@/components/ThemedScreen";
import { Colors } from "@/helpers/constants/Colors";

const { width } = Dimensions.get("window");

const Home = () => {
  // const { width } = useWindowDimensions();
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ThemedScreen>
      <StatusBar barStyle="dark-content" />

      <FlatList
        ListHeaderComponent={<Header />}
        stickyHeaderIndices={[0]}
        collapsable
        contentContainerStyle={{
          gap: 10,
          backgroundColor: Colors[colorScheme].screenBackground,
          paddingBottom: 10,
        }}
        numColumns={2}
        columnWrapperStyle={{ gap: 10, paddingHorizontal: 10 }}
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
    </ThemedScreen>
  );
};
export default Home;

const styles = StyleSheet.create({
  item: {
    maxWidth: (width - 10 - 20) / 2,
  },
  title: {
    fontSize: 32,
  },
}) as any;
