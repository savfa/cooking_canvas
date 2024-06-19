import React, { useCallback, useState } from "react";

import { View, StyleSheet, Platform } from "react-native";
import FormField from "@/components/forms/FormField";
import Octicons from "@expo/vector-icons/Octicons";
import SectionPrimary from "@/components/SectionPrimary";

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
      <SectionPrimary>
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
            inputStyle={styles.inputStyle}
            beforeIconStyle={styles.iconStyle}
            afterIconStyle={styles.iconStyle}
            placeholderTextColor="#bebebe"
          />
          {/* <View style={styles.filter}>
            <Octicons
              size={28}
              name="filter"
              style={styles.filterIcon}
              onPress={() => ``}
            />
          </View> */}
        </View>
      </SectionPrimary>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  searchPanel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  search: {
    width: "auto",
    flex: 1,
    backgroundColor: "#f1f1f1",
    borderRadius: 16,
    borderBottomWidth: 0,
    color: "#bebebe",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: 2 },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  inputStyle: {
    color: "#000",
  },
  iconStyle: {
    color: "#bebebe",
  },
  filter: {
    width: 50,
    height: 50,
    backgroundColor: "#f1f1f1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  filterIcon: {
    color: "#bebebe",
  },
}) as any;
