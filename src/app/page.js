import { getProducts } from "../../database/products";
import Head from "next/head";
import Product from "@/components/product";
import Link from "next/link";

export default async function page() {
  const products = getProducts();

  return (
    <>
      <Head>
        <title>Digitals</title>
      </Head>
      {
        (products.length === 0 ? (
          <p className="mt-20 text-rose-500 font-semibold text-2xl text-center">
            We don't have any device yet. Start adding some{" "}
            <span className="text-indigo-400 hover:underline hover:text-indigo-700">
              <Link href={"/add-product"}>here.</Link>
            </span>
          </p>
        ) : (
          <>
            <div className="my-6 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-y-12 gap-x-8 justify-items-center mx-14 py-4">
              {products.map((prod) => {
                return <Product product={prod} key={prod.id} />;
              })}
            </div>
          </>
        ))
      }
    </>
  );
}
