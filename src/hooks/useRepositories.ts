import { useState, useEffect } from 'react';
import { RepoNode } from '../types';

const useRepositories = () => {
  const [repositories, setRepositories] = useState<RepoNode>();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    try {
      setLoading(true);
  
      // Replace the IP address part with your own IP address!
      const response = await fetch('http://192.168.10.46:5001/api/repositories');
      const json = await response.json();
  
      setLoading(false);
      setRepositories(json);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;