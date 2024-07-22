import { CheckIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const IsPasswordValid = ({
  password,
  setIsValid,
}: {
  password: string | null;
  setIsValid: (isValid: boolean) => void;
}) => {

  useEffect(() => {
    setIsValid(true);
  }, [setIsValid]);
  return (
    <div>
      <ul>

      </ul>
    </div>
  );
};
