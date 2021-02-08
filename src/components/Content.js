import Line from "./Line";
const Content = ({ data }) => {
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
                                    <Line
                                       item={itemMeals}
                                       devise={data.restaurant.price}
                                    />
                                 </>
                              ))}
                           </div>
                        </>
                     ))}
                  </div>
               </div>
               <div className="col-panier">
                  <div className="panier">
                     <button type="button">Valider mon panier</button>
                     <p>Votre panier est vide</p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Content;
