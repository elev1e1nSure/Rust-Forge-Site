import { memo } from 'react';

const ArrowIcon = memo(({ width = 20, height = 20, className = '' }) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
    aria-hidden="true"
    style={{ color: 'rgba(255, 255, 255, 0.85)' }}
  >
    <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/>
  </svg>
));

ArrowIcon.displayName = 'ArrowIcon';

export default ArrowIcon;

