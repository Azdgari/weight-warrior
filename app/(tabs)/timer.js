import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from '../assets/styles';
import { Link, router } from 'expo-router';

const Timer = () => {
  return (
    // <View style={styles.container}>
    <View>
      <Text>Timer</Text>
      <Link href="../modal.js">Dismiss</Link>
    </View>
  );
};

export default Timer;
