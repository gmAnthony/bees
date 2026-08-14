import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Length",
  description:
    "Convert length into football fields, Fruit Roll-Ups, and microeverests.",
};

type PageProps = {
  searchParams: Promise<{ to?: string }>;
};

export default async function LengthPage({ searchParams }: PageProps) {
  const { to } = await searchParams;
  return <CategoryPage categoryId="length" to={to} />;
}
