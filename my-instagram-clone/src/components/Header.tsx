// components/Header.tsx
import React from 'react';
import { FaCamera, FaPaperPlane } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="w-screen h-16 flex justify-between items-center p-4 bg-black text-white border-b border-gray-700">
      <FaCamera className="text-2xl cursor-pointer" />
      <h1 className="text-lg font-bold"> Instagram for por :D</h1>
      <FaPaperPlane className="text-2xl" />
    </header>
  );
};

export default Header;
