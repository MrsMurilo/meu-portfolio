import { motion } from 'motion/react';

export function Signature({
  src = '/AssinaturaSite.png',
  alt = 'Murilo Souza',
  width = 180,
  className = '',
  duration = 2.0,
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        width={width}
        className="block"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{
          duration,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}