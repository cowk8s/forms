"use client";

import React, {  } from "react";
import { TProductConfigChannel } from "@cowk8s/types/product";

interface OnboardingSurveyProps {
  organizationId: string;
  channel: TProductConfigChannel;
  userId: string;
}

export const OnboardingSurvey = ({ }: OnboardingSurveyProps) => {
  // const [isIFrameVisible, setIsIFrameVisible ] = useState(false);

  return (
    <div>
      <iframe></iframe>
    </div>
  );
};