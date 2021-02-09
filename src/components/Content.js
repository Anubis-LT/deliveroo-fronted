import Line from "./Line";
import Cart from "./Cart";
import { useState } from "react";

const Content = ({ data }) => {
   // index, reference, prix,qte,devise
   const [cart, setCart] = useState([[1, "Brunch Vegan", 24.5, 10, "€"]]);

   const handleAddCart = (index, title, price) => {
      // Créer une copie
      const newCart = [...cart];
      console.log(newCart);
      newCart.indexOf(index) < 0 && newCart.push([index, title, price, 1]);

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
