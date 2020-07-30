import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { CircularProgress } from "./CircularProgress";

export const Chart = ({
  title,
  text,
  pgColor,
  bgColor,
  progressPercent
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <CircularProgress
        text={text}
        pgColor={pgColor}
        bgColor={bgColor}
        textColor={pgColor}
        strokeWidth={7}
        progressPercent={progressPercent}
        textSize="15"
        size={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },

  title: {
    textAlign: "center",
    color: 'gray'
  },
});
