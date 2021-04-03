import * as React from 'react';
import {Switch as RNSwitch, Text, View, StyleSheet} from 'react-native';
import {useTheme} from '../../utils/theme/ThemeProvider';

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
});
export const Switch: React.FC<{}> = () => {
  const {setScheme, isDark, colors} = useTheme();

  const toggleScheme = () => {
    isDark ? setScheme('light') : setScheme('dark');
  };

  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>
        {isDark ? 'Use light mode' : 'Use dark mode'}
      </Text>
      <RNSwitch value={isDark} onValueChange={toggleScheme} />
    </View>
  );
};
