'use client'

import { motion } from 'framer-motion'
import { ReactNode, Children, cloneElement, isValidElement } from 'react'

interface StaggeredChildrenProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function StaggeredChildren({
  children,
  className = '',
}: StaggeredChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className={className}
    >
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{ display: 'contents' }}
            >
              {child}
            </motion.div>
          )
        }
        return child
      })}
    </motion.div>
  )
}
