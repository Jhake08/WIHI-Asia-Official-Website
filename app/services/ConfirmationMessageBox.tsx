'use client';

interface ConfirmationMessageBoxProps {
  message: string;
  onClose: () => void;
}

export default function ConfirmationMessageBox({ message, onClose }: ConfirmationMessageBoxProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-60"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 bg-opacity-90 rounded-lg p-8 max-w-md w-full text-white relative"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-center text-lg">{message}</p>
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
