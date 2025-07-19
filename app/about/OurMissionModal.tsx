'use client';

import { useEffect } from 'react';

interface OurMissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OurMissionModal({ isOpen, onClose }: OurMissionModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 bg-opacity-90 rounded-lg p-8 max-w-3xl w-full text-white relative transform transition-transform duration-300 ease-out scale-95 opacity-0"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: isOpen ? 'modalFadeIn 0.3s forwards' : 'modalFadeOut 0.3s forwards',
        }}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-400"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Our mission is to empower businesses to thrive in the digital marketplace by providing innovative ecommerce solutions and unparalleled support.
        </p>
      </div>
      <style jsx>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes modalFadeOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}
