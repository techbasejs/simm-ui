import { Fragment } from "react/jsx-runtime";
import { Link } from "../Link/Link";
import { Stack } from "../Stack";
import { ReactNode, useEffect, useState } from "react";
import { IconChevronCompactRight } from "@tabler/icons-react";

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  separator?: ReactNode;
} & React.ComponentProps<typeof Stack>;

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export const Breadcrumbs = ({
  items,
  separator = <IconChevronCompactRight />,
  ...props
}: BreadcrumbsProps) => {
  const url = window.location.href;
  const pathname = url.split("/").slice(3).join("/");
  const [breadcrumbs, setBreadcrumbs] = useState(
    items.map((item, index) => ({
      ...item,
      isActive: item.href === pathname,
      key: `breadcrumb-${index}`,
    })),
  );

  useEffect(() => {
    setBreadcrumbs(
      items.map((item, index) => ({
        ...item,
        isActive: item.href === pathname,
        key: `breadcrumb-${index}`,
      })),
    );
  }, [pathname, items]);

  return (
    <Stack direction="row" align="center" {...props}>
      {breadcrumbs.map((crumb, index) => (
        <Fragment key={crumb.key}>
          {index > 0 && separator}
          <Link
            href={crumb.href}
            passHref
            style={{
              color: crumb.isActive ? "inherit" : "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {crumb.label}
          </Link>
        </Fragment>
      ))}
    </Stack>
  );
};
