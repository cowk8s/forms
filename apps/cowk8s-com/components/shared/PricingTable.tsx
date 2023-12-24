import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const PricingTable = ({ leadRow, pricing, endRow }) => {
  return (
    <div className="grid grid-cols-1 px-1 md:gap-4 md:px-16">
      <div className="rounded-xl px-4 md:px-12">
        <div className="flex items-center gap-x-4">
          <div className="w-1/3 text-left font-semibold text-slate-700 dark:text-slate-200 md:text-xl">
            {leadRow.title}
            <span className="pl-2 text-sm font-normal text-slate-600">{leadRow.comparison}</span>
          </div>
          <div
            className="flex w-1/3 items-center justify-center text-center text-sm font-semibold
            text-slate-500 dark:text-slate-200 md:text-lg">
            {leadRow.free}
          </div>

          <div className="w-1/3 text-center font-semibold text-slate-700 dark:text-slate-200 md:text-lg">
            {leadRow.paid}
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-slate-100 px-4 py-4 dark:bg-slate-800 md:px-12 ">
        {pricing.map((feature) => (
          <div key={feature.name} className="mb-8 flex items-center gap-x-4">
            <div className="w-1/3 text-left text-sm text-slate-700 dark:text-slate-200 md:text-base">
              {feature.name}
              {feature.addOntext && (
                <span className=" mx-3 rounded-full">
                  Addon
                </span>
              )}
            </div>
            <div>
            </div>  
          </div>
        ))}
      </div>

      <div className="rounded-xl px-4 md:px-12">
        <div className="flex items-center gap-x-4">
          <div className="w-1/3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200 md:text-base">
            {endRow.title}
          </div>
          <div className="flex w-1/3 items-center justify-center text-center text-sm font-semibold text-slate-700 dark:text-slate-200 md:text-base">
            <span>{endRow.free}</span>
          </div>

          <div className="w-1/3 text-center text-sm font-semibold text-slate-700 dark:text-slate-200 md:text-base">
            {endRow.paid}
          </div>
        </div>
      </div>
    </div>
  );
};

