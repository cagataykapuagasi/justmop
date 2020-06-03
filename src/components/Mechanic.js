import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import { images, fonts, colors } from 'res';
import { ScaledSheet } from 'react-native-size-matters';
import { useSelector, useDispatch } from 'react-redux';
import { searchCards, searchUnMount } from '~/store/actions';
import { Actions } from 'react-native-router-flux';
import FlipCard from 'react-native-flip-card';
import { debounce } from 'lodash';

const { width } = Dimensions.get('window');
let searchTimer;

const Mechanic = ({ item }) => {
  const [firstTap, setFirstTap] = useState(false);

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
