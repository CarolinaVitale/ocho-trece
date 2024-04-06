import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export const AnimationTemplate = () => {

    const [AnimationRef, AnimationInView] = useInView({ threshold: 0.5 });
    const [AnimationRef2, AnimationInView2] = useInView({ threshold: 0.5 });
    const [AnimationRef3, AnimationInView3] = useInView({ threshold: 0.5 });
    const [AnimationRef4, AnimationInView4] = useInView({ threshold: 0.5 });

    return (

        <div>
            <motion.div
                ref={AnimationRef}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: AnimationInView ? 1 : 0, y: AnimationInView ? 0 : 50 }}
                transition={{ duration: 0.5 }}
                className="animation-motion"
            >
                <h1>up</h1>
            </motion.div>

            <motion.div
                ref={AnimationRef2}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: AnimationInView2 ? 1 : 0, y: AnimationInView2 ? 0 : -50 }}
                transition={{ duration: 0.5 }}
                className="animation-motion"
            >
                <h1>down</h1>
            </motion.div>

            <motion.div
                ref={AnimationRef3}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: AnimationInView3 ? 1 : 0, x: AnimationInView3 ? 0 : 50 }}
                transition={{ duration: 0.5 }}
                className="animation-motion"
            >
                <h1>left</h1>
            </motion.div>

            <motion.div
                ref={AnimationRef4}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: AnimationInView4 ? 1 : 0, x: AnimationInView4 ? 0 : -50 }}
                transition={{ duration: 0.5 }}
                className="animation-motion"
            >
                <h1>right</h1>
            </motion.div>
        </div>
    );
};

export default AnimationTemplate;
