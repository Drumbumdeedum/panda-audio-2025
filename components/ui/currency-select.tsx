"use client";

import { useCurrencyStore } from "@/store/currency";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

function CurrencySelect() {
  const { currency, setCurrency } = useCurrencyStore();
  return (
    <div className="flex gap-2 items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Info size={16} />
          </TooltipTrigger>
          <TooltipContent side="top">
            <p className="p-1 text-xs font-normal">
              We process payments in EUR for EU residents and in USD for
              international orders.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
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
    </div>
  );
}

export default CurrencySelect;
