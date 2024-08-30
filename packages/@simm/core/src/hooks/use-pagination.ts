import React from "react";
import { useControlled } from "./use-controlled";
import {
  PaginationItemProps,
  PaginationItemType,
} from "../components/Pagination/PaginationItem";

export type UsePaginationProps = {
  boundaryCount?: number;
  componentName?: string;
  count?: number;
  defaultPage?: number;
  disabled?: boolean;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  onChange?: (
    event: React.MouseEvent<HTMLButtonElement>,
    value: number,
  ) => void;
  page?: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  siblingCount?: number;
};

export default function usePagination(props: UsePaginationProps = {}) {
  const {
    boundaryCount = 1,
    componentName = "usePagination",
    count = 1,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    page: pageProp,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    ...other
  } = props;

  const [page, setPageState] = useControlled({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: "page",
  });

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: number,
  ) => {
    if (!pageProp) {
      setPageState(value);
    }
    if (handleChange) {
      handleChange(event, value);
    }
  };

  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(
    Math.max(count - boundaryCount + 1, boundaryCount + 1),
    count,
  );

  const siblingsStart = Math.max(
    Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
    boundaryCount + 2,
  );

  const siblingsEnd = Math.min(
    Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
    count - boundaryCount - 1,
  );

  const itemList = [
    ...(showFirstButton ? ["first"] : []),
    ...(hidePrevButton ? [] : ["previous"]),
    ...startPages,
    ...(siblingsStart > boundaryCount + 2
      ? ["start-ellipsis"]
      : boundaryCount + 1 < count - boundaryCount
        ? [boundaryCount + 1]
        : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < count - boundaryCount - 1
      ? ["end-ellipsis"]
      : count - boundaryCount > boundaryCount
        ? [count - boundaryCount]
        : []),
    ...endPages,
    ...(hideNextButton ? [] : ["next"]),
    ...(showLastButton ? ["last"] : []),
  ];

  const buttonPage = (type: string) => {
    switch (type) {
      case "first":
        return 1;
      case "previous":
        return page - 1;
      case "next":
        return page + 1;
      case "last":
        return count;
      default:
        return null;
    }
  };

  const items: PaginationItemProps[] = itemList.map((item) =>
    typeof item === "number"
      ? {
          onClick: (event) => {
            handleClick(event, item);
          },
          itemType: "page" as PaginationItemType,
          page: item,
          selected: item === page,
          disabled,
          "aria-current": item === page ? "true" : undefined,
        }
      : {
          onClick: (event) => {
            handleClick(event, buttonPage(item));
          },
          itemType: item as PaginationItemType,
          page: buttonPage(item),
          selected: false,
          disabled:
            disabled ||
            (!item.includes("ellipsis") &&
              (item === "next" || item === "last" ? page >= count : page <= 1)),
        },
  );

  return {
    items,
    ...other,
  };
}
