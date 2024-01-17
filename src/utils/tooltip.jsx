// Tooltip.js
import React from 'react';
import { motion } from 'framer-motion';

const Tooltip = ({ text, children }) => {
  return (
    <motion.div
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
      }}
    >
      <motion.div
        whileHover={{ opacity: 1, y: 0 }}
        style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#333',
          color: '#fff',
          padding: '0.5rem',
          borderRadius: '5px',
          whiteSpace: 'nowrap',
          zIndex: 999,
          opacity: 0,
        }}
      >
        {text}
      </motion.div>
      {children}
    </motion.div>
  );
};

export default Tooltip;
