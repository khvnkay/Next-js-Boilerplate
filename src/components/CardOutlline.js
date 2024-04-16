// @ts-nocheck

// @ts-ignore
import { IoIosArrowDown } from "react-icons/io";
const CardOutlline = (prop) => {
  return (
    <div className='rounded-lg border-[1px] border-gray-400  mb-6 m-10 text-[#6A6A6A]'>
      <header className='border-b-[1px] border-gray-400 items-center px-4 py-4  '>
        <span className="  ">

          {prop.title}
        </span>
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

      <div className={" flex-wrap " + (prop.col > 1 ? 'flex' : 'flex-1')}>

        {
          prop && prop?.details.map(m => (

            <div className={'py-4 px-5  border-r  hover:text-black ' + (' w-[' + 100 / prop.col + '%] ')} >
              {m}
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
