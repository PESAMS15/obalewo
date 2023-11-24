import React from 'react'
import "./main.css"
import img1 from "./Assets/1st.jpg"
import img2 from "./Assets/2nd.jpeg"
import img3 from "./Assets/3ed.jpg"
import img4 from "./Assets/4th.jpg"
import img5 from "./Assets/IMG_3981 (1).webp"
import img6 from "./Assets/Img.webp"
import img7 from "./Assets/IMG_4184.webp"
import img8 from "./Assets/clock.webp"
import img9 from "./Assets/Pounded Yam.webp"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  { useEffect } from 'react';
import Slider from 'react-slick';

// import img from "./Assets/nsplsh_7230315a6f705469455638~mv2_d_3444_2296_s_2.webp"

const Main = () => {
    useEffect(() => {
        // Ensure the slick carousel styles are loaded dynamically
        import('slick-carousel/slick/slick.css');
        import('slick-carousel/slick/slick-theme.css');
      }, []);
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
        <div className={`bg h-screen flex items-center flex-col justify-center gap-10 `}>
            <h1 className='md:w-1/2 md:text-7xl text-4xl p-3 text-center mt-0 md:mb-13 font-bold -rotate-6 text-white italic  '>Indulge in the Vibrant and Exotic Flavors of Nigeria</h1>
            <h1 className=' text-zinc-200 md:text-4xl text-2xl  text-center md:w-1/2 font-semibold'>Explore the Rich and Diverse World of Nigerian Cuisine</h1>
            <h1 className='text-zinc-200 text-center text-xl md:text-2xl font-semibold md:w-1/2'>O'belawo is Open Daily forTakeout and Delivery</h1>
        </div>
        <div className='bg2 h-screen  flex items-center flex-col p-2 justify-center '>
            <div className="bg-green-800 p-3 py-10 md:w-2/6  text-orange-200 rounded  text-center">
                <h2 className='italic mb-9  mt-2 font-mono underline -rotate-6'>Our Signature Dishes</h2>
                <div className="flex justify-between items-center">
                    <h4 className=' italic font-mono w-1/2 '>
                    Discover the true taste of Nigeria with our signature dishes. From the spicy warmth of Jollof Rice to the comforting embrace of Egusi Soup, our dishes will take you on a culinary journey through Nigeria.
                    </h4>
                    <div className="w-1/2 text-center"><button className='bg-green-900 border-2 border-orange-700 text-xl text-orange-600 font-semibold h-fit p-1 rounded p'>See Our Menu</button></div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center text-center bg-green-700 p-1 md:p-3">
            <div className="bg-orange-500 p-2 w-fit mx-2 md:mx-auto my-3"><img src={img1} className=' md:w-72  md:h-64 w-full h-52    ' alt="" /></div>
            <div className="bg-orange-500 p-2 w-fit mx-2 md:mx-auto my-3"><img src={img2} className=' md:w-72  md:h-64 w-full h-52    ' alt="" /></div>
            <div className="bg-orange-500 p-2 w-fit mx-2 md:mx-auto my-3"><img src={img3} className=' md:w-72  md:h-64 w-full h-52    ' alt="" /></div>
            <div className="bg-orange-500 p-2 w-fit mx-2 md:mx-auto my-3"><img src={img4} className=' md:w-72  md:h-64 w-full h-52    ' alt="" /></div>
            <div className="bg-orange-500 p-2 w-fit mx-2 md:mx-auto my-3"><img src={img1} className=' md:w-72  md:h-64 w-full h-52    ' alt="" /></div>
            <div className="bg-orange-500 p-2 w-fit mx-2 md:mx-auto my-3"><img src={img2} className=' md:w-72  md:h-64 w-full h-52    ' alt="" /></div>
            <div className="bg-orange-500 p-2 w-fit mx-2 md:mx-auto my-3"><img src={img3} className=' md:w-72  md:h-64 w-full h-52    ' alt="" /></div>
            <div className="bg-orange-500 p-2 w-fit mx-2 md:mx-auto my-3"><img src={img4} className=' md:w-72  md:h-64 w-full h-52    ' alt="" /></div>
        </div>
        <div className='bg3 h-screen  flex items-center flex-col justify-center '>
            <div className="bg-red-600 p-1 py-10 md:w-2/6  text-white rounded  text-center">
                <h2 className='italic mb-9 text-4xl  mt-2 font-mono underline -rotate-6'>Catering Services</h2>
                    <h4 className=' italic text-center mt-5 font-mono w-2/3 mx-auto '>
                    Let us bring the flavors of Nigeria to your next event with our catering services. Contact us to learn more.                    </h4>
            </div>
        </div>
        <div className="bg-green-700 p-4 py-6 ">
            <div className="bg-orange-500 my-3 mx-auto p-3 md:w-1/2  py-16  text-white font-mono">
                <h1 className='text-center'>Stay Updated</h1>
                <h4 className='w-2/3 text-xl mx-auto'>Welcome to O'belawo! Discover the Exquisite Taste of Culinary Delights! Keep track of our special nutrition events. Subscribing to our updates is your gateway to culinary adventures and wellness insights.</h4>
                <h4 className='w-2/3 mx-auto mt-5'>Email *</h4>
                <input className='p-2 border border-blue-700 bg-transparent my-1 w-2/3 mx-auto block' type="text" />
                <button className="my-2 p-3 text-orange-500 w-2/3 mx-auto block bg-white">Subscribe</button>
            </div>
            <h1 className='text-3xl text-white text-center mt-16'>Our Clients Say</h1>
                    <div className="w-full max-w-4xl p-3 mx-auto mt-8">
            <Slider className='' {...settings}>
                <div className='grid md:grid-cols-2 justify-center items center'>
                    
                    <div className='md:flex items-center gap-5'>
                    <img src={img5} alt="Image 1" className="md:w-1/2 block h-72 md:h-fit mx-auto w-full rounded-t-full" />
                    <div className="bg-orange-500 md:w-1/2    p-3">
                        <h1 className='w-3/4 mx-auto text-white text-lg md:text-xl'>                        I   've been a loyal customer of O'belawo restaurant for over a year now, and the experience keeps getting better. The variety of dishes is impressive, the delivery is prompt, and the food quality is consistently top-notch. I can't recommend it enough</h1>          
                        <h2 className='text-white w-3/4 text-lg font-semibold mx-auto'>John D. - Frequent Foodie</h2>
                    
                    </div>
                         
                    </div>
                </div>
                <div className=' justify-center items center'>
                <div className='md:flex items-center gap-5'>
                 
                         <img src={img6} alt="Image 1" className="md:w-1/2 block h-72 md:h-fit mx-auto w-full rounded-t-full" />
                         <div className="bg-orange-500 md:w-1/2    p-3">
                        <h1 className='w-3/4 mx-auto text-white text-lg md:text-xl'>   
                        O'belawo restaurant has become a beloved part of our Africa movements meetup. The food is not only delicious but also customizable to accommodate dietary preferences. Whether it's a casual weekday meal or a special celebration, it always feels like a feast</h1>          
                        <h2 className='text-white w-3/4 text-lg font-semibold mx-auto'>Mike Adepoju- MeetUp Favorites</h2>

                    </div>
                    </div>
                </div>
                <div className='flex justify-center items center'>
                <div className='md:flex items-center gap-5'>
                <img src={img7} alt="Image 1" className="md:w-1/2 block h-72 md:h-fit mx-auto w-full rounded-t-full" />

                    <div className="bg-orange-500 md:w-1/2    p-3">
                        <h1 className='w-3/4 mx-auto text-white text-lg md:text-xl'>       
                        As someone who loves exploring different Nigerian cuisines, I've found my go-to spot with O'belawo restaurant. The menu is a delightful mix of flavors, and I appreciate the attention to detail in every dish. It's a gastronomic adventure delivered to my doorstep</h1>          
                        <h2 className='text-white w-3/4 text-lg font-semibold mx-auto'>John D. - Frequent Foodie</h2>
                        
                    </div>
                    </div>
                </div>
                {/* Add more slides as needed */}
            </Slider>
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
                    <img src={img9} className='mb-10 w-full px-5   ' alt="" />
                    <h2 className='my-2'>Tel: 0-787-768-9881</h2>
                    <h2 className='my-2'>Email: Dollp.fash@gmail.com</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main