import Image from "next/image";
import BannerComp from "./components/modules/bannerComp";


export default function Home() {


  

  return (
    <>
      <section className="w-full h-auto border pt-[100px] absolute">
        
        
        <BannerComp />
      </section>
      //overall background
      <div className="">
          <Image src='/assets/background.png' width='500' height='1000' alt="Background" className="w-full h-full" />
      </div>    
    </>
    
    
  );
}
