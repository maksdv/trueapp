import React, {useContext, useMemo, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  Alert,
  ScrollView,
} from 'react-native';
import {useQuery} from 'react-query';
import {AuthContext} from '../../navigation/AuthProvider';
import BottomSheet from '@gorhom/bottom-sheet';
import {getCountries} from '../../service/getCountries';
import {useTheme} from '../../utils/theme/ThemeProvider';
import {headerTexts} from '../../utils/copys';
import {CustomButton} from '../../components/buttons/CustomButton';
import {Finder} from '../../components/finder/Finder';
import {OfferList} from '../../components/offers/OfferList';
import {ItemType} from '../../components/offers/OfferItem';

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {
    fontSize: 14,
  },
  searchContainer:{
    paddingHorizontal: '5%'
  }
});

type HomeType = {
  navigation: any;
};

export const Home = ({navigation}: HomeType) => {
  const {user} = useContext<any>(AuthContext);
  const [open, setOpen] = useState<boolean>(false);
  const [country, setCountry] = useState<string>('');
  const [offerSelected, setOffer] = useState<ItemType>(null);
  // Using the custom hook we made to pull the theme colors
  const {colors, isDark} = useTheme();
  const query = useQuery('COUNTRIES', getCountries);
  const bottomSheetRef = useRef<BottomSheet>(null);
  // variables for bottomSheet
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
    setOffer(null);
    bottomSheetRef.current.collapse();
  };

  const getMsgForHeader = () => {
    if (!!country) return `Choosing plan for ${country}`;
    return open ? headerTexts.open : headerTexts.close;
  };

  const getActionForGetIt = () => {
    user
      ? Alert.alert(
          'Congratulation',
          country
            ? `Thanks for buying your plan for ${country}.`
            : 'Thanks for use our app.',
        )
      : navigation.replace('Login');
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
      <View style={styles.searchContainer}><CustomButton
        color={colors.primary}
        onPress={handleButton}
        textColor={colors.text}
        text={getMsgForHeader()}
        icon="search1"
      /></View>
      <OfferList selected={offerSelected} action={setOffer} />
      <BottomSheet
        style={{zIndex: 100}}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={e => onChange(e)}>
        <Finder data={cleanArray()} onSelect={selectCountry} value={country} />
      </BottomSheet>
      <View
        style={{
          width: '100%',
          paddingHorizontal: '5%',
          paddingVertical: 10,
          position: 'absolute',
          bottom: 0,
        }}>
        <CustomButton
          color={colors.buy}
          onPress={() => getActionForGetIt()}
          textColor={colors.text}
          text={'GET IT'}
          hiden={!offerSelected}
        />
      </View>
    </View>
  );
};
