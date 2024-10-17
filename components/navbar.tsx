import React from 'react';
import { ModeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { FLATTEND_REFERENCE_ROUTES, FLATTEND_ROUTES, ROUTES } from "@/lib/routes-config";
import { ResourcesDropdown } from './resources-dropdown';

export const NAVLINKS = [
  {
    title: "Learn",
    href: `/docs/${FLATTEND_ROUTES[0].href}`,
  },
  {
    title: "API Reference",
    href: `/reference/${FLATTEND_REFERENCE_ROUTES[0].href}`,
  },
];

export function Navbar() {
  return (
    <nav className="border-b w-full h-16 sticky top-0 bg-inherit z-50 lg:px-2 px-3">
      <div className="sm:p-5 p-2 max-w-[1480px] mx-auto h-full flex items-center justify-between gap-2">
        <SheetLeftbar routes={ROUTES} />
        <div className="flex items-center gap-6">
          <div className="md:flex hidden">
            <Logo />
          </div>
          <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
            {NAVLINKS.map((item) => (
              <Anchor
                key={item.title + item.href}
                activeClassName="text-black dark:text-white font-semibold"
                absolute
                href={item.href}
              >
                {item.title}
              </Anchor>
            ))}
          </div>
          <ResourcesDropdown />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <Search />
            <div className="flex -space-x-1">
              <ModeToggle />
              <LanguageToggle />
              <Link
                href="https://github.com/lithephp" target='_blank'
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <img src="/favicon.ico" alt="Lithe" width="32" height="32" /> Lithe <span className='text-sm text-slate-400'>v1.x</span>
    </Link>
  );
}