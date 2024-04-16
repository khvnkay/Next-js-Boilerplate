
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {

  return (
    <BaseTemplate
    >
      <div className=" text-xl [&_p]:my-6 mt-[60px]">{props.children}</div>
    </BaseTemplate>
  );
}
