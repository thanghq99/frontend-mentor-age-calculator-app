import { DividerComponentPropsType } from '@/types/formTypes';
import React, { FC } from 'react';

const Divider: FC<DividerComponentPropsType> = ({ form }) => {
  return (
    <div className="relative border divide-y-2 my-12 lg:mr-3 lg:w-[600px]">
      <button
        className="absolute translate-y-1/2 translate-x-1/2 right-1/2 lg:right-8 bottom-0 p-4 lg:p-5 bg-[#854DFF] rounded-full group hover:bg-black transition duration-200"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 46 44"
          className="lg:w-12 lg:h-12"
        >
          <g
            fill="none"
            stroke="#FFF"
            strokeWidth="3"
            className="hover:stroke-white"
          >
            <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Divider;
