// @ts-nocheck

// @ts-ignore
import { IoIosArrowDown } from "react-icons/io";
const CardHighlight = (prop) => {

  const number = [1, 2,3,4]
  return (
    <>
      <div className='rounded-lg border-[1px] border-gray-400  mb-6 m-10 max-w-[1539px] md:max-w-[1000px] text-[#6A6A6A]'>
        <header className='border-b-[1px] border-gray-400 items-center px-4 py-4  '>
          <span className="">

            {prop.title}
          </span>


        </header>

        <div className="carousel w-full">
          {

            number.map((m,index) => (
              <div id={"slide"+(index+1)} className="carousel-item relative w-full">
                <ul className="p-10 flex" >
                  <li className="mx-3 border rounded-md max-w-[350px]">
                    <div className="">
                      <img src="https://ptcdn.info/home_highlight/2024-04/660a5393caac0a0cf70fbdb6_jd6ngnm8xv_400.png" className="w-full" />
                      <div className="m-2">
                        [Pantip Point]ชวนแชร์ภาพความสดชื่นต้อนรับ Summer! 🏖🌞      
                      </div>
                    </div>
                  </li>
                  <li className="mx-3 border rounded-md max-w-[350px]">
                    <div className="">
                      <img src="https://ptcdn.info/home_highlight/2024-04/660a5393caac0a0cf70fbdb6_jd6ngnm8xv_400.png" className="w-full" />
                      <div className="m-2">
                        [Pantip Point] ชวนแชร์ภาพความสดชื่นต้อนรับ Summer! 🏖🌞
                      </div>
                    </div>
                  </li>
                  <li className="mx-3 border rounded-md max-w-[350px]">
                    <div className="">
                      <img src="https://ptcdn.info/home_highlight/2024-04/660a5393caac0a0cf70fbdb6_jd6ngnm8xv_400.png" className="w-full" />
                      <div className="m-2">
                        [Pantip Point] ชวนแชร์ภาพความสดชื่นต้อนรับ Summer! 🏖🌞
                      </div>
                    </div>
                  </li>
                  <li className="mx-3 border rounded-md max-w-[350px]">
                    <div className="">
                      <img src="https://ptcdn.info/home_highlight/2024-04/660a5393caac0a0cf70fbdb6_jd6ngnm8xv_400.png" className="w-full" />
                      <div className="m-2">
                        [Pantip Point] ชวนแชร์ภาพความสดชื่นต้อนรับ Summer! 🏖🌞
                      </div>
                    </div>
                  </li>


                </ul>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={"#slide"+ (index === 0? number.length: index)} className="btn btn-circle">❮</a>
                  <a href={"#slide"+(((index+1) === number.length)?  1: (index+2))} className="btn btn-circle">❯</a>
                </div>
              </div>

            ))
          }

          {/* <div id="slide2" className="carousel-item relative w-full">
            <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div> */}
        </div>
      </div>


    </>
  )
}

export default CardHighlight
