const COLORS = {
  green: {
    bg: "bg-[#DFFFD6]",
    badge: "bg-[#A4E3B2]",
  },
  orange: {
    bg: "bg-[#FFE0C1]",
    badge: "bg-[#FFD19C]",
  },
  yellow: {
    bg: "bg-[#FFF5C1]",
    badge: "bg-[#FFEB8A]",
  },
  red: {
    bg: "bg-[#FFEBEB]",
    badge: "bg-[#FFCCD5]",
  },
};

export const getRandomColor = () => {
  const colorNames = Object.keys(COLORS);
  const randomIndex = Math.floor(Math.random() * colorNames.length);
  const randomColorName = colorNames[randomIndex];
  return COLORS[randomColorName];
};
