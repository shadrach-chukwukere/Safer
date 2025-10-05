import PageMeta from "../components/Meta";

export default function AboutUs() {
  return (
    <>
      <PageMeta
        title="About Us | Safer"
        description="Learn more about SmartSafer, our mission, vision, and the team behind the product."
        keywords="SmartSafer, about, mission, vision, team"
      />

      <div className="mx-1 md:mx-10 px-4 sm:px-6 py-16 space-y-2">
        <div className="text-xl font-semibold">About Us </div>
        <div className="text-lg">
          At Safer Technologies Limited, we are redefining the future of
          payments with innovation, intelligence, and trust. Safer is our
          flagship fintech app designed to make payments smarter, faster, and
          stress-free. Powered by advanced AI technology, Safer enables users to
          complete transactions through intuitive, secure, and intelligent
          methods. Whether you’re sending money, making everyday payments, or
          managing your wallet, our platform ensures a seamless experience
          tailored to your needs. We partner with trusted financial institutions
          to guarantee the safety and security of every transaction. With Safer,
          your money is always protected while you enjoy the convenience of
          cutting-edge payment technology. Our mission is simple: to empower
          individuals and businesses with smart, AI-driven financial solutions
          that make payments effortless and reliable.
        </div>
      </div>
    </>
  );
}
