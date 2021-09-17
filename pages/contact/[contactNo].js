import { useRouter } from "next/router";
import React from "react";

export default function ContactNo() {
  const router = useRouter();
  const contactNumber = router.query.contactNo;
  return (
    <div>
      <h1>this is my {contactNumber} call me asap</h1>
    </div>
  );
}
