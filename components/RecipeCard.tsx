import React from "react";

import { Text, View, StyleSheet, Image } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import { Images } from "@/helpers/constants/Images";

const RecipeCard = (props: any) => {
  const { size = "l" } = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Octicons
          size={28}
          name="heart"
          style={styles.favorite}
          onPress={() => ``}
        />
        <View style={{ maxWidth: 100, maxHeight: 100 }}>
          <Image
            source={Images.hamburger}
            style={{ maxWidth: 100, maxHeight: 100 }}
          />
        </View>
      </View>
      <View>
        <Text>категория</Text>
        <Text>название</Text>
        <View>
          <Octicons size={10} name="clock" style={styles.time} />
          <Text>10:00</Text>
        </View>
        {/* todo рэйтинг */}
        <View style={{display: 'flex', flexDirection: 'row', gap: 3}}>
          <Octicons size={15} name="star" style={styles.star} />
          <Octicons size={15} name="star" style={styles.star} />
          <Octicons size={15} name="star" style={styles.star} />
          <Octicons size={15} name="star" style={styles.star} />
          <Octicons size={15} name="star" style={styles.star} />
        </View>
      </View>
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#707070",
    borderRadius: 16,
    width: "100%",
    maxHeight: 216,
    padding: 10,
  },
  favorite: {},
  star: {
    color: "#FF6B00",
  },
}) as any;
