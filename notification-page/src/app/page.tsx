'use client';

import initData from '@/data/data';
import Notification from './components/Notification';
import { useState } from 'react';

export default function Home() {
  const [notifications, setNotifications] = useState(initData);

  const markAsAllRead = () => {
    const newNotifications = notifications.map((notification) => {
      return { ...notification, unread: false };
    });

    setNotifications(newNotifications);
  };

  const markAsRead = (id: number) => {
    const newNotifications = JSON.parse(JSON.stringify(notifications));
    newNotifications[id].unread = false;

    setNotifications(newNotifications);
  };

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-indigo-300/50'>
      <div className='min-w-[375px] max-w-2xl flex flex-col space-y-3 bg-white px-6 py-8 lg:px-8 md:rounded-2xl md:m-2'>
        <div className='flex justify-between mb-4'>
          <div className='flex items-start'>
            <p className='mr-2 font-extrabold text-xl'>Notifications</p>
            <div className='px-3 rounded-md bg-c-blue'>
              <p className='font-extrabold text-white'>
                {
                  notifications.filter(
                    (notification) => notification.unread === true
                  ).length
                }
              </p>
            </div>
          </div>
          <button
            className='group flex flex-row items-center px-1 -mr-1 text-dark-grayish-blue rounded-md hover:bg-grayish-blue/10 transition-all'
            onClick={markAsAllRead}
          >
            <svg
              fill='#000000'
              height='10px'
              width='10px'
              viewBox='0 0 490 490'
              className='opacity-0 group-hover:opacity-100 mr-1 fill-dark-grayish-blue'
            >
              <polygon points='452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 ' />
            </svg>
            Mark all as read
          </button>
        </div>
        {notifications.map((notification, key) => (
          <Notification
            key={key}
            id={key}
            notification={notification}
            markAsRead={() => markAsRead(key)}
          />
        ))}
      </div>
    </main>
  );
}
