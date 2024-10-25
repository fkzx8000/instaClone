// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Feed from './pages/Feed';
import Profile from './pages/Profile';

const App: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [username, setUsername] = useState<string>('Your Name');
  const [profilePicture, setProfilePicture] = useState<string>('https://i.pravatar.cc/150?u=default');

  const addImageToFeed = (imageData: string, description: string) => {
    const newPost = { download_url: imageData, author: username, description, profilePicture };
    setPosts([newPost, ...posts]);
  };

  const handleSaveProfile = (newUsername: string, newProfilePicture: string) => {
    setUsername(newUsername);
    setProfilePicture(newProfilePicture);
  };

  return (
    <Router>
      <Layout addImageToFeed={addImageToFeed}>
        <Routes>
          <Route path="/" element={<Feed posts={posts} />} />
          <Route path="/profile" element={<Profile onSave={handleSaveProfile} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
