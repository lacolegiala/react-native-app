import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { RepoNode } from '../types';

const useRepositories = () => {
  type RepositoryData = {
    repositories: RepoNode
  }

  const { loading, error, data } = useQuery<RepositoryData>(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })

  return { loading, error, repositories: data?.repositories };
};

export default useRepositories;