import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useSelector, useDispatch } from 'react-redux';
import { searchCards, searchUnMount, searchMount } from '~/store/actions';
import FlipCard from 'react-native-flip-card';

const { width } = Dimensions.get('window');
let searchTimer;

const Search = () => {
  const searchState = useSelector(({ searchState }) => searchState);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const search = name => {
    clearTimeout(searchTimer);
    setText(name);
    if (!name.trim().length) {
      return dispatch(searchUnMount());
    }

    !searchState.loadingSearch && dispatch(searchMount());

    searchTimer = setTimeout(() => {
      dispatch(searchCards({ name }));
    }, 500);
  };
  useEffect(() => {
    return () => {
      dispatch(searchUnMount());
    };
  }, []);

  const ListEmptyComponent = () => (
    <Text style={styles.empty}>Sonuç bulunamadı.</Text>
  );

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
      {searchState.loadingSearch && <ActivityIndicator />}

      <FlatList
        style={styles.flatlist}
        data={text && searchState.searchedCards}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          text && !searchState.loadingSearch && ListEmptyComponent
        }
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
    paddingHorizontal: '20@s',
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
    marginHorizontal: '20@s',
  },
  empty: {
    textAlign: 'center',
  },
});
