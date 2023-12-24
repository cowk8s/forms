
export const GetStartedWithPricing = ({ showDetailed }: { showDetailed: boolean }) => {
  return (
    <>
      <div className="flex">
        <div>
          {showDetailed && (
            <p>
              General free usage on every product. Best for early stage startups and hobbyists
            </p>
          )}
        </div>
        <div>
          <p> Paid</p>
        </div>
      </div>
      <div></div>
    </>
  );
};
