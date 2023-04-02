import { motion } from "framer-motion";
import ButtonExplore from "../buttonExplore/ButtonExplore";

const PageTextHome = () => {
  return (
    <div className="page-text page-text--home">
      <div className="page-text__content">
        <motion.p
          className="page-text__subtitle page-text__subtitle--home"
          initial={{
            y: -200,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5,
          }}
        >
          So, you want to travel to
        </motion.p>
        <motion.h1
          initial={{
            y: -200,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5,
            delay: 0.2
          }}
          className="title title--home">
          Space
        </motion.h1>
        <motion.p
        initial={{
          y: -200,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.5,
          delay: 0.4
        }}
        className="page-text__description"
        >
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </motion.p>
      </div>
      <ButtonExplore></ButtonExplore>
    </div>
  )
}


export default PageTextHome;