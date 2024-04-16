// @ts-nocheck

// @ts-ignore
import { IoIosArrowDown } from "react-icons/io";
const CardHighlight = (prop) => {
  return (
    <>
      <div className='rounded-lg border-[1px] border-gray-400  mb-6 m-10 max-w-[1539px] md:max-w-[1000px] text-[#6A6A6A]'>
        <header className='border-b-[1px] border-gray-400 items-center px-4 py-4  '>
          <bold className="text-black">
            {prop.title}
          </bold>


        </header>

        <div className="carousel w-full">
          {

            prop?.details?.map((m, index) => (
              <>
              <div id={"slideI" + (index + 1)} className="carousel-item relative w-full">
                <ul className="p-10 flex" >
                  {
                    m?.items?.map((n, i) => (

                      <li className="mx-3 border rounded-md max-w-[350px]">
                        <div className="">
                          <img src={n.image_url[1]} className="max-w-[200px]" />
                          <div className="m-2">
                            {n?.name}
                          </div>
                        </div>
                      </li>

                    ))}

                </ul>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={"#slideI2"}  className="btn btn-circle">❮</a>
                  <a href={"#slideI" + (((index + 1) ===   prop?.details.length) ? 1 : (index + 2))} className="btn btn-circle">❯</a>
                </div>
              </div>
              </>


            ))
          }
        </div>
      </div>


    </>
  )
}

export default CardHighlight
