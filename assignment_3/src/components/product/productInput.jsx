import { useState } from "react";
import { useDispatch } from "react-redux";
import productAdd from "../../redux/product/actions";

const ProductInput = () => {
  const [name, setName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const dispatch = useDispatch();

  const handleForm = (productName, category, imgUrl, price, quantity) => {
    dispatch(productAdd(productName, category, imgUrl, price, quantity));
  };

  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={(event) => {
            event.preventDefault();
            const productName = event.target.name.value;
            const category = event.target.productCategory.value;
            const imgUrl = event.target.imgUrl.value;
            const price = event.target.price.value;
            const quantity = event.target.quantity.value;

            handleForm(productName, category, imgUrl, price, quantity);
          }}
        >
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              name="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              name="productCategory"
              value={productCategory}
              onChange={(event) => setProductCategory(event.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              name="imgUrl"
              value={imgUrl}
              onChange={(event) => setImgUrl(event.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                name="price"
                id="lws-inputPrice"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                name="quantity"
                id="lws-inputQuantity"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductInput;
