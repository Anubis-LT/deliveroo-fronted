const Cart = ({ cart }) => {
   return (
      <>
         <div className="panier">
            <button type="button">Valider mon panier</button>

            {cart.length === 0 ? (
               <p>Votre panier est vide</p>
            ) : (
               cart.map((itemCart, indexCart) => (
                  <p key={indexCart}>{itemCart}</p>
               ))
            )}
         </div>
      </>
   );
};

export default Cart;
