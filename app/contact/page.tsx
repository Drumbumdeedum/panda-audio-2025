import PageHeader from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import React from "react";

function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact us"
        subtitle="Get in touch - we're here to help"
      />
      <div className="px-4 md:px-8 lg:px-16 py-8 space-y-8 w-max-content mx-auto">
        <div className="w-72">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Panda Audio Kft.</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <p>2040 Budaörs,</p>
                    <p>Széchenyi u. 8.</p>
                    <p>Hungary</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href="tel:+36203693280"
                    className="hover:text-primary transition-colors"
                  >
                    +36 20 3693280
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href="mailto:info@panda-audio.com"
                    className="hover:text-primary transition-colors"
                  >
                    info@panda-audio.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
