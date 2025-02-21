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
    <div className="flex justify-start items-end gap-2">
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
      <p className="text-sm leading-none text-background/70 ">{tooltip}</p>
    </div>
  );
}

export default CurrencySelect;
