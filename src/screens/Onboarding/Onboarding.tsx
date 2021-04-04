import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a2e4fa',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export const Onboarding = props => {
  const {navigation} = props;
  return (
    <View style={styles.container} onTouchMove={() => navigation.navigate('Login')}>
      <Text style={styles.text}>Welcome</Text>
      <Text>Swipe to go to the Login screen</Text>
    </View>
  );
};
