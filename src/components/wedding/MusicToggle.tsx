import { useState, useRef } from "react";
import { motion } from "framer-motion";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setPlaying(!playing);
    }
  };

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      aria-label={playing ? "Pause music" : "Play music"}
    >
      {/* Placeholder audio - replace with actual audio file */}
      <audio ref={audioRef} src="/assets/audio/background-music.mp3" loop />
      {playing ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="hsl(40 33% 96%)" className="text-primary-foreground">
          <rect x="6" y="4" width="4" height="16" rx="1" />
          <rect x="14" y="4" width="4" height="16" rx="1" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="hsl(40 33% 96%)" className="text-primary-foreground">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      )}
      {playing && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-gold-light"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
};

export default MusicToggle;
