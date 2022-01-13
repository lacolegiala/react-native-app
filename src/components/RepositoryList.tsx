import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { RepoNode, Repository } from '../types';
import RepositoryItem from './RepositoryItem';

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
  const [repositories, setRepositories] = useState<RepoNode | undefined>();

  const fetchRepositories = async () => {
    // Replace the IP address part with your own IP address!
    const response = await fetch('http://192.168.0.22:5001/api/repositories');
    const json = await response.json();

    console.log(json);

    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

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