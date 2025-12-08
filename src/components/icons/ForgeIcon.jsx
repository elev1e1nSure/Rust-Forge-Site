import { memo } from 'react';

/**
 * Вариант 1: Стилизованная буква F
 */
export const ForgeIconF = memo(({ size = 24, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    aria-hidden="true"
  >
    <path 
      d="M6 3h12v3H9v4h8v3H9v8H6V3z" 
      fill="#ff9b4b"
      style={{ filter: 'drop-shadow(0 0 4px rgba(255, 155, 75, 0.4))' }}
    />
  </svg>
));

ForgeIconF.displayName = 'ForgeIconF';

/**
 * Вариант 2: Молоток и наковальня (символ ковки)
 */
export const ForgeIconHammer = memo(({ size = 24, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    aria-hidden="true"
  >
    {/* Наковальня */}
    <rect 
      x="4" 
      y="18" 
      width="16" 
      height="2" 
      rx="1" 
      fill="#ff9b4b"
      opacity="0.8"
    />
    <path 
      d="M6 18 L12 12 L12 10 L6 16 Z" 
      fill="#ff9b4b"
      opacity="0.6"
    />
    {/* Молоток */}
    <rect 
      x="14" 
      y="4" 
      width="3" 
      height="10" 
      rx="1.5" 
      fill="#ff9b4b"
      style={{ filter: 'drop-shadow(0 0 3px rgba(255, 155, 75, 0.5))' }}
    />
    <rect 
      x="10" 
      y="6" 
      width="6" 
      height="3" 
      rx="1.5" 
      fill="#ff9b4b"
      opacity="0.9"
    />
    {/* Искра */}
    <circle 
      cx="16" 
      cy="14" 
      r="1.5" 
      fill="#ff9b4b"
      style={{ filter: 'drop-shadow(0 0 4px rgba(255, 155, 75, 0.8))' }}
    />
  </svg>
));

ForgeIconHammer.displayName = 'ForgeIconHammer';

/**
 * Вариант 3: Стилизованная искра/удар (минималистичный)
 */
export const ForgeIconSpark = memo(({ size = 24, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    aria-hidden="true"
  >
    <path 
      d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" 
      fill="#ff9b4b"
      style={{ filter: 'drop-shadow(0 0 5px rgba(255, 155, 75, 0.5))' }}
    />
    <circle 
      cx="12" 
      cy="12" 
      r="2" 
      fill="#ff9b4b"
      opacity="0.8"
    />
  </svg>
));

ForgeIconSpark.displayName = 'ForgeIconSpark';

/**
 * Вариант 4: Минималистичный молоток (самый простой)
 */
export const ForgeIconSimple = memo(({ size = 24, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    aria-hidden="true"
  >
    {/* Рукоятка */}
    <rect 
      x="10" 
      y="6" 
      width="4" 
      height="12" 
      rx="2" 
      fill="#ff9b4b"
      opacity="0.7"
    />
    {/* Головка молотка */}
    <rect 
      x="6" 
      y="4" 
      width="12" 
      height="4" 
      rx="2" 
      fill="#ff9b4b"
      style={{ filter: 'drop-shadow(0 0 4px rgba(255, 155, 75, 0.4))' }}
    />
    {/* Искра */}
    <circle 
      cx="12" 
      cy="18" 
      r="1.5" 
      fill="#ff9b4b"
      style={{ filter: 'drop-shadow(0 0 3px rgba(255, 155, 75, 0.6))' }}
    />
  </svg>
));

ForgeIconSimple.displayName = 'ForgeIconSimple';

