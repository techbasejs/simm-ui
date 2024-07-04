import { AddZero } from "./add-zero";

export function secondsToHms(d: number) {
  d = Number(d);
  const h = Math.round(d / 3600);
  const m = Math.round((d % 3600) / 60);
  const s = Math.round((d % 3600) % 60);

  return [h, m, s]
    .map((n) => AddZero(n))
    .join(":");
}
