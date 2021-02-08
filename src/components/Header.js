import Logo from "../assets/Image/Deliveroo_logo.svg.png";
const Header = ({ title, descriptions, picture }) => {
   return (
      <>
         <header className="container">
            <img src={Logo}></img>
         </header>
         <div className="separation"></div>
         <div className="container blocheader">
            <div>
               <h1 className="h1">{title}</h1>
               <p>{descriptions}</p>
            </div>
            <div>
               <img src={picture} />
            </div>
         </div>
      </>
   );
};
export default Header;
