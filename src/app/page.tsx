import Image from "next/image";

export default function Home() {
  return (
  <>
  <div className="text-center text-6xl flex justify-center items-center">
    <h1>this is nextjs</h1>
    <Image 
    src='/next.svg'
    className="bg-white p-4 rounded gap-4 mt-40"
     alt="next.js logo"
     width={200}
     height={40}
     sizes="100vw"
     priority
     />
  </div>
  </>
  );
}
