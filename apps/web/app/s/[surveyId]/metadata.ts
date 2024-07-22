import { Metadata } from "next";

export const getMetadataForLinkSurvey = async (surveyId: string): Promise<Metadata> => {

  return {
    title: 'Tai',
    metadataBase: new URL(""),
    openGraph: {
      title: 'Teai', 
    }
  };
};