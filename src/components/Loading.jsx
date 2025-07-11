import styles from "../style";
import { motion } from "framer-motion";


const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-[100vw] h-[100vh] flex "${styles.flexCenter}`}
      initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{ scale: 2.2, opacity: 0.75 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <img
        src='/loader.jpg'
        alt="Pankaj Saini"
        className="w-[100px] h-[100px] border-2 border-teal-200 relative z-[5] rounded-lg p-1"
      />
    </motion.div>
  );
};

export default Loading;
