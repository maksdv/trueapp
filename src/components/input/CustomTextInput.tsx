import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
  insideInput: {
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

type TextInputType = {
  placeholder?: string;
  searchingText: string;
  setSearchingText: any;
};

export const CustomTextInput = ({
  placeholder,
  searchingText,
  setSearchingText,
}: TextInputType) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.insideInput, {backgroundColor: '#ebedf0'}]}
        placeholder={placeholder}
        value={searchingText}
        onChangeText={setSearchingText}
      />
    </View>
  );
};
