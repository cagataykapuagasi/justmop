import React from 'react';
import { Text, Dimensions, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Actions } from 'react-native-router-flux';
import { debounce } from 'lodash';

const { width } = Dimensions.get('window');

const Mechanic = ({ item }) => {
  const onPress = debounce(
    () => {
      Actions.cardDetail(item);
    },
    300,
    { leading: true, trailing: false }
  );

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text numberOfLines={1}>{item.mechanic}</Text>
    </TouchableOpacity>
  );
};

export default Mechanic;

const styles = ScaledSheet.create({
  card: {
    marginTop: '10@vs',
    height: '40@vs',
    width: width * 0.5 - 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
  },
});
