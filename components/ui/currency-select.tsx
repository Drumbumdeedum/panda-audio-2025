import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

function CurrencySelect() {
  return (
    <div className="w-32 relative">
      <Select defaultValue="USD">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="USD">USD ($)</SelectItem>
          <SelectItem value="EUR">EUR (€)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CurrencySelect;
