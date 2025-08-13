import React, { useState } from 'react'
import './qnaCard.scss'
import { IoIosArrowDropdown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const QnACard = ({question, answer}) => {

  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    visible: {
      opacity: 1,
      y:0,
      height: 80,
      transition: {
        opacity: {duration: 0.3, delay: 0.1},
        height: {duration:0.2 }
      }
    },
    hidden: {
      opacity: 0,
      y: -50,
      height: 0,
      transition: {
        opacity: {duration: 0.1},
        height: {duration:0.2, delay: 0.2}
      }
    }
  }

  return (
    <div className='question-card-wrapper'>
      <h3>
        {question} 
        <IoIosArrowDropdown onClick={() => setIsOpen(!isOpen)} />
      </h3>
      <AnimatePresence mode='wait'>
        {isOpen && 
          <motion.h4
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {answer}
          </motion.h4>
        }
      </AnimatePresence>
      
      
    </div>
  )
}

export default QnACard
