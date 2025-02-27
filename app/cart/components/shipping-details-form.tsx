"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CountrySelector } from "@/components/ui/country-selector";

function ShippingDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h3>Shipping address</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CountrySelector
          onSelect={(value) => console.log(`Selected country: ${value}`)}
        />
      </CardContent>
    </Card>
  );
}

export default ShippingDetails;
