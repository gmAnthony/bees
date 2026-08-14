export type UnitKind = "standard" | "weird";

export type UnitFact = {
  text: string;
  source?: { label: string; href: string };
};

export type Unit = {
  id: string;
  label: string;
  plural: string;
  toBase: number;
  kind: UnitKind;
  fact?: UnitFact;
};

export type CategoryId = "mass" | "length" | "volume" | "time";

export type Category = {
  id: CategoryId;
  label: string;
  href: string;
  baseLabel: string;
  defaultFrom: string;
  defaultTo: string;
  units: Unit[];
};

/** Preserve convert-units fork anchors: lb↔g via 453.59237, ft↔m via 3.28084, fl-oz↔L via 33.8140226 */
const LB_TO_KG = 0.45359237;
const FT_TO_M = 1 / 3.28084;
const FLOZ_TO_L = 1 / 33.8140226;

export function convert(value: number, from: Unit, to: Unit): number {
  return (value * from.toBase) / to.toBase;
}

export function formatResult(value: number): string {
  if (!Number.isFinite(value)) return "—";
  const abs = Math.abs(value);
  if (abs === 0) return "0";
  if (abs >= 1e9 || (abs > 0 && abs < 1e-4)) {
    return value.toExponential(4);
  }
  if (abs >= 1000) {
    return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
  }
  if (abs >= 1) {
    return value.toLocaleString(undefined, {
      maximumFractionDigits: 4,
      minimumFractionDigits: 0,
    });
  }
  return value.toLocaleString(undefined, {
    maximumSignificantDigits: 6,
  });
}

