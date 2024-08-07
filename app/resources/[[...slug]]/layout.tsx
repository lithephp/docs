import { Leftbar } from "@/components/leftbar";

export default function ResourcesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-14">
      
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
