import React, { useState, useEffect } from "react";
import "./assets/Css/App.css";
import axios from "axios";

import "./assets/Css/App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
   const [data, setData] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const fetchData = async () => {
      const response = await axios.get("http://localhost:3200/");
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
   };
   useEffect(() => {
      fetchData();
   }, []);
   return isLoading ? (
      <span>En cours de chargement... </span>
   ) : (
      <>
         <h2>
            <Header
               title={data.restaurant.name}
               descriptions={data.restaurant.description}
               picture={data.restaurant.picture}
            />
            <Content data={data} />
            <Footer />
         </h2>
      </>
   );
}

export default App;
