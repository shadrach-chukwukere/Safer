import Convert from "../components/Convert";
import Hero from "../components/Hero";
import JoinSafer from "../components/JoinSafer";
import PageMeta from "../components/Meta";
import TrustSection from "../components/TrustSection";

export default function Home() {
  return (
    <div>
      <PageMeta
        title="SmartSafer"
        description="Experience secure, fast, and smart money transactions with SmartSafer. Simplify your financial life with seamless payments and trusted protection."
        keywords="SmartSafer, home, secure transactions, money transfer, payment app, digital wallet"
      />

      <Hero />
      <JoinSafer />
      <TrustSection />
      <Convert />
    </div>
  );
}
