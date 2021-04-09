import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/OnePlus/AP_2/OP_9R/D21233128_OnePlus_PreLaunch_Lemonade_Design_SIM_Mob_Hero_1242x450._CB655684560_SY500_.jpg"
          alt=""
        ></img>
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping basket is empty</h2>
            <p className="empty_cart">
              Your shopping cart is waiting. Give it purpose – fill it with
              groceries, clothing, household supplies, electronics and more.
              Continue shopping on the Amazon.in homepage, learn about today's
              deals, or visit your Wish List.
            </p>
          </div>
        ) : (
          <div className="aboutShopping_card">
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      
      
    </div>
  );
}

export default Checkout;
