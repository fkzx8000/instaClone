// components/Footer.tsx
import React from 'react';
import { FaHome, FaSearch, FaPlusSquare, FaHeart, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
  onAddPost: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAddPost }) => {
  const navigate = useNavigate();

  return (
    <footer className="fixed bottom-0 w-full h-16 flex justify-around items-center p-4 bg-black text-white border-t border-gray-700">
      <FaHome className="text-2xl cursor-pointer" onClick={() => navigate('/')} />
      <FaSearch className="text-2xl" />
      <FaPlusSquare className="text-2xl cursor-pointer" onClick={onAddPost} />
      <FaHeart className="text-2xl" />
      <FaUser className="text-2xl cursor-pointer" onClick={() => navigate('/profile')} />
    </footer>
  );
};

export default Footer;
