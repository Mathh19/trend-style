type ColorProps = {
  colors: {
    name: string;
    hex: string;
  }[];
};

export const Colors = ({ colors }: ColorProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-4xl font-bold">Color:</p>
      <div className="flex gap-2">
        {colors.map((color) => (
          <label
            key={color.hex}
            htmlFor={color.name}
            className="flex flex-col items-center gap-1"
          >
            <input
              type="radio"
              id={color.name}
              name="color"
              value={color.name}
              className="peer appearance-none"
            />
            <span
              className={`border border-black peer-checked:outline outline-1 peer-checked:outline-offset-2 w-6 h-6 rounded-full bg-[${color.hex}]`}
            ></span>
            <p className="block">{color.name}</p>
          </label>
        ))}
      </div>
    </div>
  );
};
