export const POT_COLORS = {
  stone: "bg-stone-200",
  slate: "bg-slate-300",
  sky: "bg-sky-700",
  black: "bg-gray-600",
  white: "bg-gray-50",
  amber: "bg-amber-600",
};

export const randomColorIdx = (a) => {
  const randomIdx = Math.floor(Math.random() * a.length);

  return randomIdx;
};
