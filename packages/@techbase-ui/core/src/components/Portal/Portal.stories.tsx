import Portal from "./Portal";

export default {
  component: Portal,
  title: "Misc/Portal",
  tags: ["core"],
};

export function Default() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <div>
        <Portal>
            <div>asdasd</div>
        </Portal>
      </div>
    </div>
  );
}
