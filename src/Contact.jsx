import React from 'react'
import img8 from "./Assets/clock.webp"
import img9 from "./Assets/Pounded Yam.webp"

const Contact = () => {
  return (
    <div className='bg-orange-500 p-3 pt-20'>
        <div className="md:w-2/5 bg-green-700 mx-auto p-3">
            <h4 className=' font-mono italic font-semibold text-white my-4 text-xl text-center -rotate-6'>Contact Us</h4>
            <div className="flex gap-4" >
                <h2 className="text-white w-1/2 ">
                We would love to hear from you! Whether you have questions, feedback or just want to say hello - feel free to drop us a message using the form below.


                </h2>
                <div className='bg-orange-500 p-3 md:w-1/2'>
                    <input placeholder='Enter your name' type="text" className="block p-2 w-full my-2 bg-transparent outline-none border placeholder:text-gray-500 " />
                    <input  placeholder='Enter your Email' type="text" className="block p-2 my-2  w-full  bg-transparent border outline-none placeholder:text-gray-500" />
                    <input  placeholder='Enter your Phone' type="text" className="block p-2 my-2  w-full  bg-transparent border outline-none placeholder:text-gray-500" />
                    <textarea placeholder='Enter your Message' className="block p-2 bg-transparent outline-none border placeholder:text-gray-500" name="" id="" cols="30" rows="10"></textarea>
                    <button className="border border-white block mx-auto my-2 p-3 text-white ">Send message</button>

                </div>
            </div>
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

export default Contact