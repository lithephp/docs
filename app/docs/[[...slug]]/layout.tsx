import { Leftbar } from "@/components/leftbar";
import { ROUTES } from "@/lib/routes-config";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-14">
      <Leftbar routes={ROUTES} baseRoute="docs" />
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
