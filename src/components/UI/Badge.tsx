type BadgeProps = {
  children: React.ReactElement;
  value: number;
};

export const Badge = ({ children, value }: BadgeProps) => {
  const badgeContent = value >= 100 ? '+99' : value;

  return (
    <div className="relative">
      {value > 0 && (
        <span className="absolute top-0 left-3 -translate-y-2.5 border-2 border-white bg-red-500 rounded-full px-1.5 text-white text-xs">
          {badgeContent}
        </span>
      )}
      {children}
    </div>
  );
};
