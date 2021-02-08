import Logo from "../assets/Image/Deliveroo_logo.svg.png";
const Header = ({ title, descriptions, picture }) => {
   return (
      <>
         <header className="container">
            <img src={Logo} alt="logo"></img>
         </header>
         <div className="separation"></div>
         <div className="container blocheader">
            <div>
               <h1 className="h1">{title}</h1>
               <p>{descriptions}</p>
            </div>
            <div>
               <img src={picture} alt="plat" />
            </div>
         </div>
      </>
   );
};
export default Header;
