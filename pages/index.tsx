import Head from "next/head";
import { Inter } from "next/font/google";
import prisma from "../lib/prisma";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [rickCount, setRickCount] = useState(0);
  // console.log(prisma);
  // const getRickCount = async () => {
  //   const rickEntries = await prisma.rickcount.findMany();
  //   console.log(rickEntries);
  //   setRickCount(rickEntries.length);
  // };
  // useEffect(() => {
  //   getRickCount();
  // }, []);
  // console.log(rickCount);
  return (
    <>
      <Head>
        <title>Rick Roll Count</title>
        <meta name="description" content="Counting Rick Rolls" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <button
          type="submit"
          className="group relative flex w-100 justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add to Rick Count
        </button>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const rickEntries = await prisma.rickcount.findMany();
  const rickCount = { count: rickEntries.length };
  console.log(rickCount.count);
  return {
    props: rickCount,
  };
};
