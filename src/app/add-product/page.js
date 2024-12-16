import { redirect } from "next/navigation";
import { addProduct } from "../../../database/products";

export default async function About() {
  async function getFormData(formData) {
    "use server";
    const fetchedData = {
      prodName: formData.get("name"),
      prodPrice: formData.get("price"),
      prodImage: formData.get("image"),
    };
    console.log(fetchedData.prodImage);
    addProduct(
      fetchedData.prodName,
      fetchedData.prodPrice,
      fetchedData.prodImage.name
    );
    redirect("/");
  }

  return (
    <>
      <form
        className="max-w-2xl shadow-xl rounded-lg my-10 py-8 px-6 mx-auto border-2 border-gray-300"
        action={getFormData}
      >
        <h2 className="text-2xl font-bold border-b pb-4 border-slate-400">
          Add Product
        </h2>
        <div className="flex justify-between mt-8">
          <div>
            <label className="block text-slate-900 font-medium">
              Product Name
            </label>
            <input
              className="text-gray-900 ring-1 ring- rounded-md w-full py-1.5 px-2 placeholder:text-gray-400"
              type="text"
              name="name"
              placeholder="E.g., Digital devices"
            />
          </div>
          <div>
            <label className="block text-slate-900 font-semibold">Price</label>
            <input
              className="text-gray-900 ring-1 ring- rounded-md w-full py-1.5 px-2 placeholder:text-gray-400"
              type="number"
              name="price"
              placeholder="$0"
            />
          </div>
        </div>
        <div className="border-b pb-4 border-slate-400">
          <label className="block text-slate-900 font-semibold mt-6">
            Product Image
          </label>
          <div className="border border-dashed py-6 border-gray-400 rounded-md text-center">
            <input
              className="placeholder:text-sm file:rounded-full file:text-xs file:ml-16 file:text-indigo-700 file:border-none file:bg-indigo-300 file:py-1 file:px-2 py-8"
              type="file"
              name="image"
              placeholder=".PNG, .JPG, .JPEG"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="button"
            className="border py-0.5 px-2 text-sm font-semibold text-slate-900 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="border py-0.5 px-2 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-gray-100 rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
