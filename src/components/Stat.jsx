import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../components/Text'

const styles = StyleSheet.create({
    statWrapper: {
      alignItems: 'stretch',
      justifyContent: 'space-around',
      flexDirection: 'row'
    },
    stat: {
      alignItems: 'center'
    },
    statText: {
      marginTop: 4
    }
})

const formatNumber = (stat) => {
    if (stat < 1000) {
      return stat
    }
    else {
      return (stat / 1000).toFixed(1).concat('k')
    }
}

const Stat = ({item}) => {
    return (
        <View style={styles.statWrapper}>
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
      </View>
    )
}

export default Stat