import notifications from '@/data/data';
import Notification from './components/Notification';

export default function Home() {
  return (
    <main className='min-h-screen min-w-[375px] flex flex-col space-y-3 px-4 py-8'>
      <div className='flex justify-between my-2'>
        <div className='flex items-center'>
          <p className='mr-3 font-extrabold text-2xl'>Notifications</p>
          <div className='px-2 py-1 rounded-md bg-c-blue'>
            <p className=' text-2xl text-white'>
              {
                notifications.filter(
                  (notification) => notification.unread === true
                ).length
              }
            </p>
          </div>
        </div>
        <button className='text-dark-grayish-blue'>Mark all as read</button>
      </div>
      {notifications.map((notification, key) => (
        <Notification key={key} {...notification} />
      ))}
    </main>
  );
}
