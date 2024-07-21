

interface LinkSurveyPageProps {
  params: {
    surveyId: string;
  };
  searchParams: {
    suId?: string;
    userId?: string;
    verify?: string;
    lang?: string;
    embed?: string;
  };
}

const Page = async ({ params, searchParams }: LinkSurveyPageProps) => {

  return survey ? (
    <LinkSurvey
      survey={survey}
      product={product}
      userId={userId}
    />
  ) : null;
};

export default Page;
