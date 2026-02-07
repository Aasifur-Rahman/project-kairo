import { Slider } from "@/components/ui/slider";
import { sendCommand } from "@/lib/chronosSerial";

export default function BrightnessSlider() {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">Brightness</p>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        onValueChange={(v) => sendCommand(`SET_BRIGHTNESS ${v[0]}`)}
      />
    </div>
  );
}
