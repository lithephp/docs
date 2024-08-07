import { Leftbar } from "@/components/leftbar";
import { REFERENCE_ROUTES } from "@/lib/routes-config";

export default function ReferenceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-14">
      <Leftbar routes={REFERENCE_ROUTES} baseRoute="reference" />
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
