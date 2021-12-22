import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from '../components/Text'

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white'
  },
  pieceOfInfo: {
    flexDirection: 'row'
  }
})

const RepositoryItem = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.pieceOfInfo}>
        <Image style={{width: 50, height: 50}} source={{uri: item.ownerAvatarUrl}}></Image>
        <View>
          <Text fontWeight='bold'>
            {item.fullName}
          </Text>
          <Text>
            {item.description}
          </Text>
          <Text>
            {item.language}
          </Text>
        </View>
      </View>
      <View style={styles.pieceOfInfo}>
        <View>
          <Text fontWeight='bold'>{item.stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View>
          <Text fontWeight='bold'>{item.forksCount}</Text>
          <Text>Forks</Text>
        </View>
        <View>
          <Text fontWeight='bold'>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View>
          <Text fontWeight='bold'>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
