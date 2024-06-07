import styled from "@emotion/styled";
import React from "react";

export interface TableColumn {
  field: string;
  headerName?: React.ReactNode;
  width?: number;
  sortable?: boolean;
  fixedLeft?: boolean;
  fixedRight?: boolean;
}

export interface TableProps {
  columns?: TableColumn[];
  rows?: { [key: string]: any }[];
  bordered?: boolean;
}

interface TableCellProps {
  fixedLeft?: boolean;
  fixedRight?: boolean;
}

interface TableHeaderCellProps extends TableCellProps {
  width?: number;
  fixedHeader?: boolean;
}

const TableWrapper = styled.div({
  overflowX: "auto",
  position: "relative",
  backgroundColor: "#fff",
  maxHeight: "400px",
  //   maxWidth: "500px",
});

const TableStyled = styled.table({
  //   borderTop: "1px solid #dee2e6",
  borderBottom: "none",
  borderSpacing: 0,
  width: "100%",
  minWidth: "600px",
  tableLayout: "fixed",
});

const TableRowStyled = styled.tr({});

const TableHeadStyled = styled.th<TableHeaderCellProps>((props) => ({
  boxSizing: "border-box",
  borderBottom: "1px solid #dee2e6",
  borderRight: "1px solid #dee2e6",
  borderTop: "1px solid #dee2e6",
  padding: "15px",
  ":first-of-type": {
    borderLeft: "1px solid #dee2e6",
  },

  fontSize: "16px",
  textAlign: "left",
  overflow: "hidden",
  textOverflow: "ellipsis",
  ...((props.fixedLeft || props.fixedRight || props.fixedHeader) && {
    position: "sticky",
    ...(props.fixedLeft && { left: 1 }),
    ...(props.fixedRight && { right: 0 }),
    ...(props.fixedHeader && { top: 0, zIndex: 1000 }),
    backgroundColor: "#fff",
    // borderRight: "none",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  }),
  ...(props.width && { width: props.width }),
}));

const TableCellStyled = styled.td<TableCellProps>((props) => {
  return {
    boxSizing: "border-box",
    borderBottom: "1px solid #dee2e6",
    borderRight: "1px solid #dee2e6",

    padding: "15px",
    ":first-of-type": {
      borderLeft: "1px solid #dee2e6",
    },
    fontSize: "14px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    ...((props.fixedLeft || props.fixedRight) && {
      position: "sticky",
      ...(props.fixedLeft && { left: 1 }),
      ...(props.fixedRight && { right: 0 }),
      backgroundColor: "#fff",
      zIndex: 999,
      // borderRight: "none",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    }),
  };
});

export const Table = ({ rows, columns }: TableProps) => {
  return (
    <TableWrapper>
      <TableStyled>
        <thead>
          <TableRowStyled>
            {columns?.map((column) => (
              <TableHeadStyled
                key={column.field}
                width={column.width}
                fixedLeft={column.fixedLeft}
                fixedRight={column.fixedRight}
              >
                {column.headerName || column.field}
              </TableHeadStyled>
            ))}
          </TableRowStyled>
        </thead>
        <tbody>
          {rows?.map((row) => (
            <TableRowStyled key={row.id}>
              {columns?.map((column) => (
                <TableCellStyled
                  key={column.field + row.id}
                  fixedLeft={column.fixedLeft}
                  fixedRight={column.fixedRight}
                >
                  {row[column.field]}
                </TableCellStyled>
              ))}
            </TableRowStyled>
          ))}
        </tbody>
      </TableStyled>
    </TableWrapper>
  );
};
