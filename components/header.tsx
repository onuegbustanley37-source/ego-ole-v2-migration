'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, TrendingUp, Store, Home as HomeIcon, Bell, Upload, KeyRound } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/prices', label: 'Prices', icon: TrendingUp },
  { href: '/stalls', label: 'Stalls', icon: Store },
  { href: '/vendor/join', label: 'Rent Stall', icon: KeyRound },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-white/5 bg-[#0A0A0A]/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl overflow-visible px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex min-w-[200px] items-center overflow-visible"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tighter">
                <span className="text-gradient-ego">EGO</span>{' '}
                <span className="text-white">OLE?</span>
              </span>
              <span className="text-[10px] tracking-widest text-gold">
                LIVE MARKET PRICES
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all',
                    active
                      ? 'bg-gold/10 text-gold'
                      : 'text-white/60 hover:bg-white/5 hover:text-white'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <button className="flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/5 px-3 py-2 text-xs font-semibold text-gold transition-all hover:bg-gold/10">
              <Bell className="h-4 w-4" />
              Set Alert
            </button>
            <Link href="/admin/upload" className="flex items-center gap-2 rounded-lg bg-gold px-3 py-2 text-xs font-bold text-black transition-all hover:bg-gold/90">
              <Upload className="h-4 w-4" />
              Admin Upload
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white/70 hover:bg-white/5 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-black md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all',
                    active ? 'bg-gold/10 text-gold' : 'text-white/70 hover:bg-white/5'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
            <div className="flex gap-2 pt-2">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gold/30 bg-gold/5 px-3 py-2.5 text-xs font-semibold text-gold">
                <Bell className="h-4 w-4" />
                Set Alert
              </button>
              <Link href="/admin/upload" onClick={() => setMobileOpen(false)} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold px-3 py-2.5 text-xs font-bold text-black">
                <Upload className="h-4 w-4" />
                Upload
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
