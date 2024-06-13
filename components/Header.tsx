import React, { useCallback, useState } from "react";

import { Text, View, StyleSheet } from "react-native";
import FormField from "@/components/forms/FormField";
import Octicons from "@expo/vector-icons/Octicons";

const Header = (props: any) => {
  const [searchValue, setSearchValue] = useState(``);

  const handleSearch = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const handleResetSearch = useCallback(() => {
    setSearchValue(``);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchPanel}>
        <FormField
          placeholder="Найти рецепт"
          beforeIconName="search"
          onChangeText={handleSearch}
          value={searchValue}
          {...(searchValue && {
            afterIconName: "x",
            handleAfterIcon: handleResetSearch,
          })}
          containerStyle={styles.search}
        />
        <View style={styles.filter}>
          <Octicons
            size={28}
            name="filter"
            style={styles.filterIcon}
            onPress={() => ``}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c1d64d",
  },
  searchPanel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 16,
  },
  search: {
    width: "auto",
    flex: 1,
    borderBottomWidth: 0,
    backgroundColor: "gray",
    borderRadius: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  filter: {
    width: 50,
    height: 50,
    backgroundColor: "gray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "white",
  },
  filterIcon: {
    color: "white",
  },
}) as any;
