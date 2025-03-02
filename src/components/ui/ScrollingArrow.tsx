'use client';

import { motion } from 'framer-motion';

const ScrollingArrow = () => (
  <motion.span
    className="inline-block ml-2"
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    →
  </motion.span>
);

export default ScrollingArrow; 