export const categories: Category[] = [
  {
    id: "mass",
    label: "Mass",
    href: "/mass",
    baseLabel: "kilograms",
    defaultFrom: "kg",
    defaultTo: "bees",
    units: [
      { id: "lb", label: "Pound", plural: "Pounds", toBase: LB_TO_KG, kind: "standard" },
      { id: "t", label: "Ton", plural: "Tons", toBase: 2000 * LB_TO_KG, kind: "standard" },
      { id: "oz", label: "Ounce", plural: "Ounces", toBase: LB_TO_KG / 16, kind: "standard" },
      { id: "mcg", label: "Microgram", plural: "Micrograms", toBase: 1e-9, kind: "standard" },
      { id: "mg", label: "Milligram", plural: "Milligrams", toBase: 1e-6, kind: "standard" },
      { id: "g", label: "Gram", plural: "Grams", toBase: 0.001, kind: "standard" },
      { id: "kg", label: "Kilogram", plural: "Kilograms", toBase: 1, kind: "standard" },
      { id: "mt", label: "Metric Ton", plural: "Metric Tons", toBase: 1000, kind: "standard" },
      {
        id: "bees",
        label: "Bee",
        plural: "Bees",
        toBase: 0.000385809 * LB_TO_KG,
        kind: "weird",
        fact: {
          text: "UC Davis researchers weighed yellow-faced bumblebees (Bombus vosnesenskii) at about 150–200 milligrams each while studying bee health — roughly the mass we use here (~175 mg).",
          source: {
            label: "UC Davis",
            href: "https://www.ucdavis.edu/news/entomologists-engineers-work-together-weigh-bee",
          },
        },
      },
      {
        id: "qtrPounders",
        label: "McDonald's Quarter Pounder",
        plural: "McDonald's Quarter Pounders",
        toBase: 0.462971 * LB_TO_KG,
        kind: "weird",
        fact: {
          text: "A Quarter Pounder is named for a quarter pound of beef before cooking — about 4 ounces (≈113 g) of patty. I weighed three quarter pounders and got an average of 113.6 g.",
        },
      },
      {
        id: "lebrons",
        label: "LeBron James",
        plural: "LeBron Jameses",
        toBase: 250 * LB_TO_KG,
        kind: "weird",
        fact: {
          text: "LeBron James has long been listed around 250 lb (≈113 kg) — handy if you need to weigh something in basketball players.",
        },
      },
    ],
  },
  {
    id: "length",
    label: "Length",
    href: "/length",
    baseLabel: "meters",
    defaultFrom: "m",
    defaultTo: "footballField",
    units: [
      { id: "mm", label: "Millimeter", plural: "Millimeters", toBase: 0.001, kind: "standard" },
      { id: "cm", label: "Centimeter", plural: "Centimeters", toBase: 0.01, kind: "standard" },
      { id: "m", label: "Meter", plural: "Meters", toBase: 1, kind: "standard" },
      { id: "km", label: "Kilometer", plural: "Kilometers", toBase: 1000, kind: "standard" },
      { id: "in", label: "Inch", plural: "Inches", toBase: FT_TO_M / 12, kind: "standard" },
      { id: "yd", label: "Yard", plural: "Yards", toBase: 3 * FT_TO_M, kind: "standard" },
      { id: "ft", label: "Foot", plural: "Feet", toBase: FT_TO_M, kind: "standard" },
      { id: "mi", label: "Mile", plural: "Miles", toBase: 5280 * FT_TO_M, kind: "standard" },
      {
        id: "footballField",
        label: "Football field",
        plural: "Football fields",
        toBase: 360 * FT_TO_M,
        kind: "weird",
        fact: {
          text: "An American football field is 100 yards of playing surface plus two 10-yard end zones — 360 feet tip to tip.",
        },
      },
      {
        id: "fruitRollup",
        label: "Fruit Roll-Up",
        plural: "Fruit Roll-Ups",
        toBase: 3 * FT_TO_M,
        kind: "weird",
        fact: {
          text: "Unrolled, a classic Fruit Roll-Up stretches about three feet — a surprisingly useful yardstick for snack-sized distances.",
        },
      },
      {
        id: "microeverests",
        label: "Microeverest",
        plural: "Microeverests",
        toBase: 0.511666666666667 * FT_TO_M,
        kind: "weird",
        fact: {
          text: "Mount Everest rises about 29,032 feet. A microeverest is one ten-thousandth of that height — roughly half a foot.",
        },
      },
    ],
  },
  {
    id: "volume",
    label: "Volume",
    href: "/volume",
    baseLabel: "liters",
    defaultFrom: "l",
    defaultTo: "mouth",
    units: [
      { id: "mm3", label: "Cubic Millimeter", plural: "Cubic Millimeters", toBase: 1e-6, kind: "standard" },
      { id: "cm3", label: "Cubic Centimeter", plural: "Cubic Centimeters", toBase: 0.001, kind: "standard" },
      { id: "ml", label: "Milliliter", plural: "Milliliters", toBase: 0.001, kind: "standard" },
      { id: "l", label: "Liter", plural: "Liters", toBase: 1, kind: "standard" },
      { id: "tsp", label: "Teaspoon", plural: "Teaspoons", toBase: (1 / 6) * FLOZ_TO_L, kind: "standard" },
      { id: "Tbs", label: "Tablespoon", plural: "Tablespoons", toBase: 0.5 * FLOZ_TO_L, kind: "standard" },
      { id: "fl-oz", label: "Fluid Ounce", plural: "Fluid Ounces", toBase: FLOZ_TO_L, kind: "standard" },
      { id: "cup", label: "Cup", plural: "Cups", toBase: 8 * FLOZ_TO_L, kind: "standard" },
      { id: "pnt", label: "Pint", plural: "Pints", toBase: 16 * FLOZ_TO_L, kind: "standard" },
      { id: "qt", label: "Quart", plural: "Quarts", toBase: 32 * FLOZ_TO_L, kind: "standard" },
      { id: "gal", label: "Gallon", plural: "Gallons", toBase: 128 * FLOZ_TO_L, kind: "standard" },
      { id: "ft3", label: "Cubic Foot", plural: "Cubic Feet", toBase: 957.506 * FLOZ_TO_L, kind: "standard" },
      { id: "yd3", label: "Cubic Yard", plural: "Cubic Yards", toBase: 25852.7 * FLOZ_TO_L, kind: "standard" },
      {
        id: "mouth",
        label: "Mouthful",
        plural: "Mouthfuls",
        toBase: 4.22675 * FLOZ_TO_L,
        kind: "weird",
        fact: {
          text: "A mouthful here is about 125 ml — roughly a good sip, give or take how big your mouth is.",
        },
      },
      {
        id: "egg",
        label: "Large chicken egg",
        plural: "Large chicken eggs",
        toBase: 1.55545 * FLOZ_TO_L,
        kind: "weird",
        fact: {
          text: "A large chicken egg has a volume around 46 ml — the shell’s interior, not the carton claim by weight.",
        },
      },
      {
        id: "golfball",
        label: "Golf ball",
        plural: "Golf balls",
        toBase: 1.3756897 * FLOZ_TO_L,
        kind: "weird",
        fact: {
          text: "A regulation golf ball has a diameter of at least 1.68 inches, which works out to about 40.7 ml of volume.",
        },
      },
      {
        id: "maru",
        label: "Maru",
        plural: "Marus",
        toBase: 9.2,
        kind: "weird",
        fact: {
          text: "Maru is the famously rotund Scottish Fold cat. This unit treats one Maru as about 9.2 liters of cat — a tribute, not a veterinary measurement.",
        },
      },
    ],
  },
  {
    id: "time",
    label: "Time",
    href: "/time",
    baseLabel: "seconds",
    defaultFrom: "s",
    defaultTo: "mayfly",
    units: [
      { id: "ns", label: "Nanosecond", plural: "Nanoseconds", toBase: 1e-9, kind: "standard" },
      { id: "mu", label: "Microsecond", plural: "Microseconds", toBase: 1e-6, kind: "standard" },
      { id: "ms", label: "Millisecond", plural: "Milliseconds", toBase: 0.001, kind: "standard" },
      { id: "s", label: "Second", plural: "Seconds", toBase: 1, kind: "standard" },
      { id: "min", label: "Minute", plural: "Minutes", toBase: 60, kind: "standard" },
      { id: "h", label: "Hour", plural: "Hours", toBase: 3600, kind: "standard" },
      { id: "d", label: "Day", plural: "Days", toBase: 86400, kind: "standard" },
      { id: "week", label: "Week", plural: "Weeks", toBase: 604800, kind: "standard" },
      { id: "year", label: "Year", plural: "Years", toBase: 31557600, kind: "standard" },
      {
        id: "mayfly",
        label: "Lifespan of a mayfly",
        plural: "Lifespans of a mayfly",
        toBase: 300,
        kind: "weird",
        fact: {
          text: "Adult mayflies of some species live only a few minutes to a day. We use five minutes — a brisk, dramatic adulthood.",
        },
      },
      {
        id: "moonCycle",
        label: "Full moon cycle",
        plural: "Full moon cycles",
        toBase: 86400 * 29.53,
        kind: "weird",
        fact: {
          text: "A synodic month — full moon to full moon — averages about 29.53 days.",
        },
      },
      {
        id: "flaps",
        label: "Flap of a hummingbird's wings",
        plural: "Flaps of a hummingbird's wings",
        toBase: 0.0142857142857,
        kind: "weird",
        fact: {
          text: "Hummingbirds can beat their wings around 70 times per second in hover — so one flap is roughly 1/70 of a second.",
        },
      },
      {
        id: "mooch",
        label: "Mooch",
        plural: "Mooches",
        toBase: 86400 * 10,
        kind: "weird",
        fact: {
          text: "A mooch is ten days — long enough to linger on someone’s couch, short enough to still call it a visit.",
        },
      },
      {
        id: "sols",
        label: "Sol",
        plural: "Sols",
        toBase: 86400 * 1.0274912517,
        kind: "weird",
        fact: {
          text: "A sol is a Martian day — about 24 hours and 39 minutes on Earth clocks.",
        },
      },
    ],
  },
];

export function getCategory(id: CategoryId): Category {
  const category = categories.find((c) => c.id === id);
  if (!category) throw new Error(`Unknown category: ${id}`);
  return category;
}

export function getUnit(category: Category, id: string): Unit | undefined {
  return category.units.find((u) => u.id === id);
}

export function standardUnits(category: Category): Unit[] {
  return category.units.filter((u) => u.kind === "standard");
}

export function weirdUnits(category: Category): Unit[] {
  return category.units.filter((u) => u.kind === "weird");
}
