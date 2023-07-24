import React, { FC } from 'react';

interface PageTitleProps {
  contentOrder: number;
  title: string;
}

const PageTitle: FC<PageTitleProps> = ({ contentOrder, title }) => {
  return (
    <p className='pt-[89px] uppercase font-barlow-condensed tracking-[2.7px]'>
      <span className='pr-[18px] font-bold opacity-25'>
        {contentOrder < 9 ? `0${contentOrder + 1}` : contentOrder + 1}
      </span>
      {title}
    </p>
  );
};

export default PageTitle;
