"use client";

import React, { useEffect, useState } from "react";
import { TProductConfigChannel } from "@cowk8s/types/product";

interface OnboardingSurveyProps {
  organizationId: string;
  channel: TProductConfigChannel;
  userId: string;
}

export const OnboardingSurvey = ({ organizationId, channel, userId }: OnboardingSurveyProps) => {
  const [isIFrameVisible, setIsIFrameVisible ] = useState(false);

  return (
    <div>
      <iframe></iframe>
    </div>
  );
};