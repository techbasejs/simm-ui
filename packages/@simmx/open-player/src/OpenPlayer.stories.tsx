import { Stack } from "@simm/core";
import { OpenPlayer } from "./OpenPlayer";

export default {
  component: OpenPlayer,
  title: "Media/OpenPlayer",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack spacing={20}>
      <OpenPlayer>
        <Stack direction="row" align="center" spacing={4}>
          <OpenPlayer.PlayButton></OpenPlayer.PlayButton>
          <OpenPlayer.TrackBar></OpenPlayer.TrackBar>
          <OpenPlayer.Timer></OpenPlayer.Timer>
        </Stack>
      </OpenPlayer>
    </Stack>
  );
}
