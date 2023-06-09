import AfricaMost from "@/components/home/AfricaMost";
//import CallToAction from "@/components/CallToAction";
//import Featured from "@/components/featured";
import GetNotifiedForm from "@/components/home/GetNotified";
import Home from "@/components/home";
import HowItWorks from "@/components/howitworks";
import EasyStepsToUse from "@/components/howitworks/EasyStepsToUse";
import StepsEndUser from "@/components/home/StepsEndUser";

import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.svg" />
      </Head>

      <Home />

      <HowItWorks />

      <GetNotifiedForm />

      <StepsEndUser />

      {/* <Featured /> */}

      <AfricaMost />

      {/* <CallToAction /> */}

      <EasyStepsToUse />
    </>
  );
}
