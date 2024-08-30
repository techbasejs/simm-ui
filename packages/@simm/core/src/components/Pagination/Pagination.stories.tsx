import { Stack } from "../Stack";
import { Text } from "../Text";
import { Pagination } from "./Pagination";

export default {
  component: Pagination,
  title: "Layouts/Pagination",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack>
      <Text>Basic Pagination</Text>
      <Stack spacing={8} mt={8} mb={12}>
        <Pagination count={20} />
      </Stack>

      <Text>Outlined Item</Text>
      <Stack spacing={8} mt={8} mb={12}>
        <Pagination
          variant="outline"
          color="info"
          shape="circular"
          count={20}
        />
      </Stack>

      <Text>Square Pagination</Text>
      <Stack spacing={8} mt={8} mb={12}>
        <Pagination
          variant="outline"
          color="success"
          shape="square"
          count={20}
        />
      </Stack>

      <Text>Custom Item Size</Text>
      <Stack spacing={8} mt={8} mb={12}>
        <Pagination
          variant="outline"
          color="success"
          count={100}
          size="small"
        />
        <Pagination
          variant="outline"
          color="success"
          count={100}
          size="medium"
        />
        <Pagination
          variant="outline"
          color="success"
          count={100}
          size="large"
        />
      </Stack>

      <Text>Boundary count</Text>
      <Stack spacing={8} mt={8}>
        <Pagination
          color="error"
          count={100}
          size="large"
          boundaryCount={5}
          defaultPage={67}
        />
      </Stack>

      <Text>Sibling count</Text>
      <Stack spacing={8} mt={8}>
        <Pagination
          color="error"
          count={100}
          size="large"
          siblingCount={5}
          defaultPage={12}
        />
      </Stack>

      <Text>Disabled</Text>
      <Stack spacing={8} mt={8}>
        <Pagination color="error" count={100} disabled size="large" />
      </Stack>

      <Text>Custom Button</Text>
      <Stack spacing={8} mt={8}>
        <Pagination color="error" count={100} hideNextButton hidePrevButton />
        <Pagination
          variant="outline"
          color="warning"
          shape="square"
          showFirstButton
          showLastButton
          count={100}
        />
      </Stack>
    </Stack>
  );
}
