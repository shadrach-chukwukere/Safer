import { AiOutlineWarning, AiOutlineCheckCircle } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import PageMeta from "../components/Meta";

export default function Privacy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy | Safer"
        description="Understand how SmartSafer collects, uses, and protects your personal information. Your privacy and data security are our top priorities."
        keywords="SmartSafer, privacy policy, data protection, user privacy, security"
      />

      <div className="lg:mx-10  mx-0 px-6 py-12 leading-snug font-Inter">
        <h1 className="text-xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4 font-medium text-lg">
          Welcome to <strong>Safer</strong>, the AI-powered payment app by{" "}
          <strong>Safer Technologies Limited</strong>. At Safer, your privacy is
          our top priority. This Privacy Policy explains how we collect, use,
          store, and protect your personal information when you use our
          services.
        </p>

        <h2 className="text-lg font-bold mt-6 mb-2">
          What Information We Collect
        </h2>
        <p className="font-medium mb-2">
          When you use the Safer app, we may collect the following types of
          information:
        </p>
        <ol className="list-decimal list-inside space-y-2 font-medium text-lg">
          <li>
            <strong>Personal Information</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Full name, phone number, and email address</li>
              <li>Bank account details ( account number, bank name )</li>
              <li>BVN ( if required for verification )</li>
            </ul>
          </li>
          <li>
            <strong>Transaction & Usage Data</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Payment details ( amount, recipient, purpose, reference )</li>
              <li>Wallet activity ( funding, withdrawals, transfers )</li>
              <li>Device information ( model, OS, unique identifiers )</li>
              <li>Time, date, and frequency of interactions</li>
            </ul>
          </li>
          <li>
            <strong>Media Data ( if provided by you )</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Images of receipts, bills, or documents uploaded</li>
              <li>Voice notes or audio commands processed for payments</li>
            </ul>
          </li>
        </ol>

        <h2 className="text-lg font-bold mt-6 mb-2">
          How We Use Your Information
        </h2>
        <p className="font-medium text-lg">We use your information to:</p>
        <ul className="list-disc list-inside space-y-1 font-medium text-lg">
          <li>Process and complete your financial transactions</li>
          <li>Verify accounts and prevent fraud</li>
          <li>
            Enhance your experience with AI-powered smart payment features
          </li>
          <li>Provide customer support and respond to inquiries</li>
          <li>Improve system performance and app functionality</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>
        <p className="mt-2 font-semibold flex items-center gap-2">
          <AiOutlineWarning className="text-lg" /> We never sell or rent your
          personal data to third parties.
        </p>

        <h2 className="text-lg font-bold mt-6 mb-2">
          Voice & Image Processing
        </h2>
        <ul className="list-disc list-inside space-y-1 font-medium text-lg">
          <li>
            Voice notes or images may be temporarily processed by AI to extract
            financial info ( e.g., account number, reference ).
          </li>
          <li>
            Personal identifiers are anonymized or removed where possible.
          </li>
          <li>
            Data may be used to improve AI models in secure environments only.
          </li>
        </ul>

        <h2 className="text-lg font-bold mt-6 mb-2">Data Storage & Security</h2>
        <ul className="list-disc list-inside space-y-1 font-medium text-lg">
          <li>We use industry-standard encryption and secure servers.</li>
          <li>Access is restricted to authorized personnel only.</li>
          <li>
            Data is stored only as long as necessary to provide services or meet
            legal requirements.
          </li>
          <li>You may request deletion of your data at any time.</li>
        </ul>

        <h2 className="text-lg font-bold mt-6 mb-2">Third-Party Services</h2>
        <p className="font-medium text-lg">
          Safer integrates with trusted third-party services such as:
        </p>
        <ul className="list-disc list-inside space-y-1 font-medium text-lg">
          <li>Payment processors and partner banks</li>
          <li>Fraud prevention and compliance tools</li>
          <li>Analytics providers to improve app performance</li>
        </ul>
        <p className="mt-2 font-medium flex items-center gap-2">
          <AiOutlineCheckCircle className="text-lg" /> All partners follow
          strict data protection standards. Data is only shared when required
          for service delivery or compliance.
        </p>

        <h2 className="text-lg font-bold mt-6 mb-2">Your Rights</h2>
        <p className="font-medium text-lg">You have the right to:</p>
        <ul className="list-disc list-inside space-y-1 font-medium text-lg">
          <li>Request access to the data we hold about you</li>
          <li>Correct or update your personal information</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent ( which may limit some features )</li>
        </ul>
        <p className="mt-2 font-medium text-lg">
          To exercise your rights, contact us at:{" "}
          <a
            href="mailto:Support@smartsafer.xyz"
            className="text-blue-600 font-semibold underline"
          >
            Support@smartsafer.xyz
          </a>
        </p>

        <h2 className="text-lg font-bold mt-6 mb-2">Children’s Privacy</h2>
        <p className="font-medium text-lg">
          Safer is not intended for individuals under 18. We do not knowingly
          collect data from minors. If discovered, it will be deleted
          immediately.
        </p>

        <h2 className="text-lg font-bold mt-6 mb-2">Policy Updates</h2>
        <p className="font-medium text-lg">
          We may update this Privacy Policy from time to time. Significant
          changes will be notified through the app, email, or website.
        </p>

        <h2 className="text-lg font-bold mt-6 mb-2">Contact Us</h2>
        <p className="font-medium flex flex-wrap items-center gap-2 text-lg">
          Safer Technologies Limited <br />
          <FiMail className="text-lg" /> Email:{" "}
          <a
            href="mailto:Support@smartsafer.xyz"
            className="text-blue-600 font-semibold underline text-lg"
          >
            Support@smartsafer.xyz
          </a>
        </p>
      </div>
    </>
  );
}
