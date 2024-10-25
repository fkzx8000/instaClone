// pages/Profile.tsx
import React, { useState } from 'react';
import Camera from '../components/Camera';

const Profile: React.FC<{ onSave: (username: string, profilePicture: string) => void }> = ({ onSave }) => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [username, setUsername] = useState<string>('Your Name');
  const [showCamera, setShowCamera] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const fetchRandomImage = () => {
    const randomImageUrl = `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`;
    setProfilePicture(randomImageUrl);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleCapture = (imageData: string) => {
    setProfilePicture(imageData);
    setShowCamera(false);
  };

  const handleSave = () => {
    if (profilePicture && username) {
      onSave(username, profilePicture);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="mb-4">
        <img
          src={profilePicture || 'https://i.pravatar.cc/150?u=default'}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        {showCamera ? (
          <Camera onCapture={handleCapture} onClose={() => setShowCamera(false)} />
        ) : (
          <div className="flex justify-around">
            <input type="file" accept="image/*" onChange={handleFileChange} className="block" />
            <button onClick={fetchRandomImage} className="bg-blue-500 text-white px-4 py-2 rounded">
              Random Picture
            </button>
            <button onClick={() => setShowCamera(true)} className="bg-green-500 text-white px-4 py-2 rounded">
              Take a Photo
            </button>
          </div>
        )}
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Change your username"
        />
      </div>
      <button onClick={handleSave} className="bg-red-500 text-white px-4 py-2 rounded w-full">
        Save Changes
      </button>
    </div>
  );
};

export default Profile;
