// components/Post.tsx
import React from 'react';

interface PostProps {
  imageUrl: string;
  username: string;
  description: string;
  profilePicture: string;
}

const Post: React.FC<PostProps> = ({ imageUrl, username, description, profilePicture }) => {
  return (
    <div className="border-b border-gray-300 pb-4">
      <div className="flex items-center p-4">
        <img
          src={profilePicture}
          alt={username}
          className="w-10 h-10 rounded-full mr-3"
        />
        <span className="font-semibold">{username}</span>
      </div>
      <div className="w-full">
        <img src={imageUrl} alt={description} className="w-full object-cover" />
      </div>
      <div className="p-4">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Post;
