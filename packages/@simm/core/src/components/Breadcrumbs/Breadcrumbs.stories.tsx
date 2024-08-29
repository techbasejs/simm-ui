// packages/@simm/core/src/components/Breadcrumbs/Breadcrumbs.stories.tsx
import { IconChevronCompactRight } from "@tabler/icons-react";
import { Breadcrumbs, BreadcrumbsProps } from "./Breadcrumbs";

export default {
  component: Breadcrumbs,
  title: "Navigation/Breadcrumbs",
  tags: ["core"],
};

export function Default() {
  return (
    <Breadcrumbs
      items={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
