import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Mass",
  description: "Convert mass into bees, Quarter Pounders, and LeBron Jameses.",
};

type PageProps = {
  searchParams: Promise<{ to?: string }>;
};

export default async function MassPage({ searchParams }: PageProps) {
  const { to } = await searchParams;
  return <CategoryPage categoryId="mass" to={to} />;
}
