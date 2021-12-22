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
    margin: 6
  },
  upperInfo: {
    flexDirection: 'row',
    margin: 6
  },
  upperInfoItem: {
    padding: 4
  },
  upperInfoWrapper: {
    flex: 1
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
  statWrapper: {
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  stat: {
    alignItems: 'center'
  }
})

const RepositoryItem = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.upperInfo}>
        <Image style={styles.image} source={{uri: item.ownerAvatarUrl}}></Image>
        <View style={styles.upperInfoWrapper}>
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
      <View style={styles.statWrapper}>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{item.stargazersCount}</Text>
          <Text color='textSecondary'>Stars</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{item.forksCount}</Text>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{item.reviewCount}</Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{item.ratingAverage}</Text>
          <Text color='textSecondary'>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
