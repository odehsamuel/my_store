import React from "react";

export default async function Product({ params }) {
  const param = await params

  return <div className="text-2xl text-center mt-10">
    Here is the details of product with id - <span className="text-indigo-600">{param.slug}</span>
  </div>;
}
