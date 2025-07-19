'use client';

import { useEffect, useState } from 'react';
import ConfirmationMessageBox from './ConfirmationMessageBox';

interface PlanApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string | null;
  plans: { name: string; price: string }[];
}

export default function PlanApplicationModal({ isOpen, onClose, selectedPlan, plans }: PlanApplicationModalProps) {
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState(selectedPlan || '');
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    setPlan(selectedPlan || '');
  }, [selectedPlan]);

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

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/sendApplication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        contactNumber,
        email,
        plan,
      }),
    });

    if (response.ok) {
      setShowConfirmation(true);
    } else {
      alert('Failed to send application. Please try again later.');
    }
  } catch (error) {
    alert('An error occurred. Please try again later.');
  }
};

const handleConfirmationClose = () => {
  setShowConfirmation(false);
  onClose();
};

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-gray-900 bg-opacity-90 rounded-lg p-8 max-w-md w-full text-white relative transform transition-transform duration-300 ease-out scale-95 opacity-0"
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
          <h2 className="text-3xl font-bold mb-6 text-center">Apply for a Plan</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block mb-1 font-semibold">Full Name</label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full rounded-md p-2 text-black"
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block mb-1 font-semibold">Contact Number</label>
              <input
                id="contactNumber"
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
                className="w-full rounded-md p-2 text-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md p-2 text-black"
              />
            </div>
            <div>
              <label htmlFor="plan" className="block mb-1 font-semibold">Plan Selection</label>
              <select
                id="plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                required
                className="w-full rounded-md p-2 text-black"
              >
                <option value="" disabled>Select a plan</option>
                {plans.map((p) => (
                  <option key={p.name} value={p.name}>
                    {p.name} - {p.price}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 font-semibold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ConfirmationMessageBox
        message="Successfully delivered message, we will update you within 24 hours."
        onClose={handleConfirmationClose}
      />
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
    </>
  );
}
