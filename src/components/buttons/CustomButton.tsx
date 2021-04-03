import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

type ButtonType = {
  text: string;
  color: string;
  onPress: any;
  textColor: string;
  icon?: string;
};

export const CustomButton = ({
  text,
  color,
  onPress,
  textColor,
  icon,
}: ButtonType) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.container, {backgroundColor: color}]}>
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      {icon && <AntIcon style={{fontSize: 20}} name={icon} />}
    </TouchableOpacity>
  );
};
