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
  // statWrapper: {
  //   alignItems: 'stretch',
  //   justifyContent: 'space-around',
  //   flexDirection: 'row'
  // },
  // stat: {
  //   alignItems: 'center'
  // },
  // statText: {
  //   marginTop: 4
  // }
})

// const formatNumber = (stat) => {
//   if (stat < 1000) {
//     return stat
//   }
//   else {
//     return (stat / 1000).toFixed(1).concat('k')
//   }
// }

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
      {/* <View style={styles.statWrapper}>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{formatNumber(item.stargazersCount)}</Text>
          <Text style={styles.statText} color='textSecondary'>Stars</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{formatNumber(item.forksCount)}</Text>
          <Text style={styles.statText} color='textSecondary'>Forks</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{formatNumber(item.reviewCount)}</Text>
          <Text style={styles.statText} color='textSecondary'>Reviews</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{item.ratingAverage}</Text>
          <Text style={styles.statText} color='textSecondary'>Rating</Text>
        </View>
      </View> */}
    </View>
  );
};

export default RepositoryItem;
