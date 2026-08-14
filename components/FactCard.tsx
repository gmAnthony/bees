import type { UnitFact } from "@/lib/units";

type FactCardProps = {
  fact?: UnitFact;
  unitLabel: string;
};

export function FactCard({ fact, unitLabel }: FactCardProps) {
  if (!fact) return null;

  return (
    <aside className="fact-note" aria-label={`Notes about ${unitLabel}`}>
      <p className="fact-note-label">A note on {unitLabel}</p>
      <p className="fact-note-text">{fact.text}</p>
      {fact.source ? (
        <p className="fact-note-source">
          Source:{" "}
          <a href={fact.source.href} target="_blank" rel="noopener noreferrer">
            {fact.source.label}
          </a>
        </p>
      ) : null}
    </aside>
  );
}
