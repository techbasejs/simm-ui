import styled from "@emotion/styled";
import React, { useMemo, useState } from "react";
import { useTheme } from "../../theme/useTheme";
import { UseThemeProps } from "../../theme/theme.type";
import { Box, createPolymorphicComponent } from "../Box";
import { Checkbox } from "../Checkbox";
import { Stack } from "../Stack";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";
import { Divider } from "../Divider";

interface TransferListItemProps {
  label: string;
  value: string | number;
  id?: string | number;
}
export interface TransferListProps {
  listRight: TransferListItemProps[];
  listLeft: TransferListItemProps[];
  title?: string;
  isSubheader?: boolean;
  isDisabledBtnAll?: boolean;
}

const WrapperItemStyled = styled.ul<{ theme: UseThemeProps }>(({ theme }) => ({
  fontFamily: theme.typography?.fontFamily,
  color: theme.typography?.color,
  minWidth: "200px",
}));

const ItemStyled = styled.li<{ theme: UseThemeProps }>(({ theme }) => ({
  margin: 0,
  fontSize: 16,
  fontFamily: theme.typography?.fontFamily,
  color: theme.typography?.color,
  transition: "background-color 0.3s ease-in-out",
  flexShrink: 0,
  minHeight: "32px",
  listStyleType: "none",
  ":hover": {
    backgroundColor: "#f0f0f0",
    cursor: "pointer",
  },
  "& > label": {
    minHeight: "32px",
  },
}));

const WrapperTransferList = styled.div(() => ({
  margin: 0,
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
}));

const generateRandomKey = () => {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
};

export const TransferList = createPolymorphicComponent<
  HTMLDivElement,
  TransferListProps
>((props, ref) => {
  const { listLeft, listRight, title, isDisabledBtnAll } = props;
  const [listChecked, setListChecked] = useState<{
    left: TransferListItemProps[];
    right: TransferListItemProps[];
  }>({
    left: [],
    right: [],
  });
  const [checkAllLeft, setCheckAllLeft] = useState(true);
  const [checkAllRight, setCheckAllRight] = useState(true);
  const [left, setLeft] = useState<TransferListItemProps[]>(() =>
    listLeft.map((item) => ({ ...item, id: generateRandomKey() })),
  );
  const [right, setRight] = useState<TransferListItemProps[]>(() =>
    listRight.map((item) => ({ ...item, id: generateRandomKey() })),
  );

  const isDisabled = useMemo(() => {
    return {
      left: listChecked.left.length === 0,
      right: listChecked.right.length === 0,
    };
  }, [listChecked]);

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(listChecked.left));
    setLeft((prev) => {
      return prev.filter((item) => {
        return !listChecked.left.includes(item);
      });
    });
    setListChecked((prev) => {
      return {
        ...prev,
        left: [],
      };
    });
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(listChecked.right));
    setRight((prev) => {
      return prev.filter((item) => {
        return !listChecked.right.includes(item);
      });
    });
    setListChecked((prev) => {
      return {
        ...prev,
        right: [],
      };
    });
  };

  const handleOnChangeChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: TransferListItemProps,
    type: "Left" | "Right",
  ) => {
    if (e.target.checked) {
      if (type === "Left") {
        setListChecked((prev) => {
          return {
            ...prev,
            left: [...prev.left, item],
          };
        });
      }
      if (type === "Right") {
        setListChecked((prev) => {
          return {
            ...prev,
            right: [...prev.right, item],
          };
        });
      }
    }
    if (!e.target.checked) {
      if (type === "Left") {
        setListChecked((prev) => {
          return {
            ...prev,
            left: prev.left.filter((i) => i.id !== item.id),
          };
        });
      }
      if (type === "Right") {
        setListChecked((prev) => {
          return {
            ...prev,
            right: prev.right.filter((i) => i.id !== item.id),
          };
        });
      }
    }
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const handleOnChangeAllLeftChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.checked) {
      setCheckAllLeft(false);
      setListChecked((prev) => {
        return {
          ...prev,
          left: [...left],
        };
      });
    } else {
      setCheckAllLeft(true);
      setListChecked((prev) => {
        return {
          ...prev,
          left: [],
        };
      });
    }
  };

  const handleOnChangeAllRightChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.checked) {
      setCheckAllRight(false);
      setListChecked((prev) => {
        return {
          ...prev,
          right: [...right],
        };
      });
    } else {
      setCheckAllRight(true);
      setListChecked((prev) => {
        return {
          ...prev,
          right: [],
        };
      });
    }
  };

  const theme = useTheme();
  return (
    <WrapperTransferList ref={ref}>
      <WrapperItemStyled theme={theme}>
        <ItemStyled theme={theme}>
          <Checkbox
            onChange={(e) => handleOnChangeAllLeftChecked(e)}
            value={"ALL_LEFT"}
            label={title}
          />
        </ItemStyled>
        <Divider />
        {left.map((item) => (
          <ItemStyled theme={theme} key={item.id}>
            <Checkbox
              checked={listChecked.left.some((value) => value.id === item.id)}
              value={item.value}
              onChange={(e) => handleOnChangeChecked(e, item, "Left")}
              label={item.label}
            />
          </ItemStyled>
        ))}
      </WrapperItemStyled>
      <Stack direction="column" spacing={10}>
        {!isDisabledBtnAll && (
          <IconButton
            variant="outlined"
            onClick={handleAllRight}
            disabled={checkAllLeft}
          >
            <IconChevronsRight size={18} />
          </IconButton>
        )}
        <IconButton
          variant="outlined"
          onClick={handleCheckedRight}
          disabled={isDisabled.left}
        >
          <IconChevronRight size={18} />
        </IconButton>
        {!isDisabledBtnAll && (
          <IconButton
            variant="outlined"
            onClick={handleAllLeft}
            disabled={checkAllRight}
          >
            <IconChevronsLeft size={18} />
          </IconButton>
        )}
        <IconButton
          variant="outlined"
          onClick={handleCheckedLeft}
          disabled={isDisabled.right}
        >
          <IconChevronLeft size={18} />
        </IconButton>
      </Stack>
      <WrapperItemStyled theme={theme}>
        <ItemStyled theme={theme}>
          <Checkbox
            value={"ALL_RIGHT"}
            onChange={handleOnChangeAllRightChecked}
            label={title}
          />
        </ItemStyled>
        <Divider />
        {right.map((item) => (
          <ItemStyled theme={theme} key={item.id}>
            <Checkbox
              checked={listChecked.right.some((value) => value.id === item.id)}
              value={item.value}
              label={item.label}
              onChange={(e) => handleOnChangeChecked(e, item, "Right")}
            />
          </ItemStyled>
        ))}
      </WrapperItemStyled>
    </WrapperTransferList>
  );
});
