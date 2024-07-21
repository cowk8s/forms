

const SetupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-full">
        <div>
          <div>

          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default SetupLayout;
