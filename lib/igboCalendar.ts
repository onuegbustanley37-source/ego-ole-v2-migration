export const IGBO_DAYS = ['Eke', 'Orie', 'Afor', 'Nkwo'] as const;
export type IgboDay = (typeof IGBO_DAYS)[number];

const ANCHOR_DATE = new Date(2024, 0, 1); // Jan 1, 2024 = Eke

export function getIgboDay(date: Date): IgboDay {
  const diffMs = date.getTime() - ANCHOR_DATE.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const index = ((diffDays % 4) + 4) % 4;
  return IGBO_DAYS[index];
}

export function getTodayInfo<T extends { igboDay: string }>(markets: T[]) {
  const today = new Date();
  const igboDay = getIgboDay(today);
  const openMarkets = markets.filter(
    (m) => m.igboDay === igboDay || m.igboDay === 'Daily'
  );
  return { date: today, igboDay, openMarkets };
}

export function getNext30Days() {
  const days: { date: Date; igboDay: IgboDay; label: string; weekday: string }[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      date: d,
      igboDay: getIgboDay(d),
      label: d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
      weekday: d.toLocaleDateString('en-US', { weekday: 'short' }),
    });
  }
  return days;
}

export function getNextMarketDay(targetDay: IgboDay): Date {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < 4; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (getIgboDay(d) === targetDay) return d;
  }
  return today;
}

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
