import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav?: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full  text-gray-700 antialiased">
      <div className="">
        <main>{props.children}
        </main>

     
      </div>
    </div>
  );
};

export { BaseTemplate };
