import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    borderWidth:1,
    borderRadius:4,
    marginVertical:10
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',

  },
});

export const NotFind = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oh...</Text>
      <Text style={styles.text}>We will have coverage here very soon.</Text>
    </View>
  );
};
