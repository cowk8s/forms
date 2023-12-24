
import Hero from "@/components/home/Hero";
import BestPractices from "@/components/shared/BestPractices";
import Layout from "@/components/shared/Layout";

const IndexPage = () => (
  <Layout
    title="Cowk8s | Privacy-first Experience Management"
    description="Build qualitative user research into your product. Leverage Best practices to increase Product-Market Fit.">
    <Hero />
    <BestPractices />
  </Layout>
);

export default IndexPage;