type Thickness = "thin" | "medium" | "thick" | "thicker";

const THICKNESS = new Map<Thickness, string>([
  ["thin", "14"],
  ["medium", "1F"],
  ["thick", "29"],
  ["thicker", "61"],
]);

/**
 * @description
 * layer
 */
export const layer = (color: string, thickness: Thickness) => {
  const layed = THICKNESS.get(thickness);
  if (!layed) return color;
  return `${color}${layed}`;
};
