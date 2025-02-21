"use client";

import { useCurrencyStore } from "@/store/currency";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

function CurrencySelect() {
  const { currency, setCurrency } = useCurrencyStore();
  const tooltip =
    currency === "EUR" ? "* EU residents only" : "* for non-EU residents";

  return (
    <div className="space-y-2">
      <div className="w-24">
        <Select defaultValue="EUR" onValueChange={setCurrency}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={currency} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="EUR">EUR (€)</SelectItem>
            <SelectItem value="USD">USD ($)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <p className="text-xs leading-none text-foreground/70">{tooltip}</p>
    </div>
  );
}

export default CurrencySelect;
