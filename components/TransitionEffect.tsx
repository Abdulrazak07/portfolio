import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary"
        initial={{ x: "100%", y: "100%" }}
        animate={{ x: "0%", y: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        exit={{ x: ["0%", "-100%"], y: ["0%", "-100%"] }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-background"
        initial={{ x: "100%", y: "100%" }}
        animate={{ x: "0%", y: "0%" }}
        transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
        exit={{ x: ["0%", "-100%"], y: ["0%", "-100%"] }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-foreground"
        initial={{ x: "100%", y: "100%" }}
        animate={{ x: "0%", y: "0%" }}
        transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
        exit={{ x: ["0%", "-100%"], y: ["0%", "-100%"] }}
      ></motion.div>
    </>
  );
};

export default TransitionEffect;
