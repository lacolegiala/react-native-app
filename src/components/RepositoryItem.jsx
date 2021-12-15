import React from 'react';
import { Text } from 'react-native';

const RepositoryItem = ({item}) => {
  return (
    <Text>
      Full name: {item.fullName}
    </Text>
  );
};

export default RepositoryItem;
