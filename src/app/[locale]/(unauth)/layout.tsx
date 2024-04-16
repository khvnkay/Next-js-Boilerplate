import Link from 'next/link';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {

  return (
    <BaseTemplate
   
      rightNav={
        <>
          <li>
            <Link
              href="/sign-in/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              sign_in_link
            </Link>
          </li>

          <li>
            <Link
              href="/sign-up/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              sign_up_link
            </Link>
          </li>

          <li>
            <LocaleSwitcher />
          </li>
        </>
      }
    >
      <div className=" text-xl [&_p]:my-6 mt-[60px]">{props.children}</div>
    </BaseTemplate>
  );
}
