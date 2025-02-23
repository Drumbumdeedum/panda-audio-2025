import PageHeader from "@/components/layout/page-header";
import React from "react";

function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact us"
        subtitle="Get in touch - we're here to help"
      />
      <div className="px-4 md:px-8 lg:px-16 py-8 space-y-8">
        <section>
          <h4>Contact info</h4>
          <p>Panda Audio Kft.</p>
          <p>2040 Budaörs,</p>
          <p>Széchenyi u. 8.</p>
          <p>Hungary Tel: +36 20 3693280</p>
          <p>Email: info@panda-audio.com</p>
        </section>
      </div>
    </>
  );
}

export default ContactPage;
