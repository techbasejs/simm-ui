import { Box } from "../Box";
import { Divider, DividerProps } from "./Divider";

export default {
  component: Divider,
  title: "DATA DISPLAY/Divider",
  tags: ["autodocs"],
} as DividerProps;

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
      <Divider />
      <div
        style={{
          padding: "20px",
        }}
      >
        Trash
      </div>
      <Divider />
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
      <Divider orientation="vertical" />

      <div
        style={{
          padding: "20px",
        }}
      >
        C
      </div>
      <Divider orientation="vertical" />
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
    <Box
      sx={{
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
      <Divider labelPosition="center" label="CENTER" />
      <div
        style={{
          padding: "20px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>

      <Divider labelPosition="left" label="LEFT" />
      <div
        style={{
          padding: "20px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <Divider labelPosition="right" label="LEFT" />
      <div
        style={{
          padding: "20px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </Box>
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
        <Box
          as={Divider}
          size="lg"
          sx={{ borderColor: "#204bdb", borderStyle: "dashed" }}
        />
        <div
          style={{
            padding: "20px",
          }}
        >
          Drafts
        </div>
        <Divider size="xl" color="warning" />
        <div
          style={{
            padding: "20px",
          }}
        >
          Trash
        </div>
        <Divider borderStyle="dashed" color="success" />
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
        <Divider orientation="vertical" />

        <div
          style={{
            padding: "20px",
          }}
        >
          B
        </div>
        <Divider orientation="vertical" size="xl" />

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
        <Box as={Divider} label="CENTER" size="lg" sx={{ color: "#204bdb" }} />
        <div
          style={{
            padding: "20px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <Divider labelPosition="left" size="xl" label="LEFT" color="success" />
        <div
          style={{
            padding: "20px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <Divider
          labelPosition="right"
          borderStyle="dashed"
          label="RIGHT"
          color="error"
        />
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
