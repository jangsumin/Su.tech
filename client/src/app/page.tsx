import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import './header.css';

export default function Home() {
  return (
    <>
      <Image src='/su-tech.svg' width={130} height={43} alt='logo' />
      <MagnifyingGlassIcon className='glass-icon' />
    </>
  );
}
