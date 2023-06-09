import Featured from "@/components/featured";
import Head from "next/head";
import React from "react";

type Props = {};

const FeaturedPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Featured</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.svg" />
      </Head>

      <Featured />
    </>
  );
};

export default FeaturedPage;
