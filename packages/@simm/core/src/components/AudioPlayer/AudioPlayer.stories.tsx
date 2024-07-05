import { Stack } from "../Stack/Stack";
import { AudioPlayer } from "./AudioPlayer";

export default {
  component: AudioPlayer,
  title: "Media/AudioPlayer",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack>
      <AudioPlayer src="https://samplelib.com/lib/preview/mp3/sample-15s.mp3"></AudioPlayer>
    </Stack>
  );
}
