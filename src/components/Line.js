const Line = ({ item, devise, index }) => {
   return (
      <>
         <div className="product">
            <div className="prod-description">
               {item.title != null ? <p>{item.title}</p> : ""}
               {item.description != null ? (
                  <p>{item.description.substr(0, 100)}</p>
               ) : (
                  ""
               )}

               <div className="price">
                  {item.price} {devise.substr(1)}
                  {item.popular === true ? (
                     <>
                        <div className="populaire">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#ff8000"
                              class="feather feather-star"
                              style={{
                                 width: "15px",
                                 height: "15px",
                                 marginright: "2px",
                              }}
                           >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                           </svg>
                           Populaire
                        </div>
                     </>
                  ) : (
                     ""
                  )}
               </div>
            </div>
            {item.picture != null ? (
               <div>
                  <img src={item.picture} alt="plat" />
               </div>
            ) : (
               ""
            )}
         </div>
      </>
   );
};

export default Line;
