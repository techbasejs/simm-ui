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

export interface TransferListProps {
  listRight: TransferListItemProps[];
  listLeft: TransferListItemProps[];
  title?: string;
  isSubheader?: boolean;
  isShowSelectAll?: boolean;
  isShowItemPerTotal?: boolean;
}

interface IListChecked {
  left: TransferListItemProps[];
  right: TransferListItemProps[];
}

type TypeChecked = "left" | "right";

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

export const TransferList = createPolymorphicComponent<
  HTMLDivElement,
  TransferListProps
>((props, ref) => {
  const { listLeft, listRight, title, isShowSelectAll, isShowItemPerTotal } =
    props;

  const [listChecked, setListChecked] = useState<IListChecked>({
    left: [],
    right: [],
  });

  const [left, setLeft] = useState<TransferListItemProps[]>(listLeft);
  const [right, setRight] = useState<TransferListItemProps[]>(listRight);

  const isDisabled = useMemo(() => {
    return {
      left: listChecked.left.length === 0 || left.length === 0,
      right: listChecked.right.length === 0 || right.length === 0,
    };
  }, [listChecked, left, right]);

  const updateList = (
    from: TransferListItemProps[],
    to: TransferListItemProps[],
    checked: TransferListItemProps[],
  ) => {
    return [from.filter((item) => !checked.includes(item)), to.concat(checked)];
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
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

  const handleAllLeft = () => {
    setLeft(left.concat(right));
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

  const moveChecked = (from: TypeChecked, to: TypeChecked) => {
    const [newFrom, newTo] = updateList(
      from === "left" ? left : right,
      from === "left" ? right : left,
      listChecked[from],
    );
    from === "left" ? setLeft(newFrom) : setRight(newFrom);
    from === "left" ? setRight(newTo) : setLeft(newTo);
    setListChecked((prev) => ({ ...prev, [from]: [] }));
  };

  const handleCheckedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: TransferListItemProps,
    type: TypeChecked,
  ) => {
    setListChecked((prev) => ({
      ...prev,
      [type]: e.target.checked
        ? [...prev[type], item]
        : prev[type].filter((checkedItem) => checkedItem !== item),
    }));
  };

  const handleSelectAllChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: TypeChecked,
  ) => {
    setListChecked((prev) => ({
      ...prev,
      [type]: e.target.checked ? (type === "left" ? left : right) : [],
    }));
  };

  const theme = useTheme();
  return (
    <WrapperTransferList ref={ref}>
      <WrapperItemStyled theme={theme}>
        {!isShowSelectAll ? (
          <>
            <ItemStyled theme={theme}>
              <Checkbox
                disabled={left.length == 0}
                checked={
                  listChecked.left.length == left.length && left.length > 0
                }
                onChange={(e) => handleSelectAllChange(e, "left")}
                value={"ALL_LEFT"}
                label={`${isShowItemPerTotal ? listChecked.left.length + "/" + left.length : ""} ${title}`}
              />
            </ItemStyled>
            <Divider />
          </>
        ) : null}
        <WrapperListStyled theme={theme}>
          {left.map((item, index) => (
            <ItemStyled theme={theme} key={index}>
              <Checkbox
                checked={listChecked.left.includes(item)}
                value={item.value}
                onChange={(e) => handleCheckedChange(e, item, "left")}
                label={item.label}
              />
            </ItemStyled>
          ))}
        </WrapperListStyled>
      </WrapperItemStyled>
      <Stack direction="column" spacing={10}>
        {!isShowSelectAll && (
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
          onClick={() => moveChecked("left", "right")}
          disabled={isDisabled.left}
        >
          <IconChevronRight size={18} />
        </IconButton>
        {!isShowSelectAll && (
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
          onClick={() => moveChecked("right", "left")}
          disabled={isDisabled.right}
        >
          <IconChevronLeft size={18} />
        </IconButton>
      </Stack>
      <WrapperItemStyled theme={theme}>
        {!isShowSelectAll ? (
          <>
            <ItemStyled theme={theme}>
              <Checkbox
                checked={
                  listChecked.right.length == right.length && right.length > 0
                }
                value={"ALL_RIGHT"}
                disabled={right.length == 0}
                onChange={(e) => handleSelectAllChange(e, "right")}
                label={`${isShowItemPerTotal ? listChecked.right.length + "/" + right.length : ""} ${title}`}
              />
            </ItemStyled>
            <Divider />
          </>
        ) : null}
        <WrapperListStyled theme={theme}>
          {right.map((item, index) => (
            <ItemStyled theme={theme} key={index}>
              <Checkbox
                checked={listChecked.right.includes(item)}
                value={item.value}
                label={item.label}
                onChange={(e) => handleCheckedChange(e, item, "right")}
              />
            </ItemStyled>
          ))}
        </WrapperListStyled>
      </WrapperItemStyled>
    </WrapperTransferList>
  );
});
