import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {useTheme} from '../../utils/theme/ThemeProvider';

type ProfileType = {
  name: string;
  src: any;
};
export const Profile = ({name, src}: ProfileType) => {
const {colors} = useTheme();

  return (
    <View style={styles.profileContainer}>
      <Image style={styles.profileImg} source={src} />
      <Text style={[styles.text, {color: colors.text}]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  profileImg: {
      resizeMode: 'contain'
  },
  text:{
    fontWeight: 'bold',
  }
});
