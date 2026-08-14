import Link from "next/link";

type BeeLogoProps = {
  className?: string;
};

export function BeeLogo({ className = "" }: BeeLogoProps) {
  return (
    // SVG mascot — plain img avoids next/image SVG restrictions
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/bee.svg"
      alt="How Many Bees"
      width={140}
      height={98}
      className={className}
    />
  );
}

export function SiteHeader() {
  const links = [
    { href: "/mass", label: "Mass" },
    { href: "/length", label: "Length" },
    { href: "/volume", label: "Volume" },
    { href: "/time", label: "Time" },
  ];

  return (
    <header className="site-header">
      <Link href="/" className="site-brand" aria-label="How Many Bees home">
        <BeeLogo className="site-brand-logo" />
        <span className="site-brand-name">How Many Bees</span>
      </Link>
      <nav className="site-nav" aria-label="Unit categories">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="site-nav-link">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
