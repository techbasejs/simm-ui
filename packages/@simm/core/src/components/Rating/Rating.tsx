import { IconStarFilled } from "@tabler/icons-react";
import { Stack } from "../Stack/Stack";
import styled from "@emotion/styled";
import { useRef, useState } from "react";

const RatingSymbolGroupStyled = styled.label(() => ({
  cursor: "pointer",
}));

const RatingInputStyled = styled.input({
  display: "none",
  ":checked ~ svg": {
    fill: "#f08c00",
  },
});

const RatingIconStyled = styled(IconStarFilled)({
  transition: "all 200ms",
  ":hover": {
    transform: "scale(1.1)",
  },
});

export type RatingProps = {
  defaultValue?: number;
  count?: number;
  highlightSelectedOnly?: boolean;
};

export const Rating = (props: RatingProps) => {
  const { defaultValue, count, highlightSelectedOnly } = props;
  const _count = count || 5;

  const value = useRef(defaultValue || 0);

  if (value.current > _count) {
    throw new Error("Rating: Out of range");
  }

  const [currentValue, setCurrentValue] = useState(value.current);

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLLabelElement>,
    index: number,
  ) => {
    setCurrentValue(index + 1);
  };

  const handleMouseLeave = () => {
    setCurrentValue(value.current);
  };

  const handleClick = (index: number) => {
    value.current = index + 1;
  };

  const handleInputChange = () => {};
  const items = Array(_count)
    .fill(0)
    .map((_, index) => {
      return (
        <RatingSymbolGroupStyled
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={(e) => handleMouseEnter(e, index)}
          onMouseLeave={(e) => handleMouseLeave()}
        >
          <RatingInputStyled
            type="radio"
            onChange={handleInputChange}
            checked={
              highlightSelectedOnly
                ? currentValue === index + 1
                : currentValue > index
            }
          />
          <RatingIconStyled size={18} color="#696969" />
        </RatingSymbolGroupStyled>
      );
    });
  return <Stack direction="row">{items}</Stack>;
};
