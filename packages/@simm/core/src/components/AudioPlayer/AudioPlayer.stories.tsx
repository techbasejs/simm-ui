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
      <AudioPlayer></AudioPlayer>
    </Stack>
  );
}
