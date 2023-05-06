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
  title: "Backoffice | Best of Python",
  description: "Manage Data from here.",
};
