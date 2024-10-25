// components/Camera.tsx
import React, { useRef, useEffect, useState } from 'react';

interface CameraProps {
  onCapture: (imageData: string) => void;
  onClose: () => void;
}

const Camera: React.FC<CameraProps> = ({ onCapture, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (err) {
        console.error('Failed to access camera:', err);
        setError('Failed to access the camera. Please check your camera settings and permissions.');
      }
    };

    startCamera();

    return () => {
      // עצירת המצלמה בעת סגירת הקומפוננטה
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    if (videoRef.current) {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/png');
        onCapture(imageData);
      }
    }
  };

  return (
    <div className="camera-overlay fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center">
      {error ? (
        <div className="text-red-500 text-center mb-4">{error}</div>
      ) : (
        <video ref={videoRef} className="w-full max-w-md" autoPlay playsInline />
      )}
      <div className="flex justify-around mt-4">
        {!error && (
          <button onClick={captureImage} className="bg-green-500 text-white px-4 py-2 rounded">
            Capture
          </button>
        )}
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Camera;
