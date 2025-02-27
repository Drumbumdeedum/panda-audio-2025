"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ShippingDetailsForm from "./shipping-details-form";

function ShippingDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h3 className="mb-0">Shipping address</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ShippingDetailsForm />
      </CardContent>
    </Card>
  );
}

export default ShippingDetails;
