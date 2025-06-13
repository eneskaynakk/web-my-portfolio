import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='relative w-full h-[600px]'>
        <Image
        src="/images/astr.jpg"
        alt= "Main Image"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>
      
    </main>
  );
}