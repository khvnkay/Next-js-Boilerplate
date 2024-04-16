

// @ts-nocheck

// @ts-ignore
import { IoIosArrowDown } from "react-icons/io";
import { PiStarThin } from "react-icons/pi";
const CardRoom = (prop) => {

  const number = [
    {
      items: [
        1, 2, 4, 5,
        1, 2, 4, 5,
        1, 2, 4, 5,
        1, 2, 4, 5,
        1, 2, 4, 5,
      ]
    }


  ]
  return (
    <>
      <div className='rounded-lg border-[1px] border-gray-400  mb-6 m-10 text-[#6A6A6A]'>
        <header className='border-b-[1px] border-gray-400 items-center px-4 py-4  '>
          <span className="">

            <bold className="text-black">
              {prop.title}
            </bold>
          </span>


        </header>

        <div className="carousel w-full">
          {

            number.map((m, index) => {
              return (
                <>
                  <div id={"slide" + (index + 1)} className="carousel-item relative w-full">
                    <ul className=" flex flex-wrap" >
                      {
                        m?.items?.map((n, i) => {
                          return (
                            <li className="   w-[10%] border border-slate-100">
                              <div className=" border rounded-md p-2  m-2 ">
                                <div className="">
                                  <a className="gtm-forum-link-home-recommend gtm-forum-home-recommend-item01 gtm-forum-home-recommend-all" href="/forum" title="รวมกระทู้จากทุกห้อง" target="_blank">
                                    <PiStarThin />
                                    <span className="text-sm">
                                      รวมมิตร
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </li>
                          )
                        })
                      }

                    </ul>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href={"#slide" + (index === 0 ? number.length : index)} className="btn btn-circle">❮</a>
                      <a href={"#slide" + (((index + 1) === number.length) ? 1 : (index + 2))} className="btn btn-circle">❯</a>
                    </div>
                  </div>
                </>
              )
            })
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

export default CardRoom
