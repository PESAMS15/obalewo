import React from 'react'
import "./main.css"
import img1 from "./Assets/1st.jpg"
import img2 from "./Assets/2nd.jpeg"
import img3 from "./Assets/3ed.jpg"
import img4 from "./Assets/4th.jpg"
// import img from "./Assets/nsplsh_7230315a6f705469455638~mv2_d_3444_2296_s_2.webp"

const Main = () => {
  return (
    <div>
        <div className={`bg h-screen flex items-center flex-col justify-center gap-10 `}>
            <h1 className='w-1/2 text-7xl text-center mb-13 font-bold -rotate-6 text-white italic  '>Indulge in the Vibrant and Exotic Flavors of Nigeria</h1>
            <h1 className=' text-zinc-200 text-4xl  text-center w-1/2 font-semibold'>Explore the Rich and Diverse World of Nigerian Cuisine</h1>
            <h1 className='text-zinc-200 text-center font-semibold w-1/2'>O'belawo is Open Daily forTakeout and Delivery</h1>
        </div>
        <div className='bg2 h-screen  flex items-center flex-col justify-center '>
            <div className="bg-green-800 p-3 py-10 w-2/6 text-orange-200 rounded  text-center">
                <h2 className='italic mb-9  mt-2 font-mono underline -rotate-6'>Our Signature Dishes</h2>
                <div className="flex justify-between items-center">
                    <h4 className=' italic font-mono w-1/2 '>
                    Discover the true taste of Nigeria with our signature dishes. From the spicy warmth of Jollof Rice to the comforting embrace of Egusi Soup, our dishes will take you on a culinary journey through Nigeria.
                    </h4>
                    <div className="w-1/2 text-center"><button className='bg-green-900 border-2 border-orange-700 text-xl text-orange-600 font-semibold h-fit p-1 rounded p'>See Our Menu</button></div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-4 justify-center text-center bg-green-600 p-3">
            <div className="bg-orange-500 p-3 w-fit mx-auto my-3"><img src={img1} className=' w-72 mx-auto h-64    ' alt="" /></div>
            <div className="bg-orange-500 p-3 w-fit mx-auto my-3"><img src={img2} className=' w-72 mx-auto h-64    ' alt="" /></div>
            <div className="bg-orange-500 p-3 w-fit mx-auto my-3"><img src={img3} className=' w-72 mx-auto h-64    ' alt="" /></div>
            <div className="bg-orange-500 p-3 w-fit mx-auto my-3"><img src={img4} className=' w-72 mx-auto h-64    ' alt="" /></div>
            <div className="bg-orange-500 p-3 w-fit mx-auto my-3"><img src={img1} className=' w-72 mx-auto h-64    ' alt="" /></div>
            <div className="bg-orange-500 p-3 w-fit mx-auto my-3"><img src={img2} className=' w-72 mx-auto h-64    ' alt="" /></div>
            <div className="bg-orange-500 p-3 w-fit mx-auto my-3"><img src={img3} className=' w-72 mx-auto h-64    ' alt="" /></div>
            <div className="bg-orange-500 p-3 w-fit mx-auto my-3"><img src={img4} className=' w-72 mx-auto h-64    ' alt="" /></div>
        </div>
        <div className='bg2 h-screen  flex items-center flex-col justify-center '>
            <div className="bg-red-600 p-3 py-10 w-2/6 text-white rounded  text-center">
                <h2 className='italic mb-9 text-4xl  mt-2 font-mono underline -rotate-6'>Catering Services</h2>
                    <h4 className=' italic text-center mt-5 font-mono w-2/3 mx-auto '>
                    Let us bring the flavors of Nigeria to your next event with our catering services. Contact us to learn more.                    </h4>
            </div>
        </div>
    </div>
  )
}

export default Main