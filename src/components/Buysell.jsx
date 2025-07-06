'use client'
import React from 'react'
import { GoArrowDown } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const cardHover = {
  y: -5,
  transition: { type: "spring", stiffness: 300, damping: 10 }
};

const Buysell = () => {
    const cardsData = [
        {
            title: "Verified Listings",
            content: "Every property is vetted for authenticity and value."
        },
        {
            title: "Verified Listings",
            content: "Every property is vetted for authenticity and value."
        },
        {
            title: "Verified Listings",
            content: "Every property is vetted for authenticity and value."
        },
        {
            title: "Verified Listings",
            content: "Every property is vetted for authenticity and value."
        },
    ]
    
    return (
        <div className='bg-white w-full'>
            <div className=''>
                {/* Navigation Section with Animation */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className='h-[281px] px-[7%] flex w-full items-center justify-center'
                >
                    <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 lg:h-[118px]'>
                        {/* Buy */}
                        <motion.div 
                            variants={itemVariants}
                            whileHover={{ 
                                backgroundColor: '#F8FAFF',
                                transition: { duration: 0.2 }
                            }}
                            className='w-full border-b border-black group'
                        >
                            <div className='flex flex-row items-center justify-between'>
                                <p className='font-semibold md:text-[40px]'>Buy</p>
                                <motion.div
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <GoArrowDown className='font-bold text-3xl' />
                                </motion.div>
                            </div>
                            <motion.p 
                                initial={{ opacity: 0, height: 0 }}
                                className='md:text-[24px] text-[16px] font-bold hidden group-hover:block'
                                animate={{
                                    opacity: 0,
                                    height: 0
                                }}
                                whileHover={{
                                    opacity: 1,
                                    height: 'auto'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                Buy available properties listed on Fresta for free
                            </motion.p>
                        </motion.div>

                        {/* Sell */}
                        <motion.div 
                            variants={itemVariants}
                            whileHover={{ 
                                backgroundColor: '#F8FAFF',
                                transition: { duration: 0.2 }
                            }}
                            className='w-full border-b border-black group'
                        >
                            <div className='flex flex-row items-center justify-between'>
                                <p className='font-semibold md:text-[40px]'>Sell</p>
                                <motion.div
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <GoArrowDown className='font-bold text-3xl' />
                                </motion.div>
                            </div>
                            <motion.p 
                                initial={{ opacity: 0, height: 0 }}
                                className='md:text-[24px] text-[16px] font-bold'
                                animate={{
                                    opacity: 0,
                                    height: 0
                                }}
                                whileHover={{
                                    opacity: 1,
                                    height: 'auto'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                Have a property for sale? Let's take a look
                            </motion.p>
                        </motion.div>

                        {/* Lease */}
                        <motion.div 
                            variants={itemVariants}
                            whileHover={{ 
                                backgroundColor: '#F8FAFF',
                                transition: { duration: 0.2 }
                            }}
                            className='w-full border-b border-black group'
                        >
                            <div className='flex flex-row items-center justify-between'>
                                <p className='font-semibold md:text-[40px]'>Lease</p>
                                <motion.div
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <GoArrowDown className='font-bold text-3xl' />
                                </motion.div>
                            </div>
                            <motion.p 
                                initial={{ opacity: 0, height: 0 }}
                                className='md:text-[24px] text-[16px] font-bold'
                                animate={{
                                    opacity: 0,
                                    height: 0
                                }}
                                whileHover={{
                                    opacity: 1,
                                    height: 'auto'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                Lease or rent a property with Frestar at zero hassles
                            </motion.p>
                        </motion.div>

                        {/* Manage */}
                        <motion.div 
                            variants={itemVariants}
                            whileHover={{ 
                                backgroundColor: '#F8FAFF',
                                transition: { duration: 0.2 }
                            }}
                            className='w-full border-b border-black group'
                        >
                            <div className='flex flex-row items-center justify-between'>
                                <p className='font-semibold md:text-[40px]'>Manage</p>
                                <motion.div
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <GoArrowDown className='font-bold text-3xl' />
                                </motion.div>
                            </div>
                            <motion.p 
                                initial={{ opacity: 0, height: 0 }}
                                className='md:text-[24px] text-[16px] font-bold'
                                animate={{
                                    opacity: 0,
                                    height: 0
                                }}
                                whileHover={{
                                    opacity: 1,
                                    height: 'auto'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                Have a property, let's manage it for you
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Cards Section with Animation */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className='flex flex-col items-center lg:gap-[70px] mb-[7%]'
                >
                    <motion.p 
                        className='text-[64px] font-bold text-[#00143F]'
                        whileHover={{ scale: 1.02 }}
                    >
                        WHY Frestar?
                    </motion.p>
                    
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-[20px]'>
                        {cardsData.map((data, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={cardHover}
                                className='w-[489px] p-[10%] justify-between flex flex-col hover:bg-white hover:border border-blue-400 h-[310px] bg-[#F2F6FF] group'
                            >
                                <div>
                                    <p className='text-[#00143F] lg:text-[40px] font-bold'>{data.title}</p>
                                    <p className='lg:text-[24px] text-[#00143F] font-normal'>{data.content}</p>
                                </div>
                                <motion.div 
                                    className='flex flex-row items-center justify-between'
                                    whileHover={{ x: 5 }}
                                >
                                    <motion.p 
                                        className='text-transparent group-hover:text-blue-600 md:text-[24px] text-[18px] font-semibold'
                                        initial={{ x: 0 }}
                                    >
                                        Find your property
                                    </motion.p>
                                    <motion.div
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <BsArrowRight className='text-transparent group-hover:text-blue-600 text-4xl' />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Buysell