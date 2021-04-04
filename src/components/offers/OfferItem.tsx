import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useTheme} from '../../utils/theme/ThemeProvider';

const styles = StyleSheet.create({
  outContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  container: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 6,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.9,
  },
  checkContainer: {
    paddingHorizontal: 10,
  },
});

export type FinderItemType = {
  title: string;
  onPress: any;
  list: ListItemType[];
  description: string;
  index: number;
  itemSelected: ItemType;
};
export type ListItemType = {
  capacity: string;
  amount: string;
  duration: string;
};
export type ItemType = {
  item: number;
  index: number;
};

export const OfferItem = ({
  title,
  index,
  onPress,
  list,
  itemSelected,
  description,
}: FinderItemType) => {
  const {colors} = useTheme();
  const isSelected = i => {
    return (
      itemSelected && itemSelected.index == index && itemSelected.item == i
    );
  };
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text, {color: colors.text}]}>{title}</Text>
      <Text style={[styles.text, {color: colors.text}]}>{description}</Text>
      {/* todo refacotor: create the component for rowItem */}
      {list.map((item, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => onPress({index: index, item: i})}
            style={[
              styles.outContainer,
              {backgroundColor: isSelected(i) ? '#92e2fc' : '#ebfaff'},
            ]}>
            <View style={styles.inContainer}>
              <Text>{`${item.capacity}GB`}</Text>
              <Text>{`${item.duration} days`}</Text>
              <Text>{`${item.amount}€`}</Text>
            </View>
            <View style={styles.checkContainer}>
              <CheckBox
                value={isSelected(i)}
                onValueChange={() => onPress({index: index, item: i})}
                animationDuration={0}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
