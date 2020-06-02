import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { images, fonts, colors } from 'res';
import { ScaledSheet } from 'react-native-size-matters';
import { useSelector, useDispatch } from 'react-redux';
import { getCards } from '~/store/actions';

const Home = () => {
  const cards = useSelector(state => state);
  const dispatch = useDispatch();

  _getCards = () => dispatch(getCards);

  console.log('cards', cards);

  return (
    <View style={styles.container}>
      <Text>My Starter Kit</Text>
    </View>
  );
};

export default Home;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
