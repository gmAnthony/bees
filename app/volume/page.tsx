import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Volume",
  description: "Convert volume into mouthfuls, eggs, golf balls, and Marus.",
};

type PageProps = {
  searchParams: Promise<{ to?: string }>;
};

export default async function VolumePage({ searchParams }: PageProps) {
  const { to } = await searchParams;
  return <CategoryPage categoryId="volume" to={to} />;
}
