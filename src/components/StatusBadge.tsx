import { Badge } from "@/components/ui/badge";
import { useDeviceStore } from "@/store/deviceStore";

export default function StatusBadge() {
  const connected = useDeviceStore((s) => s.status.connected);

  return (
    <Badge variant={connected ? "default" : "secondary"}>
      {connected ? "Connected" : "Disconnected"}
    </Badge>
  );
}
