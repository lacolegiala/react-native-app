import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pieceOfInfo: {
    flexDirection: 'row'
  }
})

const RepositoryItem = ({item}) => {
  return (
    <View>
      <View style={styles.pieceOfInfo}>
        <Image style={{width: 50, height: 50}} source={{uri: item.ownerAvatarUrl}}></Image>
        <View>
          <Text>
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
          <Text>{item.stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View>
          <Text>{item.forksCount}</Text>
          <Text>Forks</Text>
        </View>
        <View>
          <Text>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View>
          <Text>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
