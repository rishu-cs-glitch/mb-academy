import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const TIME_ZONES = [
  "GMT -12:00",
  "GMT -08:00",
  "GMT -05:00",
  "GMT +00:00",
  "GMT +05:30 (India)",
  "GMT +08:00",
  "GMT +10:00",
];
export function TimeZoneSelect({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-11 w-full bg-white">
        <SelectValue placeholder="Select Time Zone" />
      </SelectTrigger>

      <SelectContent className="bg-white">
        {TIME_ZONES.map((tz) => (
          <SelectItem key={tz} value={tz}>
            {tz}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
