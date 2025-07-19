'use client';

import { useEffect } from 'react';

interface CompanyTimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompanyTimelineModal({ isOpen, onClose }: CompanyTimelineModalProps) {
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
        className="bg-gray-900 bg-opacity-90 rounded-lg p-8 max-w-3xl w-full text-white relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-400"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4">Company Timeline</h2>
        <ul className="text-lg leading-relaxed list-disc list-inside space-y-2">
          <li><strong>2020:</strong> Founded with a vision to revolutionize ecommerce.</li>
          <li><strong>2021:</strong> Expanded services to multiple platforms including Facebook and TikTok.</li>
          <li><strong>2022:</strong> Achieved 500+ active stores and $50M+ revenue generated.</li>
          <li><strong>2023:</strong> Launched new data-driven marketing strategies and technology solutions.</li>
        </ul>
      </div>
    </div>
  );
}
