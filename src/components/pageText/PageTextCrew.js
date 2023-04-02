import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const PageTextCrew = () => {
  const [crewName, setCrewName] = useState('commander')
  const buttonNavListHandler = (crewNameFromButtonNav) => {
    setCrewName(crewNameFromButtonNav)
  }
  console.log(crewName)
  return (
    <div className="page-text page-text--crew">
      <div className="page-text__content page-text__content--crew">
        {crewName === 'commander' ? <motion.p
          initial={{
            y: 100,
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
          className="page-text__subtitle page-text__subtitle--crew">
          Commander
        </motion.p> : ''}
        {crewName === 'commander' ? <motion.h1
          initial={{
            y: 100,
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
          className="title title--crew">
          Douglas Hurley
        </motion.h1> : ''}
        {crewName === 'commander' ? <motion.p
          initial={{
            y: 100,
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
          className="page-text__description page-text__description--crew" >
          Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
        </motion.p> : ''}
        {/* /////////// */}
        {crewName === 'specialist' ? <motion.p
          initial={{
            y: 100,
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
          className="page-text__subtitle page-text__subtitle--crew">
          Mission specialist
        </motion.p> : ''}
        {crewName === 'specialist' ? <motion.h1
          initial={{
            y: 100,
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
          className="title title--crew">
          Mark Shuttleworth
        </motion.h1> : ''}
        {crewName === 'specialist' ? <motion.p
          initial={{
            y: 100,
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
          className="page-text__description page-text__description--crew" >
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
        </motion.p> : ''}
        {/* /////////// */}
        {crewName === 'pilot' ? <motion.p
          initial={{
            y: 100,
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
          className="page-text__subtitle page-text__subtitle--crew">
          Pilot
        </motion.p> : ''}
        {crewName === 'pilot' ? <motion.h1
          initial={{
            y: 100,
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
          className="title title--crew">
          Victor Glover
        </motion.h1> : ''}
        {crewName === 'pilot' ? <motion.p
          initial={{
            y: 100,
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
          className="page-text__description page-text__description--crew" >
          Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.
        </motion.p> : ''}
        {/* /////////// */}
        {crewName === 'engineer' ? <motion.p
          initial={{
            y: 100,
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
          className="page-text__subtitle page-text__subtitle--crew">
          Flight engineer
        </motion.p> : ''}
        {crewName === 'engineer' ? <motion.h1
          initial={{
            y: 100,
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
          className="title title--crew">
          Anousheh Ansari
        </motion.h1> : ''}
        {crewName === 'engineer' ? <motion.p
          initial={{
            y: 100,
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
          className="page-text__description page-text__description--crew" >
          Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.
        </motion.p> : ''}
        <ul className="button-nav-list">
          <li className="button-nav-list__item">
            <button
              onClick={() => buttonNavListHandler('commander')}
              className={`button-nav-list__button ${crewName === 'commander' ? 'active' : ''}`}>
            </button>
          </li>
          <li className="button-nav-list__item">
            <button
              onClick={() => buttonNavListHandler('specialist')}
              className={`button-nav-list__button ${crewName === 'specialist' ? 'active' : ''}`}>
            </button>
          </li>
          <li className="button-nav-list__item">
            <button
              onClick={() => buttonNavListHandler('pilot')}
              className={`button-nav-list__button ${crewName === 'pilot' ? 'active' : ''}`}>
            </button>
          </li>
          <li className="button-nav-list__item">
            <button
              onClick={() => buttonNavListHandler('engineer')}
              className={`button-nav-list__button ${crewName === 'engineer' ? 'active' : ''}`}>
            </button>
          </li>
        </ul>
      </div>
      {crewName === 'commander' ? <motion.div
        initial={{
          y: 100,
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
        className="page-text__img-box">
        <Image src={`/${crewName}.png`} width={568} height={712} alt='crew'></Image>
      </motion.div> : ''}
      {crewName === 'specialist' ? <motion.div
        initial={{
          y: 100,
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
        className="page-text__img-box">
        <Image src={`/${crewName}.png`} width={453} height={654} alt='crew'></Image>
      </motion.div> : ''}
      {crewName === 'pilot' ? <motion.div
        initial={{
          y: 100,
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
        className="page-text__img-box">
        <Image src={`/${crewName}.png`} width={554} height={681} alt='crew'></Image>
      </motion.div> : ''}
      {crewName === 'engineer' ? <motion.div
        initial={{
          y: 100,
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
        className="page-text__img-box">
        <Image src={`/${crewName}.png`} width={615} height={607} alt='crew'></Image>
      </motion.div> : ''}
    </div>
  )
}


export default PageTextCrew;