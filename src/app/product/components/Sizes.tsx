type SizesProps = {
  sizes: string[];
};

export const Sizes = ({ sizes }: SizesProps) => {
  return (
    <div className="flex flex-wrap gap-2 max-w-md">
      {sizes.map((size) => (
        <label key={size} htmlFor={size}>
          <input
            type="radio"
            id={size}
            name="size"
            value={size}
            className="appearance-none peer"
          />
          <span className="cursor-pointer border-2 border-zinc-400 text-zinc-400 uppercase text-xl px-3.5 rounded-md peer-checked:border-black peer-checked:text-black">
            {size}
          </span>
        </label>
      ))}
    </div>
  );
};
