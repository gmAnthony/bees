"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FactCard } from "@/components/FactCard";
import {
  type CategoryId,
  convert,
  formatResult,
  getCategory,
  getUnit,
  standardUnits,
  weirdUnits,
} from "@/lib/units";

type ConverterProps = {
  categoryId: CategoryId;
  initialTo?: string;
};

export function Converter({ categoryId, initialTo }: ConverterProps) {
  const category = getCategory(categoryId);
  const standards = standardUnits(category);
  const weirds = weirdUnits(category);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const toFromQuery = searchParams.get("to") ?? initialTo;
  const toId =
    toFromQuery && weirds.some((u) => u.id === toFromQuery)
      ? toFromQuery
      : category.defaultTo;

  const [value, setValue] = useState("1");
  const [fromId, setFromId] = useState(category.defaultFrom);

  const fromUnit = getUnit(category, fromId) ?? standards[0]!;
  const toUnit = getUnit(category, toId) ?? weirds[0]!;

  const parsed = Number(value);
  const result =
    value.trim() === "" || !Number.isFinite(parsed)
      ? null
      : convert(parsed, fromUnit, toUnit);

  function updateTo(nextTo: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("to", nextTo);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="converter">
      <div className="converter-grid">
        <label className="field">
          <span className="field-label">Amount</span>
          <input
            className="field-input"
            type="number"
            inputMode="decimal"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter a number"
            min={0}
          />
        </label>

        <label className="field">
          <span className="field-label">From</span>
          <select
            className="field-select"
            value={fromId}
            onChange={(e) => setFromId(e.target.value)}
          >
            {standards.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.plural}
              </option>
            ))}
          </select>
        </label>

        <div className="converter-result" aria-live="polite">
          <span className="field-label">Equals</span>
          <p className="result-number">
            {result === null ? "—" : formatResult(result)}
          </p>
        </div>

        <label className="field">
          <span className="field-label">To</span>
          <select
            className="field-select"
            value={toId}
            onChange={(e) => updateTo(e.target.value)}
          >
            {weirds.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.plural}
              </option>
            ))}
          </select>
        </label>
      </div>

      <FactCard fact={toUnit.fact} unitLabel={toUnit.plural} />
    </div>
  );
}
