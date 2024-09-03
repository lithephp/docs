import { buttonVariants } from "@/components/ui/button";
import { FLATTEND_ROUTES, FLATTEND_REFERENCE_ROUTES } from "@/lib/routes-config";
import { TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
        Dynamic and adaptable PHP framework for versatile web applications.
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        Lithe is a flexible and efficient PHP framework for creating robust web applications that adjust to developers needs.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/${FLATTEND_ROUTES[0].href}`}
          className={buttonVariants({
            className: "px-6 text-white rounded-2xl",
            size: "lg"
          })}
        >
          Learn Lithe
        </Link>
        <Link
          href={`/reference/${FLATTEND_REFERENCE_ROUTES[0].href}`}
          className={buttonVariants({
            className: "px-6 rounded-2xl bg-slate-100 text-zinc-950 dark:bg-neutral-900 dark:text-white transition duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-neutral-800",
            size: "lg",
          })}
        >
          API Reference
        </Link>
      </div>
      <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
        <TerminalIcon className="w-4 h-4" /> composer create-project lithephp/lithephp example-app
      </span>
    </div>
  );
}
