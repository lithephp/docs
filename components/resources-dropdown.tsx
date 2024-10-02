"use client";

import * as React from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Anchor from "./anchor";

const NAVLINKS_RESOURCES = [
    {
        title: "Middleware",
        href: '/resources/middleware',
    },
    {
        title: "Modules",
        href: '/resources/modules',
    },
];

export function ResourcesDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
                <span>Resources</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {NAVLINKS_RESOURCES.map((item) => (
                    <Anchor
                        key={item.title + item.href}
                        activeClassName="text-black dark:text-white font-semibold"
                        absolute
                        href={item.href}
                    >
                        <DropdownMenuItem key={item.title + item.href}>
                            {item.title}
                        </DropdownMenuItem>
                    </Anchor>

                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
