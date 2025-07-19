import { Pricing } from "@/app/[locale]/(landing)/Pricing";
import React from "react";

const page = () => {
  return (
    <div>
      <Pricing isEmployee={true} />
    </div>
  );
};

export default page;
