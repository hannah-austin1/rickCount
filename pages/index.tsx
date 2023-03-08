import Head from "next/head";
import { Inter } from "next/font/google";
import prisma from "../lib/prisma";
import { gql, useQuery } from "@apollo/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const RICK_COUNT = gql`
  query {
    rickCount {
      id
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(RICK_COUNT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <Head>
        <title>Rick Roll Count</title>
        <meta name="description" content="Counting Rick Rolls" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex-column">
          <button
            type="submit"
            className="group relative flex w-100 justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add to Rick Count
          </button>
          <p className="mt-4">
            Current Rick Roll Count: {data.rickCount.length}
          </p>
        </div>
      </main>
    </>
  );
}
