import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
const PagetextTechnology = () => {
  const [technology, setTechnology] = useState('vehicle')
  const technologyListbuttonHandler = (text) => {
    setTechnology(text)
  }
  return (
    <div className="page-text page-text--technology">
      <ul className="technology-list">
        <li className="technology-list__item">
          <button
            onClick={() => technologyListbuttonHandler('vehicle')}
            className={`technology-list__button ${technology === 'vehicle' ? 'active':''}`}
          >1</button>
        </li>
        <li className="technology-list__item">
          <button
            onClick={() => technologyListbuttonHandler('spaceport')}
            className={`technology-list__button ${technology === 'spaceport' ? 'active':''}`}>2</button>
        </li>
        <li className="technology-list__item">
          <button
            onClick={() => technologyListbuttonHandler('spacecapsule')}
            className={`technology-list__button ${technology === 'spacecapsule' ? 'active':''}`}>3</button>
        </li>
      </ul>
      <div className="page-text__content">
        {technology === 'vehicle' ?
          <motion.p
            initial={{
              y: -100,
              opacity: 0
            }
            }
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="page-text__subtitle page-text__subtitle--technology">
            The terminology...</motion.p> : ''}
        {technology === 'vehicle' ?
          <motion.h1
            initial={{
              y: -100,
              opacity: 0
            }
            }
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            className="title title--technology">
            Launch vehicle</motion.h1> : ''}
        {technology === 'vehicle' ? <motion.p
          initial={{
            y: -100,
            opacity: 0
          }
          }
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5,
            delay: 0.6
          }}
          className="page-text__description">
          A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
        </motion.p> : ''}
        {/* // */}
        {technology === 'spaceport' ?
          <motion.p
            initial={{
              y: -100,
              opacity: 0
            }
            }
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="page-text__subtitle page-text__subtitle--technology">
            The terminology...</motion.p> : ''}
        {technology === 'spaceport' ?
          <motion.h1
            initial={{
              y: -100,
              opacity: 0
            }
            }
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            className="title title--technology">
            Spaceport</motion.h1> : ''}
        {technology === 'spaceport' ? <motion.p
          initial={{
            y: -100,
            opacity: 0
          }
          }
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5,
            delay: 0.6
          }}
          className="page-text__description">
          A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
        </motion.p> : ''}
        {/* \\ */}
        {technology === 'spacecapsule' ?
          <motion.p
            initial={{
              y: -100,
              opacity: 0
            }
            }
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="page-text__subtitle page-text__subtitle--technology">
            The terminology...</motion.p> : ''}
        {technology === 'spacecapsule' ?
          <motion.h1
            initial={{
              y: -100,
              opacity: 0
            }
            }
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            className="title title--technology">
            Space capsule</motion.h1> : ''}
        {technology === 'spacecapsule' ? <motion.p
          initial={{
            y: -100,
            opacity: 0
          }
          }
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5,
            delay: 0.6
          }}
          className="page-text__description">
          A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
        </motion.p> : ''}
      </div>
      {technology === 'vehicle' ? <motion.div
        initial={{
          y: -100,
          opacity: 0
        }
        }
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.5,
          delay: 0.4
        }}
        className="page-text__technology-imgbox">
        <Image src={`/${technology}.jpg`} width={515} height={527} alt='crew'></Image>
      </motion.div> : ''}
      {technology === 'spaceport' ? <motion.div
        initial={{
          y: -100,
          opacity: 0
        }
        }
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.5,
          delay: 0.4
        }}
        className="page-text__technology-imgbox">
        <Image src={`/${technology}.jpg`} width={515} height={527} alt='crew'></Image>
      </motion.div> : ''}
      {technology === 'spacecapsule' ? <motion.div
        initial={{
          y: -100,
          opacity: 0
        }
        }
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.5,
          delay: 0.4
        }}
        className="page-text__technology-imgbox">
        <Image src={`/${technology}.jpg`} width={515} height={527} alt='crew'></Image>
      </motion.div> : ''}
    </div>
  )
}


export default PagetextTechnology;