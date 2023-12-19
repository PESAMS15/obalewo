import React from 'react'
import img8 from "./Assets/clock.webp"
import img9 from "./Assets/Pounded Yam.webp"

const About = () => {
  return (
    <div className='bg-orange-500 pt-16 p-2'>
      <div className=" md:w-2/5 bg-green-700 py-12 md:px-20 px-5 mx-auto ">
        <h4 className=' font-mono italic font-semibold text-orange-500 text-xl text-center -rotate-6'>About O'belawo</h4>
        <h5 className='text-orange-500 text-center mt-5    font-medium text-lg'>
        At O'belawo, we are passionate about sharing the vibrant and exotic flavors of Nigerian cuisine with the United Kingdom. Our culinary journey is inspired by the rich and diverse world of Nigerian food, with a focus on dishes like jollof rice, pounded yam, and egusi soup. Our chefs use only the freshest ingredients to create delicious, authentic Nigerian dishes that are sure to satisfy your cravings. Come join us on a journey of taste and experience the best that Nigerian cuisine has to offer.
        </h5>
      </div>
      <div className="bg-orange-500 p-5 py-9">
            <div className="  bg-green-700 py-10 mx-auto p-5 text-white md:flex justify-between ">
                <div className='md:w-1/3 text-center md:text-start'>
                    <img src={img8} className='md:mb-10 mx-auto md:mx-1' alt="" />
                    <div>
                        <h2 className='my-2'>WE’RE OPEN:</h2>
                        <h2 className='my-2'>Wednesday - Sunday </h2>
                        <h2 className='my-2'>11am - 9pm</h2>
                    </div>
                </div>
                <div className='md:w-1/3 my-5 text-center'>
                    <h1 className=' -rotate-6 md:mb-10'>Hungry?</h1>
                    <p className='text-lg font-semibold my-3'>Whether you're looking for a quick bite, a hearty meal, or a culinary adventure, we've got you covered.</p>
                    <h3>29 Coniston Ave, Purfleet RM19 1PG, UK</h3>
                </div>
                <div  className='md:w-1/3 flex flex-col justify-end items-center my-3 md:items-end  text-end'>
                    <img src={img9} className='mb-10 w-1/2 px-5    ' alt="" />
                    <h2 className='my-2'>Tel: 0-787-768-9881</h2>
                    <h2 className='my-2'>Email: Dollp.fash@gmail.com</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
