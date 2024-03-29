import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Repository } from '../types';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

type RenderItemProps = {
  item: Repository
}

const renderItem = (props: RenderItemProps) => {
  return (
    <RepositoryItem item={props.item} />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories()

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default RepositoryList;