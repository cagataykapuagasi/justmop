import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { images, fonts, colors } from 'res';
import { ScaledSheet } from 'react-native-size-matters';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '~/store/actions';
import { Actions } from 'react-native-router-flux';
import FlipCard from 'react-native-flip-card';

const { width } = Dimensions.get('window');

const CardDetail = ({ cards, mechanic }) => {
  //const cardState = useSelector(({ cardState }) => cardState);
  //const dispatch = useDispatch();

  const fetch = () => {
    //dispatch(fetchCards());
  };
  useEffect(() => {
    console.log('geldik', cards);
    //fetch();
  }, []);

  const keyExtractor = (item, index) => index;

  const renderItem = ({ item }) => (
    <FlipCard useNativeDriver style={styles.card}>
      {/* Face Side */}
      <Image
        resizeMode="cover"
        source={{
          uri:
            item.img ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-cjdNjHYhNDecueLnscXjITrfd5oda6rfEpWfQY6C9UseP8pu&usqp=CAU',
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

  const ListHeaderComponent = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{mechanic}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        stickyHeaderIndices={[0]}
        ListHeaderComponent={ListHeaderComponent}
        style={styles.flatlist}
        data={cards}
        renderItem={renderItem}
        numColumns={2}
        //refreshing={cardState.loadingFetch}
        //onRefresh={fetch}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default CardDetail;

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
    borderWidth: 1,
  },
  header: {
    height: '50@vs',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
