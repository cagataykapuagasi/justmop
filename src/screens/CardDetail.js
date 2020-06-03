import React from 'react';
import { View, Text, FlatList, Dimensions, Image } from 'react-native';
import { colors } from 'res';
import { ScaledSheet } from 'react-native-size-matters';
import FlipCard from 'react-native-flip-card';

const { width } = Dimensions.get('window');

const CardDetail = ({ cards, mechanic }) => {
  const keyExtractor = (item, index) => index;

  const renderItem = ({ item }) => (
    <FlipCard useNativeDriver style={styles.card}>
      <Image
        resizeMode="cover"
        source={{
          uri:
            item.img ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-cjdNjHYhNDecueLnscXjITrfd5oda6rfEpWfQY6C9UseP8pu&usqp=CAU',
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

  const ListHeaderComponent = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{mechanic}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        stickyHeaderIndices={[0]}
        ListHeaderComponent={ListHeaderComponent}
        style={styles.flatlist}
        data={cards}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={keyExtractor}
      />
    </View>
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
