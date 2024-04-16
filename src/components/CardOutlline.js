// @ts-nocheck

// @ts-ignore
import { IoIosArrowDown } from "react-icons/io";
const CardOutlline = (prop) => {
  console.log("prop",prop);
  return (
    <div className='rounded-lg border-[1px] border-gray-400  mb-6 m-10 text-[#6A6A6A]'>
      <header className='border-b-[1px] border-gray-400 w-full items-center px-4 py-4  '>
      <bold className="text-black">
              {prop.title}
            </bold>
        <div>

          {
            prop.subTitle && (
              <>
                {
                  prop.subTitle
                }
              </>
            )
          }
        </div>

      </header>

      <div className={" flex-wrap  flex" }>
        {
          prop && prop?.details.map(m => (
            <div  key={m.name} className={'py-4 px-5  border-r  hover:text-black w-full' } >
              {m.name}
            </div>
          ))
        }
      </div>
      {
        prop?.details.length > 10 && (
          <div className="py-5  flex  justify-center items-center">
            <IoIosArrowDown />
            <span className="px-4">
              ดูเพิ่มเติม
            </span>
            <IoIosArrowDown />
          </div>

        )
      }



    </div>
  )
}

export default CardOutlline
