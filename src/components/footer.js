"use client"


import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Link } from "@mui/joy";
export function FooterComponent() {
  return (
    <div className="h-10 flex justify-start items-center  bg-gray-500 w-full">
      <h1>© ConnectNow UK Limited 2023</h1>
      <div className="  w-9/12 flex justify-center items-center ">
        <Link
          href="https://github.com/onattamer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="h-7 w-7 mr-5" />
        </Link>
        <Link
          href="https://twitter.com/ConnectNowChat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="h-7 w-7 mr-14" />
        </Link>
      </div>
      
      {/* <div className="w-1/2 flex justify-center items-center">
        <GitHubIcon className="h-7 w-7" />
        <TwitterIcon className="h-7 w-7" />
      </div> */}
    </div>
  );
}
