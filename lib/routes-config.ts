import { RouteInterface } from "@/interfaces/route";

export const ROUTES: Array<RouteInterface> = [
  {
    title: "Getting Started",
    href: "get-started",
    items: [
      {
        title: "Introduction",
        href: "/introduction",
      },
      {
        title: "Installation",
        href: "/installation",
      },
    ],
  },
  {
    title: "The Basics",
    href: "the-basics",
    items: [
      {
        title: "Creating an Application",
        href: "/creating-an-application",
      },
      {
        title: "Routing",
        href: "/routing",
      },
      {
        title: "Middleware",
        href: "/middleware",
      },
      {
        title: "Controllers",
        href: "/controllers",
      },
      {
        title: "Request",
        href: "/request",
      },
      {
        title: "Response",
        href: "/response",
      },
      {
        title: "Template Engines",
        href: "/template-engines",
      },
      {
        title: "Validation",
        href: "/validation",
      },
      {
        title: "File Uploads",
        href: "/file-uploads",
      },
    ],
  },
  {
    title: "Digging Deep",
    href: "digging-deep",
    items: [
      {
        title: "Log",
        href: "/log",
      },
      {
        title: "HTTP Exceptions",
        href: "/http-exceptions"
      },
    ],
  },
  {
    title: "Database",
    href: "database",
    items: [
      {
        title: "Integration",
        href: "/integration",
      },
      {
        title: "Migrations",
        href: "/migrations",
      },
      {
        title: "Models",
        href: "/models",
      },
      {
        title: "Seeders",
        href: "/seeders",
      },
    ],
  },
  {
    title: "Next steps",
    href: "next-steps",
    items: [
      {
        title: "Next steps",
        href: "/next-steps",
      },
    ],
  },
];

export const REFERENCE_ROUTES: Array<RouteInterface> = [
  {
    title: "Lithe@1.x",
    href: "lithe",
    items: [
      {
        title: "App",
        href: "/app",
      },
      {
        title: "Line",
        href: "/line",
      },
      {
        title: "Manager",
        href: "/manager",
      },
      {
        title: "Request",
        href: "/request",
      },
      {
        title: "Response",
        href: "/response",
      },
      {
        title: "Router",
        href: "/router",
      },
    ],
  },
];

export const FLATTEND_ROUTES = flattendRoutes(ROUTES);

export const FLATTEND_REFERENCE_ROUTES = flattendRoutes(REFERENCE_ROUTES);

function flattendRoutes(routes: Array<RouteInterface>) {
  return routes.map(({ href, items }) => {
    return items.map((link) => {
      return {
        title: link.title,
        href: href + link.href,
        disabled: link.disabled,
      };
    });
  }).flat();
}
