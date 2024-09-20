// src/components/ui/QrScannerIcon.jsx
import React from 'react';

const QrScannerIcon = ({ size = 24, color = "currentColor", onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={color}
      className="qr-scanner-icon"
      width={size}
      height={size}
    >
      <rect x="4" y="4" width="4" height="4" strokeLinecap="round" />
      <rect x="16" y="4" width="4" height="4" strokeLinecap="round" />
      <rect x="16" y="16" width="4" height="4" strokeLinecap="round" />
      <rect x="4" y="16" width="4" height="4" strokeLinecap="round" />
      <line x1="8" y1="2" x2="8" y2="4" strokeLinecap="round" />
      <line x1="16" y1="2" x2="16" y2="4" strokeLinecap="round" />
      <line x1="2" y1="8" x2="4" y2="8" strokeLinecap="round" />
      <line x1="2" y1="16" x2="4" y2="16" strokeLinecap="round" />
      <line x1="20" y1="8" x2="22" y2="8" strokeLinecap="round" />
      <line x1="20" y1="16" x2="22" y2="16" strokeLinecap="round" />
      <line x1="8" y1="22" x2="8" y2="20" strokeLinecap="round" />
      <line x1="16" y1="22" x2="16" y2="20" strokeLinecap="round" />
      <path d="M9 9h6v6H9z" strokeLinecap="round" />
    </svg>
  );
};

export default QrScannerIcon;
