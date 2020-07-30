import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Chart } from './Chart';
import { COLORS } from '../utils/COLORS';

export const PerformancePart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Performance</Text>
      <View style={styles.line} />
      <View style={styles.chartBox}>
        <Chart
          title="Current Week"
          text="64%"
          pgColor={COLORS.CHART_1}
          bgColor={COLORS.indicatorBG}
          progressPercent={64}

        />
        <Chart
          title="Last Week"
          text="40%"
          pgColor={COLORS.CHART_2}
          bgColor={COLORS.indicatorBG}
          progressPercent={40}

        />
        <Chart
          title="Last Month"
          text="90%"
          pgColor={COLORS.CHART_3}
          bgColor={COLORS.indicatorBG}
          progressPercent={90}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
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
    backgroundColor: "#d9dcde",
    marginVertical: 15
  },
  chartBox: {
      width: '100%',
      height: '100%',
      flexDirection: 'row'
  }
});