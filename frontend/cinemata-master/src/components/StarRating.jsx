import React, { useState } from 'react';

const StarRating = ({ value, onChange, readonly = false, size = 'normal' }) => {
  const [hovered, setHovered] = useState(0);

  const fontSize = size === 'small' ? '14px' : '22px';

  return (
    <div className="rating-selector" style={{ gap: size === 'small' ? '2px' : '5px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={`star-btn ${star <= (hovered || value) ? 'lit' : ''}`}
          style={{ fontSize, cursor: readonly ? 'default' : 'pointer' }}
          onClick={() => !readonly && onChange && onChange(star)}
          onMouseEnter={() => !readonly && setHovered(star)}
          onMouseLeave={() => !readonly && setHovered(0)}
          type="button"
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default StarRating;
