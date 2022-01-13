import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thought || [];//if data exists, store in thoughts constant. if data is undefined, save an empty array to thoughts component
  console.log(thoughts);
  
  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title='Some Feed for Thought(s)...' />
          )}
          </div>
      </div>
    </main>
  );
};

export default Home;
