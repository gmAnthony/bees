import Link from "next/link";
import { categories, weirdUnits } from "@/lib/units";

export function WeirdUnitList() {
  return (
    <div className="weird-list">
      {categories.map((category) => (
        <section key={category.id} className="weird-group">
          <h3 className="weird-group-title">
            <Link href={category.href}>{category.label}</Link>
          </h3>
          <ul className="weird-group-items">
            {weirdUnits(category).map((unit) => (
              <li key={unit.id}>
                <Link href={`${category.href}?to=${unit.id}`}>{unit.plural}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
