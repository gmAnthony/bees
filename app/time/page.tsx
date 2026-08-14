import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Time",
  description:
    "Convert time into mayfly lifespans, moon cycles, hummingbird flaps, mooches, and sols.",
};

type PageProps = {
  searchParams: Promise<{ to?: string }>;
};

export default async function TimePage({ searchParams }: PageProps) {
  const { to } = await searchParams;
  return <CategoryPage categoryId="time" to={to} />;
}
