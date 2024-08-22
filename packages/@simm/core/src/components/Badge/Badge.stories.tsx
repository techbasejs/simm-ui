import { useState } from "react";
import { Badge } from "./Badge";
import { Avatar } from "../Avatar";
import { IconButton } from "../IconButton";
import { IconDownload } from "@tabler/icons-react";

export default {
  component: Badge,
  title: "Misc/Badge",
  tags: ["core"],
};

export function Default() {
  return (
    <>
      <Badge
       variant={"outlined"}
       color={"secondary"}
       size= {"md"}
       shape= {"rectangle"}
       placement= {"top-right"}
       showOutline= {false}
       isInvisible= {false}
      ></Badge>
    </>
  );
}
