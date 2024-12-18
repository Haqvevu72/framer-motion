import { motion } from "framer-motion";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animations for button to modal transformation
  const containerVariants = {
    closed: {
      width: "100px",
      height: "50px",
      borderRadius: "25px",
      transition: { duration: 0.5 },
    },
    open: {
      width: "300px",
      height: "400px",
      borderRadius: "15px",
      transition: { duration: 0.5 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="bg-purple-600 text-white flex flex-col items-center justify-center overflow-hidden cursor-pointer"
        style={{ padding: isOpen ? "20px" : "0" }}
        variants={containerVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen && <span>Click Me</span>}

        {isOpen && (
          <motion.div
            className="text-center"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-xl font-bold mb-4">Modal Content</h2>
            <p>This is the content inside the modal!</p>
            <button
              className="mt-4 px-4 py-2 bg-white text-purple-600 rounded"
              onClick={(e) => {
                e.stopPropagation(); // Prevents closing modal on button click
                setIsOpen(false);
              }}
            >
              Close
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default App;
