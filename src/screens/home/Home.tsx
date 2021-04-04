import React, {useMemo, useRef, useState} from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import {useQuery} from 'react-query';
import BottomSheet from '@gorhom/bottom-sheet';
import {getCountries} from '../../service/getCountries';
import {useTheme} from '../../utils/theme/ThemeProvider';
import {headerTexts} from '../../utils/copys';
import {CustomButton} from '../../components/buttons/CustomButton';
import {Finder} from '../../components/finder/Finder';
import { OfferList } from '../../components/offers/OfferList';

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {
    fontSize: 14,
  },
});

export const Home: React.FC<{}> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [country, setCountry] = useState<string>('');
  // Using the custom hook we made to pull the theme colors
  const {colors, isDark} = useTheme();
  const query = useQuery('COUNTRIES', getCountries);
  const bottomSheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ['0%', '90%'], []);

  const handleButton = () => {
    open ? bottomSheetRef.current.collapse() : bottomSheetRef.current.expand();
    setOpen(!open);
  };

  const onChange = state => {
    !state ? setOpen(false) : null;
  };

  const cleanArray = () => {
    return query.data.map(item => item.name);
  };

  const selectCountry = value => {
    setCountry(value);
    bottomSheetRef.current.collapse();
  };

  if (query.isLoading) return <ActivityIndicator />;
  if (query.isError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <CustomButton
        color={colors.primary}
        onPress={handleButton}
        textColor={colors.text}
        text={open ? headerTexts.open : headerTexts.close}
        icon="search1"
      />
      <OfferList />
      <BottomSheet
        style={{zIndex: 100}}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={e => onChange(e)}>
        <Finder data={cleanArray()} onSelect={selectCountry} value={country} />
      </BottomSheet>
    </View>
  );
};
