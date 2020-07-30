import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import uuid from 'react-uuid'
import {selectTransactions} from '../redux/transaction'
import { useNavigation } from '@react-navigation/native';

import { ListItem } from './ListItem';
import {COLORS} from '../utils/COLORS'
const mapStateToProps = state => ({
  transactions: selectTransactions(state)
})
export const TransactionsPart = connect(mapStateToProps)(({transactions}) => {
  const navigation = useNavigation();
  
  const onPressHandler = (item) => {
    navigation.navigate('transaction-screen', {item});
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <View style={styles.line} />
      <View style={styles.body}>
        <FlatList data={transactions}
        keyExtractor={() => uuid()}
        renderItem={({item}) => <ListItem item={item} onPressHandler={() => onPressHandler(item)}/>} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
    container: {
      height: 300,
      marginTop: 15,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    line: {
      width: '100%',
      height: 4,
      borderRadius: 30,
      backgroundColor: COLORS.indicatorBG,
      marginVertical: 15
    },
    body:{
      flex: 1
    }
  });