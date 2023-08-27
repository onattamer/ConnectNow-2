"use client"

import { Button, Link } from "@mui/joy";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HomeIcon from "@mui/icons-material/Home";
import "./styles.css";
import '../app/contact/image.css';
export function HeaderComponent() {
  return (
    <div className="flex w-full justify-center bg-new-color text-white h-14">
      <div className="flex w-1/2 p-2 items-center justify-start bg-new-color">
        <div className="w-1/3 flex justify-start items-center bg-new-color">
          <img
            className="h-10 rounded-full ml-10"
            src="denem3.png"
            alt="ConnectNow Logo"
          />
          {/* text-black italic text-2xl mt-1 ml-4 font-sans */}
          <span className="navbar-link-connectnow ml-6 mt-1">ConnectNow</span>
        </div>
      </div>

      <div className="flex w-1/2 p-2 items-center justify-end bg-new-color  turqoise-four  ">
       

      <nav>
            <ul className="navbar">
              <li>
                <Link className="navbar-link mr-3" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="navbar-link mr-3" href="/">
                  Services
                </Link>
              </li>
              <li>
                <Link className="navbar-link mr-3" href="/">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="navbar-link mr-3" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
      </div>
    </div>
  );
}
