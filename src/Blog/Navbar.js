import React from "react";
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute  z-50 w-full"
          : "relative shadow-lg bg-dark text-white shadow-lg") +
        " flex flex-wrap items-center bg-dark text-white justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.transparent ? "text-white" : "text-white") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            href="/"
          >
            Vacant2Rent
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid 
            border-transparent rounded bg-transparent block lg:hidden outline-none 
            focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-white") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
         
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
           

           
            <li className="flex items-center">
            <Link  className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-white"
                    : "text-white hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                } to="/list_property">List Property</Link>
            </li>
            <li className="flex items-center">
            <Link  className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-white"
                    : "text-white hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                } to="/view_property">View Property</Link>
            </li>
            <li className="flex items-center">
            <Link  className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-white"
                    : "text-white hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                } to="/blog">Blog</Link>
            </li>

            <li className="flex items-center">
            <Link  className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-white"
                    : "text-white hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                } to="/contact">Contact Us</Link>
            </li>
            
            <li className="flex items-center">
            <Link  className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-white"
                    : "text-white hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                } to="/login">Login</Link>
            </li>




            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-white"
                    : "text-white hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " fab fa-facebook text-lg leading-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>


            <li className="flex items-center">

              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-white"
                    : "text-white hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " fab fa-twitter text-lg leading-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </Link>
            </li>

    
         
          </ul>
        </div>
      </div>
    </nav>
  );
}
