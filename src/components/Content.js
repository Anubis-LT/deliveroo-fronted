import Line from "./Line";
import Cart from "./Cart";
import { useState } from "react";

const Content = ({ data }) => {
   // index, reference, prix,qte,devise
   const [cart, setCart] = useState([]);

   const handleAddCart = (id, title, price) => {
      // Créer une copie
      const newCart = [...cart];

      // test if exist in cart
      let idProdExist = false;
      for (let i = 0; i < newCart.length; i++) {
         if (newCart[i][0] === id) {
            idProdExist = true;
            break;
         }
      }

      idProdExist === false
         ? newCart.push([id, title, price, 1]) //Add cart
         : newCart[id][3]++; //update cart

      setCart(newCart);
   };
   /*const handleDeleteCart = (index) => {
      // Créer une copie
      const newCart = [...cart];
      setCart(newCart);
   };*/

   return (
      <>
         <section>
            <div className=" content container">
               <div className="col-listproducts">
                  <div className="category">
                     {data.categories.map((item, index) => (
                        <>
                           {item.meals.length > 0 ? (
                              <p className="categoryTitle">{item.name}</p>
                           ) : (
                              ""
                           )}

                           <div className="products">
                              {item.meals.map((itemMeals, indexMeals) => (
                                 <>
                                    <p
                                       onClick={() =>
                                          handleAddCart(
                                             itemMeals.id,
                                             itemMeals.title,
                                             itemMeals.price
                                          )
                                       }
                                    >
                                       <Line
                                          key={itemMeals.id}
                                          item={itemMeals}
                                          devise={data.restaurant.price}
                                       />
                                    </p>
                                 </>
                              ))}
                           </div>
                        </>
                     ))}
                  </div>
               </div>
               <div className="col-panier">
                  <Cart cart={cart} setCart={setCart} />
               </div>
            </div>
         </section>
      </>
   );
};

export default Content;
