import { Table, TableColumn } from "./Table";

export default {
  component: Table,
  title: "Typography/Table",
  tags: ["core"],
};

export function Default() {
  const columns: TableColumn[] = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
    },
    {
      field: "age1",
    },
    {
      field: "age2",
    },
    {
      field: "age3",
    },
    {
      field: "age4",
    },
    {
      width: 90,
      field: "fullName",
      headerName: "Full name",
      sortable: false,
      fixedRight: true,
    },
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <div>
        <Table columns={columns} rows={rows}></Table>
      </div>
    </div>
  );
}
