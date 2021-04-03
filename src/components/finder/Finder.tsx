import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {CustomTextInput} from '../input/CustomTextInput';
import {textInput} from '../../utils/copys';
import {FlatList} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

type FinderType = {
  data: [] | null;
  onSelect: any;
};

export const Finder = ({data, onSelect}: FinderType) => {
  const [searchingText, setSearchingText] = useState<string>('');
  const [countriesList, setCountriesList] = useState(data);

  useEffect(() => {
    setCountriesList(data.filter(item => item.name.includes(searchingText)));
  }, [searchingText]);
  const renderItem = ({item}) => {
    const {name, flag} = item;
    return (
      <TouchableOpacity>
        <Text>{name}</Text>
      </TouchableOpacity>
    );
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
      />
    </View>
  );
};
