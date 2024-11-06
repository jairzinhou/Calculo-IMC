import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function ResultImc({ messageResultImc, resultImc }) {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>{messageResultImc}</Text>
      {resultImc && <Text style={styles.resultValue}>{resultImc}</Text>}
    </View>
  );
}
