type TableProps = {
  caption: string;
  shirts?: {
    size: string;
    width: number;
    length: number;
    sleeve: number;
  }[];
  shoes?: {
    size: string;
    platform_height: number;
    internal_length: number;
  }[];
  head: string[];
};

export const TableSizes = ({ head, caption, shirts, shoes }: TableProps) => {
  return (
    <table className="text-center border-collapse border border-zinc-500">
      <caption className="caption-top text-xl font-semibold mb-1">
        {caption}
      </caption>
      <thead>
        <tr>
          {!shoes && <th></th>}
          {head.map((col) => (
            <th key={col} className="border border-zinc-500 font-normal px-2">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {shirts &&
          shirts.map((shirt, index) => (
            <tr key={index} className="duration-100 hover:bg-zinc-400">
              <td className="border border-zinc-500 px-2">{shirt.size}</td>
              <td className="border border-zinc-500">{shirt.width}</td>
              <td className="border border-zinc-500">{shirt.length}</td>
              <td className="border border-zinc-500">{shirt.sleeve}</td>
            </tr>
          ))}
        {shoes &&
          shoes.map((shoe, index) => (
            <tr key={index} className="duration-100 hover:bg-zinc-400">
              <td className="border border-zinc-500 px-2">{shoe.size}</td>
              <td className="border border-zinc-500">{shoe.platform_height}</td>
              <td className="border border-zinc-500">{shoe.internal_length}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
