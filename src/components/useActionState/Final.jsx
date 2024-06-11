import { useActionState } from 'react';

const addToCart = async (prevState, formData) => {
  const itemID = formData.get('itemID');

  if (itemID === '1') {
    return 'Added to cart';
  } else {
    return 'Out of stock';
  }
};

const AddToCartForm = ({ itemID, itemTitle }) => {
  const [message, formAction] = useActionState(addToCart, null);

  return (
    <form action={formAction}>
      <div className="p-4 mb-4 border border-gray-400 rounded">
        <h2 className="pb-3 text-2xl font-bold">{itemTitle}</h2>
        <input type="hidden" name="itemID" value={itemID} />
        <button
          type="submit"
          className="px-4 py-1.5 font-bold text-white bg-blue-400 rounded-md"
        >
          Add to Cart
        </button>
        <span className="pl-4 text-xl">{message}</span>
      </div>
    </form>
  );
};

export default AddToCartForm;
