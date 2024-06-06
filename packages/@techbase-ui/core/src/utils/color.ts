import blue from "../colors/blue";
import green from "../colors/green";
import red from "../colors/red";
import yellow from "../colors/yellow";
import { ColorType } from "../types/types";

export const getColor = (color: ColorType) => {
  switch (color) {
    case "primary": {
      return blue[700];
    }

    case "success": {
      return green[700];
    }

    case "error": {
      return red[700];
    }

    case "warning": {
      return yellow[700];
    }
    
    default: {
      return "transparent";
    }
  }
};
