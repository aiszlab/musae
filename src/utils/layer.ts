type Thickness = "thin" | "medium" | "thick" | "thicker";

const THICKNESS = new Map<Thickness, string>([
  // 8%
  ["thin", "14"],
  // 12%
  ["medium", "1F"],
  // 16%
  ["thick", "29"],
  // 38%
  ["thicker", "61"],
]);

/**
 * @description
 * layer
 */
export const layer = (color: string, thickness?: Thickness) => {
  // no color or no thickness, return without any deal
  if (!thickness) return color;
  const layed = THICKNESS.get(thickness);
  if (!layed) return color;
  // add thickness to color
  return `${color}${layed}`;
};
