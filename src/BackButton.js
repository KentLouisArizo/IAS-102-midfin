import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button onClick={handleBackClick} style={styles.backButton}>
      <FaArrowLeft style={styles.icon} />
      Back
    </button>
  );
};

const styles = {
  backButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#45a049',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '16px',
  },
  icon: {
    marginRight: '8px',
  },
};

export default BackButton;