import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { useSafeArea } from "react-native-safe-area-context";


export const Layout = ({
  children,
  
}) => {
  const insets = useSafeArea();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20
  },
 
});
