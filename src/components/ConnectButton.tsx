import { useDeviceStore } from "@/store/deviceStore";
import { Button } from "./ui/button";
import { connectChronos } from "@/lib/chronosSerial";

export default function ConnectButton() {
  const setConnected = useDeviceStore((s) => s.setConnected);

  async function handleConnect() {
    await connectChronos((data) => {
      if (data.startsWith("BATTERY")) {
        const value = Number(data.split(" ")[1]);
        useDeviceStore.getState().setBattery(value);
      }
    });

    setConnected(true);
  }

  return (
    <div>
      <Button onClick={handleConnect}> Connect Chronos</Button>
    </div>
  );
}
