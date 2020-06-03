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

const { width } = Dimensions.get('window');

const Search = () => {
  const searchState = useSelector(({ searchState }) => searchState);
  const dispatch = useDispatch();
  let searchTimer;

  const search = name => {
    clearTimeout(searchTimer);

    if (name.trim().length) {
      searchTimer = setTimeout(() => {
        dispatch(searchCards({ name }));
      }, 300);
    } else {
      dispatch(searchUnMount());
    }
  };
  useEffect(() => {
    //fetch();
    return () => {
      dispatch(searchUnMount());
    };
  }, []);

  const ListHeaderComponent = () => <ActivityIndicator />;

  const keyExtractor = (item, index) => index;

  const renderItem = ({ item }) => (
    <FlipCard useNativeDriver style={styles.card}>
      {/* Face Side */}
      <Image
        resizeMode="cover"
        source={{
          uri:
            item.img ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-cjdNjHYhNDecueLnscXjITrfd5oda6rfEpWfQY6C9UseP8pu&usqp=CAU', //not found
        }}
        style={styles.face}
      />
      {/* Back Side */}
      <View style={styles.back}>
        <Text>{item.cardSet}</Text>
        <Text>{item.name}</Text>
        <Text>{item.playerClass}</Text>
        <Text>{item.type}</Text>
      </View>
    </FlipCard>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        key="spesific"
        onChangeText={search}
        placeholder="Arama"
        style={styles.input}
      />
      <FlatList
        style={styles.flatlist}
        data={searchState.searchedCards}
        ListHeaderComponent={
          searchState.loadingSearch && ListHeaderComponent
        }
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '20@s',
  },
  flatlist: {
    flex: 1,
  },
  card: {
    marginTop: '10@vs',
    height: '200@vs',
    width: width * 0.5 - 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    overflow: 'hidden',
  },
  face: {
    height: '200@vs',
    width: width * 0.5 - 20,
  },
  back: {
    height: '200@vs',
    width: width * 0.5 - 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '20@vs',
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    height: '50@vs',
    marginTop: '10@vs',
    paddingHorizontal: '10@s',
    borderRadius: 8,
  },
});
