import { Suspense } from "react";
import { Converter } from "@/components/Converter";
import type { CategoryId } from "@/lib/units";
import { getCategory } from "@/lib/units";

type CategoryPageProps = {
  categoryId: CategoryId;
  to?: string;
};

export function CategoryPage({ categoryId, to }: CategoryPageProps) {
  const category = getCategory(categoryId);

  return (
    <div className="page-shell">
      <div className="page-intro">
        <p className="eyebrow">{category.label}</p>
        <h1 className="page-title">How many…?</h1>
        <p className="page-lede">
          Convert everyday {category.label.toLowerCase()} into delightfully
          useless units.
        </p>
      </div>
      <Suspense fallback={<div className="converter-fallback">Loading converter…</div>}>
        <Converter categoryId={categoryId} initialTo={to} />
      </Suspense>
    </div>
  );
}
