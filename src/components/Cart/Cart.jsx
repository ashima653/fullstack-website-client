import "./Cart.scss";
import { MdClose } from "react-icons/md";
import {BsCartX } from "react-icons/bs"; 
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";
import {loadStripe} from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";



const Cart = ({setShowCart}) => {

        const {cartItems,  cartSubTotal} = useContext(Context);
        const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

        const handlePayment =  async()=>{
                try {
                    const stripe = await stripePromise;
                const res= await makePaymentRequest.post("/api/orders",{
                    products: cartItems,

                });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
                } catch (error) {
                    console.log(error);
                }

        }; 

    return(  
        
        <div className="cart-panel">
            <div className="opace-layer"></div>
            <div className="cart-content">

                    <div className="cart-header">
                        <spam className="heading">Shopping Cart</spam>

                        <span className="close-button"  onClick={()=> setShowCart(false)}>
                            <MdClose/>
                            <span className="text">close</span>
                        </span>

                    </div>

               { cartSubTotal===0 && <div className="empty-cart">
                        <BsCartX/>
                        <span>No Products In The Cart</span>
                        <button className="return-cta">Return To Shop</button>
                    </div> }

                <>
                <div className="cart-items">
                    <CartItem/>
                    </div>
                  {  cartSubTotal>0 && <div className="cart-footer">
                        <div className="sub-total">
                            <span className="text">Subtotal:</span>
                            <span className="total"> &#8377; { cartSubTotal}</span>
                        </div>

                        <div className="button">
                            <button className="checkout-cta" onClick={handlePayment}>Checkout</button>
                        </div>
                    </div>

                 }
                </>            

            </div>
        </div>
    );
};

export default Cart;
