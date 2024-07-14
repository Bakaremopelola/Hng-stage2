// src/modal/DoneModal.jsx


import './DoneModal.css'

const DoneModal = ({ isOpen, onRequestClose }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onRequestClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOutsideClick}>
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full mx-2" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col items-center justify-center">
          <div className="checkmark mb-4"></div>
          <h2 className="text-xl font-bold mb-2">Done!</h2>
          <p>Your card has been successfully charged.</p>
          <button className="bg-blue-600 text-white p-2 rounded mt-4" onClick={onRequestClose}>
            Track My Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoneModal;
