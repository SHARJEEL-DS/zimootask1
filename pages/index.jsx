import Head from "next/head";
import Hero from "@/components/Hero";
import RealState from "@/components/RealState";

import Category from "@/components/Category";
import Entry from "@/components/Entry";
import Personalised from "@/components/Personalised ";

export default function Home() {
  

  return (
    <>
      <Head>
        <title>sharjeel</title>
      </Head>

      <main>
      <div className="h-screen ">
     
     
     <Hero/>
     <RealState/>
     <Category/>
     <Entry/>
    <Personalised/>
    
    
     
    </div>
      </main>
    </>
  );
}
