'use client'
import Image from 'next/image'
import React from 'react'
import { GoSearch } from "react-icons/go";
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const buttonHover = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

const Hero = () => {
    return (
        <div className='w-full bg-[url("/hero.svg")] bg-no-repeat bg-cover bg-center h-screen relative overflow-hidden'>
            {/* Background overlay with subtle animation */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-black/10"
            />
            
            <div className='w-full relative z-10'>
                {/* Header with staggered animation */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='flex flex-row items-center justify-between md:px-[7%] px-[4%] w-full h-[114px]'
                >
                    <motion.div variants={itemVariants}>
                        <Image src={"/logo.svg"} width={220.6} height={40} alt='Frestar Logo' />
                    </motion.div>
                    
                    <motion.div 
                        variants={itemVariants}
                        className='flex flex-row items-center gap-[16px]'
                    >
                        <motion.button 
                            whileHover={buttonHover}
                            className='bg-[#F2F2F2] w-[106px] h-[40px] flex flex-row gap-2.5 text-[#00143F] font-bold items-center justify-center rounded-md'
                        >
                            <GoSearch className='text-[16px] font-bold'/>
                            <input 
                                type="text" 
                                placeholder='Search' 
                                className='w-[60px] outline-none border-none bg-transparent placeholder-[#00143F]' 
                            />
                        </motion.button>
                        
                        <motion.button 
                            whileHover={buttonHover}
                            whileTap={{ scale: 0.95 }}
                            className='bg-[#00143F] w-[106px] h-[40px] flex items-center justify-center text-white font-bold rounded-md'
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Hero content with slide-up animation */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className='bg-[#3978F2] lg:w-[695px] w-[500px] h-[351px] rounded-[8px] absolute md:left-[7%] left-[4%] gap-[37px] top-[20rem] flex flex-col items-start justify-center p-14'
                >
                    <motion.p 
                        className='md:text-[55px] text-[32px] text-white font-bold leading-tight'
                        whileHover={{ x: 5 }}
                    >
                        Build Your Future with Frestar Property
                    </motion.p>
                    
                    <motion.div 
                        className='flex flex-row items-center gap-[31px] cursor-pointer'
                        whileHover={{ scale: 1.02 }}
                    >
                        <motion.div 
                            className='w-[105px] h-[4px] bg-white'
                            whileHover={{ width: 120 }}
                            transition={{ duration: 0.3 }}
                        />
                        <p className='font-semibold text-white'>Talk to an Agent</p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Subtle floating elements in background */}
            <motion.div 
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 right-1/4 w-10 h-10 rounded-full bg-white/10"
            />
            
            <motion.div 
                animate={{
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
                className="absolute bottom-1/3 left-1/4 w-8 h-8 rounded-full bg-white/10"
            />
        </div>
    )
}

export default Hero