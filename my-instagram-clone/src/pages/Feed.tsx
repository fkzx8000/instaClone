// pages/Feed.tsx
import React from 'react';
import Post from '../components/Post';

interface FeedProps {
  posts: { download_url: string; author: string; description: string }[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <div className="feed">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available.</p>
      ) : (
        posts.map((post, index) => (
          <Post key={index} imageUrl={post.download_url} username={post.author} description={post.description} />
        ))
      )}
    </div>
  );
};

export default Feed;
