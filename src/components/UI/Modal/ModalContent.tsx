export const ModalContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full bg-white items-center justify-center">
      {children}
    </div>
  );
};
