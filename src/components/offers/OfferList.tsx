import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {planList} from '../../service/PlanList';
import {OfferItem} from './OfferItem';
import {ItemType} from './OfferItem';

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

type OfferLisType = {
  action: any;
  selected: ItemType;
};

export const OfferList = ({action, selected}: OfferLisType) => {
  const renderItem = ({item, index}) => {
    const {id, list, title, description} = item;
    return (
      <OfferItem
        title={title}
        description={description}
        list={list}
        itemSelected={selected}
        onPress={action}
        index={index}
      />
    );
  };
  if (!planList) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View style={styles.container}>
      <FlatList
        data={planList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};
