import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CustomTextInput} from '../input/CustomTextInput';
import {textInput} from '../../utils/copys';
import {CountryItem} from './CountryItem';
import {NotFind} from './NotFind';

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

type FinderType = {
  data: [] | null;
  onSelect: any;
  value?: string;
};

export const Finder = ({data, onSelect, value}: FinderType) => {
  const [searchingText, setSearchingText] = useState<string>(value);
  const [countriesList, setCountriesList] = useState<[]>(data);

  useEffect(() => {
    setCountriesList(data.filter(item => item.includes(searchingText)));
  }, [searchingText]);

  const handlePress = value => {
    onSelect(value);
    setSearchingText('');
  };

  const renderItem = ({item, index}) => {
    return <CountryItem name={item} index={index} onPress={handlePress} />;
  };
  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder={textInput.placeholder}
        searchingText={searchingText}
        setSearchingText={setSearchingText}
      />
      <FlatList
        data={countriesList}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        ListEmptyComponent={<NotFind />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};
