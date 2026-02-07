import { Card, CardContent } from "@/components/ui/card";
import BrightnessSlider from "./components/BrightnessSlider";
import ConnectButton from "./components/ConnectButton";
import StatusBadge from "./components/StatusBadge";
import { useDeviceStore } from "./store/deviceStore";

function App() {
  const battery = useDeviceStore((s) => s.status.battery);

  return (
    <div>
      <div className="min-h-screen bg-background p-6">
        <Card className="max-w-md mx-auto">
          <CardContent className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">Chronos Dashboard</h1>
              <StatusBadge />
            </div>

            <ConnectButton />

            {battery !== undefined && (
              <p className="text-sm">Battery: {battery}%</p>
            )}

            <BrightnessSlider />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
