import { Link } from "react-router-dom"
import Card from "../components/shared/Card"
import { motion, AnimatePresence } from 'framer-motion'

function AboutPage() {
    return (
        <AnimatePresence>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}>
                <Card>
                    <div className="about">
                        <h1>About This Project</h1>
                        <p>This is a React app to leave feedback for a product or service.</p>
                        <p className="regular-link">
                            <Link to="/">Back to Home</Link>
                        </p>
                        <p className="version">v1.0.0</p>
                    </div>
                </Card>
            </motion.div>
        </AnimatePresence>
    )
}

export default AboutPage