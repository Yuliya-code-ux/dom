import type { Apartment, LayoutKind, Wing } from "../data/apartments";

const COLORS: Record<Wing, string> = {
  left: "#c4a574",
  center: "#5ec4d1",
  right: "#7fb8b0",
};

const THREE: Record<Wing, string> = {
  left: "18,16 41.5,16 41.5,86 18,86",
  center: "41.5,53 61.5,53 61.5,86 41.5,86",
  right: "53,16 91.5,16 91.5,86 61.5,86 61.5,53 53,53",
};

const FOUR: Partial<Record<Wing, string>> = {
  left: "18,16 41.5,16 41.5,86 18,86",
  right: "41.5,53 53,53 53,16 91.5,16 91.5,86 41.5,86",
};

type Props = {
  layout: LayoutKind;
  apartments: Apartment[];
  selectedId: string | null;
  hoveredId: string | null;
  filterActive: (apt: Apartment) => boolean;
  onHover: (id: string | null) => void;
  onSelect: (apt: Apartment) => void;
  onBookedFloor: () => void;
};

export function FloorPlan({
  layout,
  apartments,
  selectedId,
  hoveredId,
  filterActive,
  onHover,
  onSelect,
  onBookedFloor,
}: Props) {
  if (layout === "first") {
    return (
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <polygon
          points="8,12 93,12 93,88 8,88"
          className="apt-hotspot"
          fill="#6e3a28"
          fillOpacity="0.35"
          stroke="#c4a574"
          strokeWidth="0.4"
          onClick={onBookedFloor}
        />
      </svg>
    );
  }

  const shapes = layout === "four" ? FOUR : THREE;

  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
    >
      {apartments.map((apt) => {
        const points = shapes[apt.wing];
        if (!points) return null;
        const selected = selectedId === apt.id;
        const hovered = hoveredId === apt.id;
        const dim = !filterActive(apt);
        const booked = apt.status === "booked";
        const fill = booked ? "#6b635a" : COLORS[apt.wing];
        const opacity = dim ? 0.08 : booked ? 0.28 : selected || hovered ? 0.5 : 0.22;

        return (
          <g key={apt.id}>
            <polygon
              points={points}
              className={booked ? undefined : "apt-hotspot"}
              fill={fill}
              fillOpacity={opacity}
              stroke={selected && !booked ? "#f3eadc" : booked ? "#9a9084" : fill}
              strokeWidth={selected && !booked ? 0.7 : 0.35}
              style={booked ? { pointerEvents: "none", cursor: "default" } : undefined}
              onMouseEnter={() => {
                if (!booked) onHover(apt.id);
              }}
              onMouseLeave={() => onHover(null)}
              onClick={() => {
                if (!booked) onSelect(apt);
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}
