import { Metadata } from "next";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

// * Metadata - head tag
export const metadata: Metadata = {
  title: "Projects | Best of Python",
  description:
    "Find out what's trending, or get inspired by open source projects.",
};
