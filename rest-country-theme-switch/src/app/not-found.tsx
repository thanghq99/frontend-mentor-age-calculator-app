import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex-grow flex flex-col items-center justify-center'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/' className='mt-2 px-4 py-2 bg-l-element dark:bg-d-element'>
        Return Home
      </Link>
    </div>
  );
}
