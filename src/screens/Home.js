import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { images, fonts, colors } from 'res';
import { ScaledSheet } from 'react-native-size-matters';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '~/store/actions';
import { Actions } from 'react-native-router-flux';
import { Icon } from '~/components';

const { width } = Dimensions.get('window');

const Home = () => {
  const cardState = useSelector(({ cardState }) => cardState);
  const dispatch = useDispatch();

  const fetch = () => {
    dispatch(fetchCards());
  };
  useEffect(() => {
    fetch();
  }, []);

  const keyExtractor = (item, index) => index;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => Actions.cardDetail(item)}
      style={styles.card}>
      <Text numberOfLines={1}>{item.mechanic}</Text>
    </TouchableOpacity>
  );

  const ListHeaderComponent = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Mekanikler</Text>
      <TouchableOpacity onPress={Actions.search}>
        <Icon type="antdesign" name="search1" size={25} />
      </TouchableOpacity>
    </View>
  );

  console.log('cards', cardState);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        stickyHeaderIndices={[0]}
        ListHeaderComponent={ListHeaderComponent}
        style={styles.flatlist}
        data={cardState.mechanics}
        renderItem={renderItem}
        extraData={cardState.mechanics}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        refreshing={cardState.loadingFetch}
        onRefresh={fetch}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Home;

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
    height: '40@vs',
    width: width * 0.5 - 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  header: {
    marginTop: '10@vs',
    height: '50@vs',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
