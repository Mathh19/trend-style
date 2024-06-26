import { ChangeEvent } from 'react';

import { ColorProps } from '@shared-types/color';

type ColorComponentProps = {
  colors: ColorProps[];
  onColorChange: (selectedColor: ColorProps) => void;
};

export const Colors = ({ colors, onColorChange }: ColorComponentProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onColorChange({ name: e.target.id, hex: e.target.value });
  };

  return (
    <div className="flex flex-col gap-1.5">
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
              value={color.hex}
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
