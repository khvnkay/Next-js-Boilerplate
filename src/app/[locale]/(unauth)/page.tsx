"use client"

import CardOutlline from '@/components/CardOutlline';
import CardHighlight from '@/components/CardHighlight';
import CardRoom from '@/components/CardRoom';
import { IoMdArrowRoundForward } from "react-icons/io";
import { useEffect, useState } from 'react';
import { useGetSidebarContentMutation, useGetRoomRecommendMutation, useGetHighlightMutation, useGetSuggestTopicPopularMutation } from '@/store/reducers/auth/authApiSlice'



export default function Index() {
  const [getSidebarContent] = useGetSidebarContentMutation()
  const [getRoomRecommend] = useGetRoomRecommendMutation()
  const [getHightLight] = useGetHighlightMutation()
  const [getSuggestTopicPopular] = useGetSuggestTopicPopularMutation()
  const [data, setData] = useState([])
  const [rooms, setRooms] = useState([])
  const [hightLight, setHightLight] = useState([])
  const [songkran, setSongKran] = useState([])
  const [tag, setTag] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getSidebarContent({}).unwrap()
        if (data) {
          setData(data.data)
        } else {

        }

      } catch (err) {
      }


    }
    const getHightLightApi = async () => {
      try {
        const data = await getHightLight({}).unwrap()
        if (data) {
          var realData: any = []
          var arrayOfArrays = splitData(data.data, 4)
          arrayOfArrays.forEach(e => {
            realData.push({
              items: e
            })

          })
          setHightLight(realData)
        } else {

        }

      } catch (err) {
      }


    }

    const splitData = (arr: string | any[], size: number) => {
      var arrayOfArrays = [];

      for (var i = 0; i < arr.length; i += size) {
        arrayOfArrays.push(arr.slice(i, i + size));
      }

      return arrayOfArrays

    }
    const getRooms = async () => {

      try {
        const data = await getRoomRecommend({}).unwrap()
        if (data) {
          var arr = data.data
          var realData: any = []
          var arrayOfArrays = splitData(arr, 20)
          arrayOfArrays.forEach(e => {
            realData.push({
              items: e
            })

          })
          setRooms(realData)
        } else {

        }

      } catch (err) {
      }


    }
    const getSongKran = async () => {

      try {
        const data = await getSuggestTopicPopular({
          type: "room",
          limit: 1
        }).unwrap()
        if (data) {

          var arr = data.data[0].topics
          let newData = arr?.map((m: any) => {
            return { ...m, name: m.title }
          })
          setSongKran(newData)
        } else {

        }

      } catch (err) {
        console.log(err);

      }


    }
    const getTag = async () => {

      try {
        const data = await getSuggestTopicPopular({
          type: "tag",
          limit: 2
        }).unwrap()
        if (data) {

          var arr = data.data[0].topics
          let newData = arr?.map((m: any) => {
            return { ...m, name: m.title }
          })
          setTag(newData)
        } else {

        }

      } catch (err) {
        console.log(err);

      }


    }


    getData()
    getRooms()
    getHightLightApi()
    getSongKran()
    getTag()

  }, [])

  return (
    <>

      <div className="pt-l-doodle pt-xxl-toggle-hide" title="วันสงกรานต์ 2567">
        <img src="https://ptcdn.info/doodle/2024/660ff881caac0a695a4e3754_fn9afuuhhx.png" alt="Doodle" className='w-full'>
        </img>

      </div>

      <div className="flex m-b-20 py-5 border text-[#6A6A6A]  items-center p-10">

        <IoMdArrowRoundForward className='' />
        <label htmlFor="" className='ml-5'>

          หน้าแรกพันทิป
        </label>


      </div>
      <CardOutlline
        title='Announce'
        details={data}
        col={1}
      />

      <CardRoom
        title="เลือกห้อง"
        details={rooms}
      />
      <CardHighlight
        title="Highlight"
        details={hightLight}
      />
      <CardOutlline
        title='วันสงกรานต์'
        details={songkran}
        subTitle="กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที"
        col={2}
      />
      <CardOutlline
        title='Pantip Hitz'
        details={tag}
        subTitle="กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที"
        col={1}
      />


    </>
  );
}
