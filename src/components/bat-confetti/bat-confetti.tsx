import { motion } from 'framer-motion';

const BatConfetti = ({ isActive }) => {
  // Gera uma quantidade de morcegos
  const bats = Array.from({ length: 20 }, (_, index) => ({
    left: Math.random() * window.innerWidth,
    animationDelay: `${Math.random() * 2}s`, // Adiciona um atraso aleatório
  }));

  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
    >
      {bats.map((bat, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: bat.left,
            fontSize: '2rem',
          }}
          initial={{ y: -50, opacity: 0 }} // Começa fora da tela
          animate={
            isActive
              ? { y: window.innerHeight + 50, opacity: 1 }
              : { opacity: 0 }
          }
          transition={{
            duration: 2,
            delay: parseFloat(bat.animationDelay), // Usa o atraso aleatório
          }}
        >
          🦇
        </motion.div>
      ))}
    </div>
  );
};

export default BatConfetti;
