import Image from "next/image";
import tw from './tw.module.scss'

export default function Home() {
  return (
    <main className={tw['flex']}>
      <p className={`${tw['font-bold']} ${tw['font-sans']} ${tw['text-2xl']}`}>Hello World</p>
    </main>
  );
}
