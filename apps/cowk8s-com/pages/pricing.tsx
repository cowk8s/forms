import HeroTitle from "@/components/shared/HeroTitle";
import Layout from "@/components/shared/Layout";

import { GetStartedWithPricing } from "@/components/shared/PricingGetStarted";

import { PricingTable } from "../components/shared/PricingTable";

const linkSurveys = {
  leadRow: {
    title: "Link Surveys",
    comparison: "like Typeform",
    free: <span>Unlimited</span>,
    paid: "Unlimited",
  },

  features: [
    { name: "Unlimited Surveys", free: true, paid: true },
    { name: "Unlimited Responses", free: true, paid: true },
  ],

  endRow: {
    title: "Link Surveys Pricing",
    free: "Free",
    paid: "$30 / month",
  },
};

const PricingPage = () => {
  return (
    <Layout
      title="Pricing | Cowk8s Open Source Experience Management"
      description="All our plans start free - choose what's best for you!">
      
      <HeroTitle
        headingPt1=""
        headingTeal="Pricing"
        subheading="All our plans start free - choose what's best for you!"
      />
      <div className="space-y-24">
        <div>
          <GetStartedWithPricing showDetailed={true} />
          
          <PricingTable
            leadRow={linkSurveys.leadRow}
            pricing={linkSurveys.features}
            endRow={linkSurveys.endRow}
          />
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;
