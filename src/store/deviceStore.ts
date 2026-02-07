import type { ChronosStatus } from "@/lib/types";
import { create } from "zustand";

type DeviceStore = {
  status: ChronosStatus;
  setConnected: (v: boolean) => void;
  setBattery: (v: number) => void;
};

export const useDeviceStore = create<DeviceStore>((set) => ({
  status: { connected: false },
  setConnected: (v) => set((s) => ({ status: { ...s.status, connected: v } })),
  setBattery: (v) => set((s) => ({ status: { ...s.status, battery: v } })),
}));
