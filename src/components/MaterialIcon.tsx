import type { CSSProperties } from "react";

type Props = {
  name: string;
  className?: string;
  filled?: boolean;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  style?: CSSProperties;
  "aria-hidden"?: boolean;
};

export function MaterialIcon({
  name,
  className,
  filled = false,
  weight,
  style,
  "aria-hidden": ariaHidden = true,
}: Props) {
  const fontVariationSettings =
    filled || weight
      ? `'FILL' ${filled ? 1 : 0}${weight ? `, 'wght' ${weight}` : ""}`
      : undefined;

  return (
    <span
      aria-hidden={ariaHidden}
      className={`material-symbols-outlined ${className ?? ""}`.trim()}
      style={{ fontVariationSettings, ...style }}
    >
      {name}
    </span>
  );
}
