import { Paper } from "./Paper";

export default {
  component: Paper,
  title: "Misc/Paper",
  tags: ["core"],
};

export function Default() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <div>
        <Paper>xxxx</Paper>
      </div>
    </div>
  );
}
