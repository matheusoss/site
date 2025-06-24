'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import { Icons } from '@/components/icons';

export function PostCopyURL() {
  const [isCopied, setCopied] = useState(false);

  const handleClipboard = async () => {
    try {
      setCopied(true);

      await navigator.clipboard.writeText(window.location.href);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {}
  };

  return (
    <button
      className="relative flex items-center space-x-2"
      onClick={handleClipboard}
      type="button"
    >
      <motion.div
        animate={{ opacity: isCopied ? 0 : 1, scale: isCopied ? 0 : 1 }}
        className="-left-4 absolute top-0.3"
        initial={{ opacity: 1, scale: 1 }}
      >
        <Icons.Copy />
      </motion.div>

      <motion.div
        animate={{ opacity: isCopied ? 1 : 0, scale: isCopied ? 1 : 0 }}
        className="-left-[24px] absolute top-0.3"
        initial={{ opacity: 0, scale: 0 }}
      >
        <IoCheckmarkDoneOutline />
      </motion.div>

      <span className="text-xs">Copiar link</span>
    </button>
  );
}
