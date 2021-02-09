import Line from "./Line";
import Cart from "./Cart";
import { useState } from "react";

const Content = ({ data }) => {
   // index, reference, prix,qte,devise
   const { cart, setCart } = useState([1, 1, "Brunch Vegan", 24.5, "€"]);

   /*const addCart = (event, index) => {
      "";
   };
   const UpdateCart = (event, index) => {
      "";
   };

   const DeleteCart = (event, index) => {
      "";
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
                                    <a>
                                       <Line
                                          key={indexMeals}
                                          item={itemMeals}
                                          devise={data.restaurant.price}
                                       />
                                    </a>
                                 </>
                              ))}
                           </div>
                        </>
                     ))}
                  </div>
               </div>
               <div className="col-panier">
                  <Cart cart={cart} />
               </div>
            </div>
         </section>
      </>
   );
};

export default Content;
