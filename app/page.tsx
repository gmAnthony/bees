import Link from "next/link";
import { WeirdUnitList } from "@/components/WeirdUnitList";
import { categories } from "@/lib/units";

export default function HomePage() {
  return (
    <div className="home">
      <section className="home-hero">
        <h1 className="home-brand">How Many Bees</h1>
        <p className="home-title">
          Ordinary measurements, ridiculous units.
        </p>
        <p className="home-lede">
          Turn kilograms into bees, meters into Fruit Roll-Ups, and days into
          Martian sols. Pick a category — or jump straight to a weird unit.
        </p>
        <ul className="category-links">
          {categories.map((category) => (
            <li key={category.id}>
              <Link className="category-link" href={category.href}>
                {category.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Or pick a weird unit</h2>
        <p className="section-lede">
          Each link opens the converter already aimed at that unit.
        </p>
        <WeirdUnitList />
      </section>

      <footer className="home-credit">
        <p>
          Inspired by the{" "}
          <a
            href="https://jcode.me/how-much-does-a-bee-weigh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            jcode.me bee bot
          </a>{" "}
          that turned kilograms into bees.
        </p>
        <p>
          Feedback welcome:{" "}
          <a href="mailto:gm.anthony@gmail.com">gm.anthony@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}
