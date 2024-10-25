// components/PostForm.tsx
import React, { useState } from 'react';
import Camera from './Camera';

interface PostFormProps {
  onAddPost: (imageData: string, description: string) => void;
  onClose: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onAddPost, onClose }) => {
  const [description, setDescription] = useState('');
  const [imageData, setImageData] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageData(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = (imageData: string) => {
    setImageData(imageData);
    setShowCamera(false);
  };

  const handleSubmit = () => {
    if (imageData && description) {
      onAddPost(imageData, description);
      setDescription('');
      setImageData(null);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center">
      {showCamera ? (
        <Camera onCapture={handleCapture} onClose={() => setShowCamera(false)} />
      ) : (
        <div className="bg-white p-4 rounded shadow-md w-80">
          <h2 className="text-center text-xl font-bold mb-4">Create a Post</h2>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="Write a description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {imageData && (
            <div className="mb-4">
              <img src={imageData} alt="Preview" className="w-full rounded" />
            </div>
          )}
          <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
          <div className="flex justify-around mb-4">
            <button onClick={() => setShowCamera(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
              Take a Photo
            </button>
            <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
              Post
            </button>
          </div>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded w-full">Close</button>
        </div>
      )}
    </div>
  );
};

export default PostForm;
