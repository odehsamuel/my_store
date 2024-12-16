import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <div>
        <Head>
          {/* <Link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"> */}
        </Head>
      </div>
      <div className="w-full flex justify-evenly px-4 mt-4 border-b pb-6 border-slate-400">
        <Link href="/" className="font-bold">
          Home
        </Link>
        <Link href="/add-product" className="font-bold">
          Add Product
        </Link>
      </div>
    </>
  );
}
