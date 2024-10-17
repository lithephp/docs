import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { promises as fs } from "fs";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import { Stepper, StepperItem } from "@/components/markdown/stepper";

// custom components imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RoutesType } from "@/type/routes";

type MdxFrontmatter = {
  title: string;
  description: string;
};

// add custom components
const components = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Stepper, 
  StepperItem
};

function getContentPath(slug: string, category: string) {
  return path.join(process.cwd(), `/contents/${category}/${slug}.mdx`);
}


export async function getMarkdownForSlug(slug: string, category: string) {
  try {
    const contentPath = getContentPath(slug, category);
    const rawMdx = await fs.readFile(contentPath, "utf-8");
    return await compileMDX<MdxFrontmatter>({
      source: rawMdx,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            rehypeCodeTitles,
            rehypePrism,
            rehypeSlug,
            rehypeAutolinkHeadings,
          ],
          remarkPlugins: [remarkGfm],
        },
      },
      components,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getToc(slug: string, category: string) {
  const contentPath = getContentPath(slug, category);
  const rawMdx = await fs.readFile(contentPath, "utf-8");

  const headingsRegex = /^(#{2,4})\s(.+)$/gm;
  let match;
  const extractedHeadings = [];
  while ((match = headingsRegex.exec(rawMdx)) !== null) {
    const headingLevel = match[1].length;
    const headingText = match[2].trim();
    extractedHeadings.push({ level: headingLevel, text: headingText });
  }
  return extractedHeadings;
}

export function getPreviousNext(path: string, routes: RoutesType) {
  const index = routes.findIndex(({ href }) => href == path);
  return {
    prev: routes[index - 1],
    next: routes[index + 1],
  };
}

export function sluggify(text: string) {
  const slug = text.toLowerCase().replace(/\s+/g, "-");
  return slug.replace(/[^a-z0-9-]/g, "");
}
