import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text, View, Dimensions } from "react-native";
import { COLORS } from "../utils/COLORS";

export const ListItem = ({ item, onPressHandler }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressHandler}>
      <View style={styles.textWrapper}>
      <Image style={styles.img} source={{ uri: item.userProfileImg }} />
        <Text style={styles.fullName}>{item.name} {item.surname}</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.amount} >${item.amount}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    borderBottomColor: COLORS.indicatorBG,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  textWrapper: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  fullName: {
      marginLeft: 20
  },
  amount: {
      marginRight: 20
  }
});
