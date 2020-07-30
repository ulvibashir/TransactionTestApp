import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { ICONS } from '../utils/ICONS';
import { COLORS } from '../utils/COLORS';

export const CustomBtn = ({title, icon, onPressHandler, style}) => {
  return(
      <TouchableOpacity style={[styles.container, style]} onPress={onPressHandler}>
          <Image style={styles.icon} source={ICONS[icon]}/>
          <Text>{title}</Text>
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.BTN,
    justifyContent: "center",
    height: 40,
    width: Dimensions.get("window").width / 2 - 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
});