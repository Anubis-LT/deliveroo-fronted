const Line = ({ item, devise }) => {
   return (
      <>
         <div className="product">
            <div className="prod-description">
               {item.title != null ? <p>{item.title}</p> : ""}
               {item.description != null ? <p>{item.description}</p> : ""}

               {item.price != null ? (
                  <p>
                     {item.price} {devise.substr(1)}
                  </p>
               ) : (
                  ""
               )}
               {item.popular}
            </div>
            {item.picture != null ? (
               <div>
                  <img src={item.picture} />
               </div>
            ) : (
               ""
            )}
         </div>
      </>
   );
};

export default Line;
