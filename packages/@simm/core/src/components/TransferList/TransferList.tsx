import styled from "@emotion/styled";
import React, { useMemo, useState } from "react";
import { useTheme } from "../../theme/useTheme";
import { UseThemeProps } from "../../theme/theme.type";
import { createPolymorphicComponent } from "../Box";
import { Checkbox } from "../Checkbox";
import { Stack } from "../Stack";
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
}

interface ItemPropsI extends TransferListItemProps {
  id?: string | number;
}

export interface TransferListProps {
  listRight: TransferListItemProps[];
  listLeft: TransferListItemProps[];
  title?: string;
  isSubheader?: boolean;
  isDisabledBtnAll?: boolean;
}

const WrapperItemStyled = styled.div<{ theme: UseThemeProps }>(({ theme }) => ({
  fontFamily: theme.typography?.fontFamily,
  color: theme.typography?.color,
  overflow: "auto",
  border: `1px solid ${theme.pallete?.divider}`,
}));

const WrapperListStyled = styled.div<{ theme: UseThemeProps }>(({ theme }) => ({
  fontFamily: theme.typography?.fontFamily,
  color: theme.typography?.color,
  minWidth: "200px",
  minHeight: "230px",
  overflow: "auto",
}));

const ItemStyled = styled.div<{ theme: UseThemeProps }>(({ theme }) => ({
  margin: 0,
  fontSize: 16,
  fontFamily: theme.typography?.fontFamily,
  color: theme.typography?.color,
  transition: "background-color 0.3s ease-in-out",
  flexShrink: 0,
  minHeight: "32px",
  listStyleType: "none",
  ":hover": {
    backgroundColor: "#f1f5f9",
  },
  "& > label": {
    minHeight: "32px",
    padding: "10px",
  },
}));

const WrapperTransferList = styled.div(() => ({
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const createUuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
    const r = (new Date().getTime() + Math.random() * 16) % 16 | 0,
      v = a == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const TransferList = createPolymorphicComponent<
  HTMLDivElement,
  TransferListProps
>((props, ref) => {
  const { listLeft, listRight, title, isDisabledBtnAll } = props;
  const [listChecked, setListChecked] = useState<{
    left: ItemPropsI[];
    right: ItemPropsI[];
  }>({
    left: [],
    right: [],
  });
  const [checkAllLeft, setCheckAllLeft] = useState(true);
  const [checkAllRight, setCheckAllRight] = useState(true);
  const [left, setLeft] = useState<ItemPropsI[]>(() =>
    listLeft.map((item) => ({ ...item, id: createUuid() })),
  );
  const [right, setRight] = useState<ItemPropsI[]>(() =>
    listRight.map((item) => ({ ...item, id: createUuid() })),
  );

  const isDisabled = useMemo(() => {
    return {
      left: listChecked.left.length === 0 || left.length === 0,
      right: listChecked.right.length === 0 || right.length === 0,
    };
  }, [listChecked, left, right]);

  const handleAllRight = () => {
    setRight(right.concat(left));
    setCheckAllRight(true);
    setCheckAllLeft(true);
    Promise.all([
      setLeft([]),
      setListChecked((prev) => {
        return {
          ...prev,
          left: [],
        };
      }),
    ]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(listChecked.left));
    setCheckAllRight(true);
    setCheckAllLeft(true);

    Promise.all([
      setLeft((prev) => {
        return prev.filter((item) => {
          return !listChecked.left.includes(item);
        });
      }),
      setListChecked((prev) => {
        return {
          ...prev,
          left: [],
        };
      }),
    ]);
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(listChecked.right));
    setCheckAllRight(true);
    setCheckAllLeft(true);
    Promise.all([
      setRight((prev) => {
        return prev.filter((item) => {
          return !listChecked.right.includes(item);
        });
      }),
      setListChecked((prev) => {
        return {
          ...prev,
          right: [],
        };
      }),
    ]);
  };

  const handleOnChangeChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: ItemPropsI,
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
    setCheckAllLeft(true);
    setCheckAllRight(true);
    Promise.all([
      setRight([]),
      setListChecked((prev) => {
        return {
          ...prev,
          right: [],
        };
      }),
    ]);
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
        {!isDisabledBtnAll && (
          <>
            <ItemStyled theme={theme}>
              <Checkbox
                disabled={left.length == 0}
                checked={
                  !checkAllLeft ||
                  (listChecked.left.length == left.length && left.length > 0)
                }
                onChange={(e) => handleOnChangeAllLeftChecked(e)}
                value={"ALL_LEFT"}
                label={`${listChecked.left.length}/${left.length} ${title}`}
              />
            </ItemStyled>
            <Divider />
          </>
        )}
        <WrapperListStyled theme={theme}>
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
        </WrapperListStyled>
      </WrapperItemStyled>
      <Stack direction="column" spacing={10}>
        {!isDisabledBtnAll && (
          <IconButton
            variant="outlined"
            onClick={handleAllRight}
            disabled={
              !(listChecked.left.length == left.length && left.length > 0)
            }
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
            disabled={
              !(listChecked.right.length == right.length && right.length > 0)
            }
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
        {!isDisabledBtnAll && (
          <>
            <ItemStyled theme={theme}>
              <Checkbox
                checked={
                  (!checkAllRight ||
                    listChecked.right.length == right.length) &&
                  right.length > 0
                }
                value={"ALL_RIGHT"}
                disabled={right.length == 0}
                onChange={handleOnChangeAllRightChecked}
                label={`${listChecked.right.length}/${right.length} ${title}`}
              />
            </ItemStyled>
            <Divider />
          </>
        )}
        <WrapperListStyled theme={theme}>
          {right.map((item) => (
            <ItemStyled theme={theme} key={item.id}>
              <Checkbox
                checked={listChecked.right.some(
                  (value) => value.id === item.id,
                )}
                value={item.value}
                label={item.label}
                onChange={(e) => handleOnChangeChecked(e, item, "Right")}
              />
            </ItemStyled>
          ))}
        </WrapperListStyled>
      </WrapperItemStyled>
    </WrapperTransferList>
  );
});
