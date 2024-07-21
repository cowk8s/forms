import { ScrollableContainer } from "@/components/wrappers/ScrollableContainer";
import { TSurvey } from "@cowk8s/types/surveys/types";

interface WelcomeCardProps {
  survey: TSurvey;
}

export const WelcomeCard = ({
}: WelcomeCardProps) => {
  return (
    <div>
      <ScrollableContainer>
        <div>
          <div>
            
          </div>
        </div>
      </ScrollableContainer>
    </div>
  );
};
