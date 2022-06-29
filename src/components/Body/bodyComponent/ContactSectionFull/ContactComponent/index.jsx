import React from "react";
import ContactFormComponent from "../ContactFormComponent";
import EmailComponent from "../EmailComponent";
import FacebookComponent from "../FacebookComponent";
import WhatsappComponent from "../WhatsappComponent";

export default function ContactComponent() {
  return (
    <div className="mt-10 sm:mt-20 container mx-auto">
      <div id="ContactMe" className="w-full h-10 " />
      <div className="flex flex-col justify-center items-center lg:flex-row">
        <div className="flex flex-col justify-center items-center space-y-2 ">
          <WhatsappComponent />
          <FacebookComponent />
          <EmailComponent />
        </div>
        <ContactFormComponent />
      </div>
    </div>
  );
}
