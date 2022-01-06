import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from '../components/Text'
import Stat from '../components/Stat'

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    paddingBottom: 12
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
      <Stat item={item}/>
    </View>
  );
};

export default RepositoryItem;
