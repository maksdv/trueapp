import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {planList} from '../../service/PlanList';
import {OfferItem} from './OfferItem';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export const OfferList = ({}) => {
  const [searchingText, setSearchingText] = useState<string>('');
  const [countriesList, setCountriesList] = useState<[]>([]);

  const renderItem = ({item, index}) => {
    return <OfferItem name={item} index={index} onPress={{}} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={planList}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};
