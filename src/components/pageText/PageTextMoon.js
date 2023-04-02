import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const PageTextMoon = () => {
  const [planetName, setPlanetName] = useState('moon')
  const tabNavButtonClickHandler = (imgName) => {
    setPlanetName(imgName)
  }
  return (
    <div className="page-text page-text--destination">
      {planetName === 'moon' ?
        <motion.div
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
          className="page-text__img-box-planet">
          <Image src={`/${planetName}.png`} width={445} height={445} alt='mars planet'></Image>
        </motion.div> : ''}
      {planetName === 'mars' ?
        <motion.div
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
          className="page-text__img-box-planet">
          <Image src={`/${planetName}.png`} width={445} height={445} alt='mars planet'></Image>
        </motion.div> : ''}
      {planetName === 'europa' ?
        <motion.div
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
          className="page-text__img-box-planet">
          <Image src={`/${planetName}.png`} width={445} height={445} alt='mars planet'></Image>
        </motion.div> : ''}
      {planetName === 'titan' ?
        <motion.div
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
          className="page-text__img-box-planet">
          <Image src={`/${planetName}.png`} width={445} height={445} alt='mars planet'></Image>
        </motion.div> : ''}
      <div className="page-text__content">
        <ul className="list-tab-nav">
          <li className="list-tab-nav__item">
            <motion.button
              className={`list-tab-nav__button active-animation ${planetName === 'moon' ? 'active' : ''}`}
              onClick={() => tabNavButtonClickHandler('moon')}
              initial={{
                y: -100,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{
                duration: 0.5,
              }}
            >Moon</motion.button>
          </li>
          <li className="list-tab-nav__item">
            <motion.button
              initial={{
                y: -100,
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
              className={`list-tab-nav__button active-animation ${planetName === 'mars' ? 'active' : ''}`}
              onClick={() => tabNavButtonClickHandler('mars')}
            >Mars</motion.button>
          </li>
          <li className="list-tab-nav__item">
            <motion.button
              initial={{
                y: -100,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{
                duration: 0.5,
                delay: 0.6
              }}
              className={`list-tab-nav__button active-animation ${planetName === 'europa' ? 'active' : ''}`}
              onClick={() => tabNavButtonClickHandler('europa')}
            >Europa</motion.button>
          </li>
          <li className="list-tab-nav__item">
            <motion.button
              initial={{
                y: -100,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{
                duration: 0.5,
                delay: 0.8
              }}
              className={`list-tab-nav__button active-animation ${planetName === 'titan' ? 'active' : ''}`}
              onClick={() => tabNavButtonClickHandler('titan')}
            >Titan</motion.button>
          </li>
        </ul>
        {planetName === 'moon' ?
          <motion.h1
            initial={{
              y: -100,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
            }}
            className="title title--destination"
          >{planetName}
          </motion.h1> : ''}
        {planetName === 'mars' ?
          <motion.h1
            initial={{
              y: -100,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
            }}
            className="title title--destination"
          >{planetName}
          </motion.h1> : ''}
        {planetName === 'europa' ?
          <motion.h1
            initial={{
              y: -100,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
            }}
            className="title title--destination"
          >{planetName}
          </motion.h1> : ''}
        {planetName === 'titan' ?
          <motion.h1
            initial={{
              y: -100,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
            }}
            className="title title--destination"
          >{planetName}
          </motion.h1> : ''}
        {planetName === 'moon' ? <motion.p
          initial={{
            y: -100,
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
          className="page-text__description page-text__description--destination">
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        </motion.p> : ''}
        {planetName === 'mars' ? <motion.p
          initial={{
            y: -100,
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
          className="page-text__description page-text__description--destination">
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
        </motion.p> : ''}
        {planetName === 'europa' ? <motion.p
          initial={{
            y: -100,
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
          className="page-text__description page-text__description--destination">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
        </motion.p> : ''}
        {planetName === 'titan' ? <motion.p
          initial={{
            y: -100,
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
          className="page-text__description page-text__description--destination">
          The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
        </motion.p> : ''}
        <ul className="planet-description-list">
          {planetName === 'moon' ?
            <>
              <motion.li
                initial={{
                  y: -100,
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
                className="planet-description-list__item">
                <p className="planet-description-list__static-text">Avg. distance</p>
                <p className="planet-description-list__dinamic-text">384,400 km</p>
              </motion.li>
              <motion.li
                initial={{
                  y: -100,
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
                className="planet-description-list__item">
                <p className="planet-description-list__static-text">Est. Travel time</p>
                <p className="planet-description-list__dinamic-text">3 days</p>
              </motion.li>
            </> : ''}
          {planetName === 'mars' ?
            <>
              <motion.li
                initial={{
                  y: -100,
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
                className="planet-description-list__item">
                <p className="planet-description-list__static-text">Avg. distance</p>
                <p className="planet-description-list__dinamic-text">225 mil. km</p>
              </motion.li>
              <motion.li
                initial={{
                  y: -100,
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
                className="planet-description-list__item">
                <p className="planet-description-list__static-text">Est. Travel time</p>
                <p className="planet-description-list__dinamic-text">9 Month</p>
              </motion.li>
            </> : ''}
          {planetName === 'europa' ?
            <>
              <motion.li
                initial={{
                  y: -100,
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
                className="planet-description-list__item">
                <p className="planet-description-list__static-text">Avg. distance</p>
                <p className="planet-description-list__dinamic-text">628 mil. km</p>
              </motion.li>
              <motion.li
                initial={{
                  y: -100,
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
                className="planet-description-list__item">
                <p className="planet-description-list__static-text">Est. Travel time</p>
                <p className="planet-description-list__dinamic-text">3 Years</p>
              </motion.li>
            </> : ''}
          {planetName === 'titan' ?
            <>
              <motion.li
                initial={{
                  y: -100,
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
                className="planet-description-list__item">
                <p className="planet-description-list__static-text">Avg. distance</p>
                <p className="planet-description-list__dinamic-text">1.6 bil. km</p>
              </motion.li>
              <motion.li
                initial={{
                  y: -100,
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
                className="planet-description-list__item">
                <p className="planet-description-list__static-text">Est. Travel time</p>
                <p className="planet-description-list__dinamic-text">7 Years</p>
              </motion.li>
            </> : ''}
        </ul>
      </div>
    </div>
  )
}


export default PageTextMoon;