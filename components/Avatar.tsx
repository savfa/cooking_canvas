import React, { useCallback, useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { View, StyleSheet, Pressable, Image } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import { AppOperation } from "@/store/app/app";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { BASE_SERVER_URL } from "@/helpers/api";

interface IAvatarProps {
  avatarUrl: string | null;
}

const Avatar = (props: IAvatarProps) => {
  const { avatarUrl } = props;
  const dispatch = useDispatch<AppDispatch>();

  const [image, setImage] = useState<any>(null);

  useEffect(() => {
    setImage(avatarUrl ? `${BASE_SERVER_URL}/${avatarUrl}` : avatarUrl);
  }, [avatarUrl]);

  const uploadImage = useCallback(
    (imageUri: string) => {
      const formData = new FormData();
      const fileType = imageUri.split(".").pop();
      const fileToUpload = {
        uri: imageUri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
      } as any;

      formData.append("file", fileToUpload);

      return dispatch(AppOperation.uploadUserAvatar(formData));
    },
    [dispatch]
  );

  const pickImage = useCallback(async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets?.[0]?.uri;
      setImage(imageUri);
      uploadImage(imageUri).catch(() => setImage(avatarUrl));
    } else {
      setImage(avatarUrl);
    }
  }, [avatarUrl, uploadImage]);

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.avatar} />
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
        <Octicons size={20} name="pencil" color="#bebebe" />
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
    width: 100,
    height: 100,
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
    right: -6,
    backgroundColor: "#f1f1f1",
  },
}) as any;
