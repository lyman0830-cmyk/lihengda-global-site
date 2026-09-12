export type NavItem = { href: string; label: string };

export const NAV: NavItem[] = [
  { href: "/manufacturing/", label: "Engineering & Manufacturing" },
  { href: "/china-vietnam/", label: "China & Vietnam" },
  { href: "/industries/", label: "Industries" },
  { href: "/crowdfunding-to-production/", label: "Crowdfunding" },
  { href: "/about/", label: "About" },
];

export const MANUFACTURING_SUBNAV: NavItem[] = [
  { href: "/manufacturing/injection-molding/", label: "Injection Molding" },
  { href: "/manufacturing/sheet-metal-welding/", label: "Sheet Metal & Welding" },
  { href: "/manufacturing/cnc-machining/", label: "CNC Machining" },
  { href: "/manufacturing/box-build-assembly/", label: "Box-Build Assembly, Inspection & Packaging" },
];
