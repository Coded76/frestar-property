'use client'
import React from 'react'
import ContactForm from './Form'
import { motion } from 'framer-motion'

const Connect = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className='w-full py-[4%] flex items-center justify-center flex-col gap-10'
    >
      <motion.p 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='lg:text-[69px] text-[#00143F] font-bold'
      >
        Connect with our Expert
      </motion.p>
      
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className='w-full flex items-center justify-center'
      >
        <ContactForm/>
      </motion.div>
    </motion.div>
  )
}

export default Connect