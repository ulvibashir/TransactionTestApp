import React, { useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Keyboard } from "react-native";
import { Layout } from "../commons";
import { PerformancePart, TransactionsPart } from "../components";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const HomeScreen = () => {
  
  return (
    <Layout>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.header}>
          <Text style={styles.title}>Transactions</Text>
          <View style={styles.fieldView}>
            <TextInput placeholder="Search" style={styles.field} />
          </View>
        </View>
        <View style={styles.body}>
          <PerformancePart />
          <TransactionsPart/>
        </View>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  field: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 5,
    textAlign: "center",
  },
  fieldView: {
    height: 40,
    width: "100%",
    backgroundColor: "#c9c9ce",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    marginTop: 15,
  },
});
