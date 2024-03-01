export const ErrorMessage = ({ message }: { message: string }) => {
  if (message !== '')
    return <p className="text-red-500 animate-shake">{message}</p>;
};
