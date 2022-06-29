import React from "react";
import { RiMessengerLine } from "react-icons/ri";

export default function FacebookComponent() {
  return (
    <div className=" flex flex-col justify-center items-center w-52 h-52 mt-10 btn-bg text-[white]  hover:text-white border border-[#3F37C9] rounded-3xl mx-auto font-light ">
      <div className="flex flex-col justify-center items-center  gap-2">
        <RiMessengerLine className="w-10 h-10" />
        <p className="text-2xl ">Messenger</p>
        <p className="text-md ">prabhuvardhanrao</p>
        <a
          href="https://m.me/P.PrabhuVardhanRao"
          target="_blank"
          rel="noreferrer"
          className="text-sm underline cursor-pointer "
        >
          Send a message
        </a>
      </div>
    </div>
  );
}
