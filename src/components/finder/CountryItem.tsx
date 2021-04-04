import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 6,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export type FinderItemType = {
  name: string;
  index: number;
  onPress: any;
};

export const CountryItem = ({name, index, onPress}: FinderItemType) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(name)}
      style={[
        styles.container,
        {backgroundColor: index % 2 ? '#f2f7f7' : '#edfafc'},
      ]}>
          
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};
