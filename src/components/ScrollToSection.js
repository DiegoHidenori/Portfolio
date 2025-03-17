import { motion } from "framer-motion";

const ScrollToSection = ({ sectionId }) => {
    const scrollTo = () => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.a
            className='navbar-links'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            onClick={scrollTo}
        >
            {sectionId}
        </motion.a>
    );
};

export default ScrollToSection;
