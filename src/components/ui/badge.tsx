interface BadgeProps {
  label: string;
  color?: string;
}

export default function Badge({
  label,
  color = "bg-nebula",
}: BadgeProps) {
  return (
    <span
      className={`
      inline-flex
      px-3
      py-1
      rounded-full
      text-sm
      ${color}
    `}
    >
      {label}
    </span>
  );
}
