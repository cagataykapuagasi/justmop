import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { colors } from 'res';
import { ScaledSheet } from 'react-native-size-matters';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '~/store/actions';
import { Actions } from 'react-native-router-flux';
import { Icon, Mechanic } from '~/components';

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

  const renderItem = ({ item }) => <Mechanic item={item} />;

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
    <View style={styles.container}>
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
    </View>
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

  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: '10@vs',
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
