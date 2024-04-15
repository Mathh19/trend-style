type InfoCardProps = {
  icon: React.ReactElement;
  text: string;
};

export const InfoCard = ({ icon, text }: InfoCardProps) => {
  return (
    <div className="flex flex-col rounded-sm w-full max-w-xs p-4 justify-center items-center bg-zinc-200">
      {icon}

      <span className="text-zinc-700 font-medium whitespace-nowrap">
        {text}
      </span>
    </div>
  );
};
