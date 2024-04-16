import { getTranslations } from 'next-intl/server';
import CardOutlline from '@/components/CardOutlline';
import CardHighlight from '@/components/CardHighlight';
import CardRoom from '@/components/CardRoom';
import { IoMdArrowRoundForward } from "react-icons/io";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  const details = [
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
    "[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021",
  ]
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
        details={details}
        col={1}
      />

      <CardRoom
        title="เลือกห้อง"
        details={details}
      />
      <CardHighlight
        title="Highlight"
        details={details}
      />
      <CardOutlline
        title='Pantip Realtime'
        details={details}
        subTitle="กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที"
        col={2}
      />
      <CardOutlline
        title='Pantip Hitz'
        details={details}
        subTitle="กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที"
        col={1}
      />


    </>
  );
}
