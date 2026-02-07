let port: SerialPort | null = null;
let writer: WritableStreamDefaultWriter<Uint8Array> | null = null;
let reader: ReadableStreamDefaultReader<Uint8Array> | null = null;

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export async function connectChronos(onData: (data: string) => void) {
  if (!("serial" in navigator)) {
    throw new Error("Web Serial not supported");
  }

  port = await navigator.serial.requestPort();
  await port.open({ baudRate: 115200 });

  writer = port.writable!.getWriter();
  reader = port.readable!.getReader();

  readLoop(onData);
}

export async function readLoop(onData: (data: string) => void) {
  if (!reader) return;

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    if (value) onData(decoder.decode(value));
  }
}

export async function sendCommand(cmd: string) {
  if (!writer) return;

  await writer.write(encoder.encode(cmd + "\n"));
}

export async function disconnectChronos() {
  await writer?.close();
  await reader?.cancel();
  await port?.close();
}
