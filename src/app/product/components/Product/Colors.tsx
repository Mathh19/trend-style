import { ChangeEvent } from 'react';

type ColorProps = {
  colors: {
    name: string;
    hex: string;
  }[];
  onColorChange: (selectedColor: string) => void;
};

export const Colors = ({ colors, onColorChange }: ColorProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onColorChange(e.target.value);
  };

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
              onChange={handleChange}
              name="color"
              value={color.name}
              className="peer appearance-none"
            />
            <span
              style={{ backgroundColor: color.hex }}
              className={`border border-black peer-checked:outline outline-1 peer-checked:outline-offset-2 w-6 h-6 rounded-full`}
            ></span>
            <p className="block">{color.name}</p>
          </label>
        ))}
      </div>
    </div>
  );
};
