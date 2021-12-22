import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from '../components/Text'

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginTop: 6,
    marginLeft: 6
  },
  pieceOfInfo: {
    flexDirection: 'row',
    margin: 6
  },
  upperInfoItem: {
    padding: 4
  },
  languageTag: {
    backgroundColor: '#0366d6',
    margin: 6,
    padding: 4,
    borderRadius: 4
  },
  languageText: {
    color: 'white',
    padding: 2
  },
  tagWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1
  },
  stat: {
    margin: 16
  }
})

const RepositoryItem = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.pieceOfInfo}>
        <Image style={styles.image} source={{uri: item.ownerAvatarUrl}}></Image>
        <View>
          <Text style={styles.upperInfoItem} fontWeight='bold'>
            {item.fullName}
          </Text>
          <Text style={styles.upperInfoItem} color='textSecondary'>
            {item.description}
          </Text>
          <View style={styles.tagWrapper}>
            <View style={styles.languageTag}>
              <Text style={styles.languageText}>
                {item.language}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.pieceOfInfo}>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{item.stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{item.forksCount}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
