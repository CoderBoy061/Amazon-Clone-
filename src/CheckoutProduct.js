import React from "react";
import "./CheckoutProduct.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {

    const [{basket}, dispatch] = useStateValue();

    const RemoveFromBasket = () =>{
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id : id
        });

    };

  return (
    <div className="checkout_product">
      <img className="checkout_product_img" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkout_title">{title}</p>
        <p className="checkout_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarRateIcon />
              </p>
            ))}
        </div>
        <button onClick={RemoveFromBasket} >Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
