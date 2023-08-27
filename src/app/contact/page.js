"use client";

import * as React from "react";
import { FooterComponent } from "@/components/footer";
import { HeaderComponent } from "@/components/header";
import Image from "next/image";
import "./text.css";
import "./image.css";
import Input from "@mui/joy/Input";

import Textarea from "@mui/joy/Textarea";

import { Button } from "@mui/joy";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CircularProgress from "@mui/material/CircularProgress";
export default function ContactPage() {
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const handleClick = () => {
    setLoading(true);
    setSent(false);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 2000);
  };
  return (
    <div className="flex flex-col h-screen">
      <HeaderComponent></HeaderComponent>
      {/* <h1 className='text-3xl p-10'>Contact now, connectnow</h1> */}

      <div className="w-full flex flex-row  bg-white h-full">
      <div className="w-1/2 flex bg-white items-center justify-center  ">
              <div className="p-8 mb-20">
                <img className="h-10 rounded-full" src=" denem3.png" />
                {/* <h1 className='text-2xl mt-5'>
                                connectnow
                            </h1> */}
                <div className="w-2/3 border border-blue-400 mt-2 mb-5">

                </div>
                <p className="introduction-text">
                  We are merely a click away, ready to lift your company from
                  impressive to exceptional. Complete the form to provide more
                  information about your business. After that, we'll guide you
                  on incorporating ConnectNow to take your company's performance
                  to the next level.
                </p>
                <p className="text-xl  introduction-text-adress">
                  1508 10th Ave.
                </p>
                <p className="text-xl  introduction-text-adress">
                  Phone:05123532385
                </p>
                <p className="text-xl  introduction-text-adress">
                  Seattle,WA 98122
                </p>
                <p className="text-xl  introduction-text-adress">
                  info@connectnow.com
                </p>
                <div className="flex flex-row items-center mb-5">
                  <img
                    src="team-member.jpeg"
                    className="team-member mt-5 mr-5"
                  ></img>
                  <span className="introduction-text-adress ">
                    Hello, I'm Onat! I'm eager to discuss your brilliant ideas
                    and exciting projects. Let's chat!
                  </span>
                
                </div>
                <p className="message-to-customer">"It gives me pleasure to act as a bridge, converting your ideas to our team with a variety of expertise, ensuring the optimal outcomes."</p>
              </div>
            </div>
            <div className="w-1/2  turqoise-four  ">
              <div className="p-8">
                <h1 className="text-black text-2xl text-center font-bold border-b-2 border-black ">
                  {" "}
                  Hit Us Up
                </h1>
                <div className="flex justify-between gap-4 pt-4">
                  <Input
                    className="w-full"
                    placeholder="Name"
                    color="neutral"
                    size="md"
                    variant="plain"
                  />
                  <Input
                    className="w-full"
                    placeholder="Surname"
                    color="neutral"
                    size="md"
                    variant="plain"
                  />
                </div>
                <Input
                  className="mt-4"
                  placeholder="Company Name"
                  color="neutral"
                  size="md"
                  variant="plain"
                />
                <div className="flex justify-between gap-4 pt-4">
                  <Input
                    className="w-full"
                    type="email"
                    placeholder="Email"
                    color="neutral"
                    size="md"
                    variant="plain"
                  />
                  <Input
                    className="w-full"
                    type="number"
                    placeholder="Phone"
                    color="neutral"
                    size="md"
                    variant="plain"
                  />
                </div>

                <Textarea
                  minRows={4}
                  className="mt-4"
                  placeholder="What's Up ? "
                  color="neutral"
                  size="md"
                  variant="plain"
                ></Textarea>
                <>
                  {loading && (
                    <div className="inline-flex items-center mt-4 border border-gray-500 px-4 py-2 text-sm font-medium text-gray-700 bg-white">
                      <CircularProgress size={14} />
                      <span className="ml-2">Loading...</span>
                    </div>
                  )}
                  {!loading && (
                    <Button
                      onClick={handleClick}
                      className="mt-4"
                      variant="outlined"
                      endIcon={sent && <CheckCircleOutline />}
                    >
                      {sent ? "Sent ✅" : "Send Email"}
                    </Button>
                  )}
                </>
              </div>
            </div>
      </div>

      {/* <div className='flex-grow'></div> */}
      <FooterComponent></FooterComponent>
    </div>
  );
}
