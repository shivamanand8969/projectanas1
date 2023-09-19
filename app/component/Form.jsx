
import { handleSubmit } from "../actions";

const Form = () => {


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full h-full max-w-md p-8 bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-2xl font-semibold text-gray-100 mb-4">Booked Order</h1>
        <form className="space-y-4" method="post" action={handleSubmit}>
          <div className="flex flex-col">

            <label htmlFor="productName" className="text-gray-300 mb-1">
              Order
            </label>
            <input
              name="slug"
              type="text"
              id="productName"

              className="px-4 py-2 bg-gray-700 text-gray-100 rounded focus:outline-none focus:bg-gray-600"
              placeholder="Add your Order.."
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="quantity" className="text-gray-300 mb-1">
              Date
            </label>
            <input
              type="text"
              id="quantity"
              name="quality"
              className="px-4 py-2 bg-gray-700 text-gray-100 rounded focus:outline-none focus:bg-gray-600"
              placeholder="Enter Date.."
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-gray-300 mb-1">
              Time
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="px-4 py-2 bg-gray-700 text-gray-100 rounded focus:outline-none focus:bg-gray-600"
              placeholder="Enter time..."
            />
          </div>
          <input
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          />

        </form>
      </div>
    </div>
  );
};

export default Form;
