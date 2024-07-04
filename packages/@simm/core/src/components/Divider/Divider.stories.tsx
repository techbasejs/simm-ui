import { Divider } from "./Divider";

export default {
  component: Divider,
  title: "DATA DISPLAY/Divider",
  tags: ["autodocs"],
};

export function Default() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #0000001f",
        borderColor: "divider",
        borderRadius: 1,
        backgroundColor: "#fff",
        width: "500px",
        margin: "0 auto",
        color: "#0000099",
      }}
    >
      <div
        style={{
          padding: "20px",
        }}
      >
        Inbox
      </div>
      <Divider />
      <div
        style={{
          padding: "20px",
        }}
      >
        Drafts
      </div>
      <Divider margin={"0 30px"} />
      <div
        style={{
          padding: "20px",
        }}
      >
        Trash
      </div>
      <Divider margin={"0 0 0 30px"} />
      <div
        style={{
          padding: "20px",
        }}
      >
        Spam
      </div>
    </div>
  );
}
export function vertical() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #0000001f",
        borderColor: "divider",
        borderRadius: 1,
        backgroundColor: "#fff",
        width: "203px",
        margin: "0 auto",
        color: "#1A1E23",
      }}
    >
      <div
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        A
      </div>
      <Divider orientation="vertical" />

      <div
        style={{
          padding: "20px",
        }}
      >
        B
      </div>
      <Divider orientation="vertical" margin={"0 0 20px"} />

      <div
        style={{
          padding: "20px",
        }}
      >
        C
      </div>
      <Divider orientation="vertical" margin={"20px 0 0"} />
      <div
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        D
      </div>
    </div>
  );
}
export function horizontalWithChildren() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #f6f6f6",
        backgroundColor: "#fff",
        color: "#0000099",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          padding: "20px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <Divider textAlign="center">
        {" "}
        <a style={{ margin: "0 20px" }}>CENTER</a>
      </Divider>
      <div
        style={{
          padding: "20px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>

      <Divider textAlign="left">
        <a style={{ margin: "0 20px" }}>LEFT</a>
      </Divider>
      <div
        style={{
          padding: "20px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <Divider textAlign="right">
        <a style={{ margin: "0 20px" }}>RIGHT</a>
      </Divider>
      <div
        style={{
          padding: "20px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  );
}
export function custom() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #0000001f",
          borderColor: "divider",
          borderRadius: 1,
          backgroundColor: "#fff",
          width: "500px",
          margin: "0 auto",
          color: "#0000099",
        }}
      >
        <div
          style={{
            padding: "20px",
          }}
        >
          Inbox
        </div>
        <Divider color="red" />
        <div
          style={{
            padding: "20px",
          }}
        >
          Drafts
        </div>
        <Divider borderWidth="5px" />
        <div
          style={{
            padding: "20px",
          }}
        >
          Trash
        </div>
        <Divider borderStyle="dashed" />
        <div
          style={{
            padding: "20px",
          }}
        >
          Spam
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #0000001f",
          borderColor: "divider",
          borderRadius: 1,
          backgroundColor: "#fff",
          width: "203px",
          margin: "0 auto",
          color: "#1A1E23",
        }}
      >
        <div
          style={{
            padding: "20px",
            textAlign: "center",
          }}
        >
          A
        </div>
        <Divider orientation="vertical" color="red" />

        <div
          style={{
            padding: "20px",
          }}
        >
          B
        </div>
        <Divider orientation="vertical" borderWidth="5px" />

        <div
          style={{
            padding: "20px",
          }}
        >
          C
        </div>
        <Divider orientation="vertical" borderStyle="dashed" />
        <div
          style={{
            padding: "20px",
            textAlign: "center",
          }}
        >
          D
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #f6f6f6",
          backgroundColor: "#fff",
          color: "#0000099",
          margin: "0 auto",
          width: "500px",
        }}
      >
        <div
          style={{
            padding: "20px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <Divider textAlign="center" color="red">
          <a style={{ margin: "0 20px" }}>CENTER</a>
        </Divider>
        <div
          style={{
            padding: "20px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <Divider textAlign="left" borderWidth="5px">
          <a style={{ margin: "0 20px" }}>LEFT</a>
        </Divider>
        <div
          style={{
            padding: "20px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <Divider textAlign="right" borderStyle="dashed">
          <a style={{ margin: "0 20px" }}>RIGHT</a>
        </Divider>
        <div
          style={{
            padding: "20px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  );
}
