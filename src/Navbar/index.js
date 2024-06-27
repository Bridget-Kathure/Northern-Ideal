

 import { IoSearchSharp } from "react-icons/io5";
 import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
 import "./index.css";
 import { IoPersonOutline } from "react-icons/io5";
 import { IoCartOutline } from "react-icons/io5";


  export const NavBar = () => {
    return (
        <div>

       
      <div className="navbarContent">
        <h1 className="logo">Northern Ideal</h1>
        <div className="searchContainer">
          <input type="text" placeholder="Search products" className="search" />
          <IoSearchSharp className="searchIcon" />
          <HiOutlineAdjustmentsHorizontal  className="adjustmentIcon"/>
        </div>
        <div className="signIn">
        <IoPersonOutline  className="signIcon"/>
          <p>Sign In / Sign Up</p>
        </div> 
        <IoCartOutline />
      </div>


      </div>
    );
  };

