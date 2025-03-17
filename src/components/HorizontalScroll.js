import { motion, useScroll, useTransform } from "framer-motion";
import Tree from "../assets/images/Tree.png";
import BlackGold from "../assets/images/BlackGold.png";
import Chess from "../assets/images/Chess.png";

const HorizontalScroll = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 0.3, 1], ["0%", "0%", "25%"]); // Move left as you scroll down

    return (
        <div
            style={{
                overflow: "hidden",
                width: "100%",
                margin: "15px 0",
            }}
        >
            <motion.div
                style={{ x, display: "flex", width: "200vw", gap: "20px" }}
            >
                <motion.img
                    src={BlackGold}
                    alt="Gallery 1"
                    style={{ width: "50vw" }}
                />
                <motion.img
                    src={Chess}
                    alt="Gallery 2"
                    style={{ width: "50vw" }}
                />
            </motion.div>
        </div>
    );
};

export default HorizontalScroll;
