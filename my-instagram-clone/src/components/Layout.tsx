// components/Layout.tsx
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import PostForm from './PostForm';

const Layout: React.FC<{ children: React.ReactNode, addImageToFeed: (imageData: string, description: string) => void }> = ({ children, addImageToFeed }) => {
  const [showPostForm, setShowPostForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto pt-16 pb-16">
        {showPostForm && (
          <div className="mb-4">
            <PostForm onAddPost={addImageToFeed} onClose={() => setShowPostForm(false)} />
          </div>
        )}
        {children}
      </main>
      <Footer onAddPost={() => setShowPostForm(true)} />
    </div>
  );
};

export default Layout;
