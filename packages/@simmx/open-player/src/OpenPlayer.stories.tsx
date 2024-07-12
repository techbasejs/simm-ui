import { Button, Stack } from "@simm/core";
import { OpenPlayer } from "./OpenPlayer";
import { useState } from "react";

export default {
  component: OpenPlayer,
  title: "Media/OpenPlayer",
  tags: ["core"],
};

export function Default() {
  const [src, setSrc] = useState(
    "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
  );

  const changeSrc = () => {
    setSrc("https://samplelib.com/lib/preview/mp3/sample-3s.mp3");
  };

  return (
    <Stack spacing={20}>
      <OpenPlayer src={src}>
        <Stack direction="row" align="center" spacing={4}>
          <OpenPlayer.PlayButton></OpenPlayer.PlayButton>
          <OpenPlayer.TrackBar></OpenPlayer.TrackBar>
          <OpenPlayer.Timer></OpenPlayer.Timer>
        </Stack>
      </OpenPlayer>
      <Button onClick={changeSrc}>Change src</Button>
    </Stack>
  );
}
