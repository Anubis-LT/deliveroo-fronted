const Cart = ({ cart, setCart }) => {
   return (
      <>
         <div className="panier">
            <button type="button">Valider mon panier</button>

            {cart.length === 0 ? (
               <p>Votre panier est vide</p>
            ) : (
               cart.map((itemCart, indexCart) => (
                  <div className="listCart">
                     <button
                        onClick={() => {
                           const newCart = [...cart];
                           newCart[indexCart][3]--;
                           setCart(newCart);
                        }}
                     >
                        -
                     </button>
                     <span key={indexCart}>
                        {itemCart[3] > -1 && itemCart[3]}
                     </span>
                     <button
                        onClick={() => {
                           const newCart = [...cart];
                           newCart[indexCart][3]++;
                           setCart(newCart);
                        }}
                     >
                        +
                     </button>
                     <span key={indexCart}>{itemCart[1]}</span>
                     <span key={indexCart}>
                        {itemCart[3] > 0 && itemCart[2] * itemCart[3]}
                     </span>
                     <span key={indexCart}>{itemCart[4]}</span>
                  </div>
               ))
            )}
         </div>
      </>
   );
};

export default Cart;
