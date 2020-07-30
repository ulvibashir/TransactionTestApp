import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text  } from "react-native";
import { fullDate } from "../utils/extraFunctions";
import { Layout, CustomBtn } from "../commons";
import { ICONS } from "../utils/ICONS";
import { COLORS } from "../utils/COLORS";
export const TransactionScreen = ({
  navigation,
  route: {
    params: { item },
  },
}) => {
  return (
    <Layout>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Image style={styles.icon} source={ICONS.back} />
        </TouchableOpacity>
        <Text style={styles.title}>
          {item.name} {item.surname}
        </Text>
        <View style={styles.tmp} />
      </View>
      <Text style={styles.amount}>${item.amount}</Text>

      <View style={styles.btnWrapper}>
        <CustomBtn title="Card" icon="card" />
        <CustomBtn title="Debt" icon="dollar" />
      </View>

      <View style={styles.body}>
        <Text style={styles.bodyTitle}>Transaction Detail</Text>
        <View style={styles.line} />

        <View style={styles.details}>
          <View style={styles.fieldWrapper}>
            <Text style={styles.detailText}>Payment Detail</Text>
            <View style={styles.detailWrapper}>
              <Text>{fullDate(item.date)}</Text>
              <TouchableOpacity style={styles.detailInfo}><Text>i</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.fieldWrapper}>
            <Text style={styles.detailText}>Type</Text>
            <View style={styles.detailWrapper}>
              <Text>Debt</Text>
              <TouchableOpacity style={styles.detailInfo}><Text>i</Text></TouchableOpacity>
            </View>
          </View>

          <View style={styles.fieldWrapper}>
            <Text style={styles.detailText}>Pay With</Text>
            <View style={styles.detailWrapper}>
              <Text>Credit Account</Text>
              <TouchableOpacity style={styles.detailInfo}><Text>i</Text></TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.exportBtn}>
          <Image style={styles.exportIcon} source={ICONS.exportIcon}/>
          <Text>Export</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 30,
    height: 30,
  },
  tmp: {
    width: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 27,
    fontWeight: "bold",
  },
  btnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 30,
  },
  bodyTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  line: {
    width: "100%",
    height: 4,
    borderRadius: 30,
    backgroundColor: COLORS.indicatorBG,
    marginVertical: 15,
  },
  body: {
    marginTop: 40,
  },
  fieldWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: COLORS.indicatorBG,
    height: 35,
    alignItems: 'center'
  },
  details: {
    marginHorizontal: 40,
  },
  detailText: {
    fontWeight: 'bold',
    fontSize: 15
  },
  exportIcon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  exportBtn: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 40,
    alignItems: 'center'
  },
  detailWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailInfo: {
    width: 18,
    height: 18,
    borderRadius: 100,
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 1,
    justifyContent: 'center',
    marginLeft: 10
  }
});
