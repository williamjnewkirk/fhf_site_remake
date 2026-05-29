"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, LogIn } from "lucide-react";
import { company, navLinks, offices } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top bar */}
      <div style={{ backgroundColor: "var(--navy)" }} className="text-white text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            {offices.map((o) => (
              <a key={o.id} href={`tel:${o.phone.replace(/-/g, "")}`} className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
                <Phone size={12} />
                <span>{o.city}: {o.phone}</span>
              </a>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <a href={company.clientPortal} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <LogIn size={12} /> Client Login
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between" aria-label="Main navigation">
        <Link href="/" aria-label="Flagel Huber Flagel — Home">
          <Image
            src="/images/logo/fhf-logo-horizontal.svg"
            alt="Flagel Huber Flagel"
            width={220}
            height={32}
            priority
            className="h-8 w-auto"
            style={{ filter: "brightness(0) saturate(100%) invert(16%) sepia(45%) saturate(600%) hue-rotate(185deg) brightness(80%)" }}
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="menubar">
          {navLinks.map((link) => (
            <li key={link.label} className="relative" role="none"
              onMouseEnter={() => link.children && openDropdown(link.label)}
              onMouseLeave={() => link.children && closeDropdown()}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 rounded text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors"
                role="menuitem"
                aria-haspopup={link.children ? "true" : undefined}
                aria-expanded={link.children ? activeDropdown === link.label : undefined}
              >
                {link.label}
                {link.children && <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`} />}
              </Link>
              {link.children && activeDropdown === link.label && (
                <ul className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50" role="menu">
                  {link.children.map((child) => (
                    <li key={child.label} role="none">
                      <Link href={child.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors" role="menuitem">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link href="/contact" className="ml-2 px-5 py-2 rounded text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "var(--gold)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 rounded text-gray-700 hover:bg-gray-100" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white" id="mobile-menu">
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link href={link.href} className="block px-3 py-2 rounded text-base font-medium text-gray-800 hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-1">
                    {link.children.map((child) => (
                      <Link key={child.label} href={child.href} className="block px-3 py-1.5 text-sm text-gray-600 hover:text-blue-800" onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <a href={company.clientPortal} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm font-medium text-blue-900 border border-blue-900 rounded text-center">
                Client Login
              </a>
              <Link href="/contact" className="block px-3 py-2 text-sm font-semibold text-white rounded text-center" style={{ backgroundColor: "var(--gold)" }} onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
