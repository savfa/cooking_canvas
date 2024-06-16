import React, { useCallback } from "react";

import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

const Avatar = (props: any) => {
  const { avatarUrl } = props;

  const pickImage = useCallback(() => null, []);

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {avatarUrl ? (
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        ) : (
          <View>
            <Octicons
              size={60}
              name="person-add"
              color="#fff"
              style={styles.personIcon}
            />
          </View>
        )}
      </View>
      <Pressable onPress={pickImage} style={styles.editIcon}>
        <Octicons size={20} name="pencil" color="#000" />
      </Pressable>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    position: "relative",
  },
  avatarContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "gray",
  },
  avatar: {
    maxWidth: 80,
    maxHeight: 80,
  },
  personIcon: {},
  editIcon: {
    position: "absolute",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 30,
    top: 60,
    right: -4,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
  },
}) as any;
