import { FiMail, FiMapPin } from "react-icons/fi";

export default function Terms() {
  return (
    <div className="lg:mx-10 mx-0 px-6 py-12 leading-snug font-Inter">
      <h1 className="text-xl font-bold mb-4">Terms of Service</h1>
      <p className="font-medium text-lg mb-4">
        Effective Date: [ Insert Date ]
      </p>
      <p className="font-medium text-lg mb-4">
        Provider: <strong>Safer Technologies Limited</strong>
      </p>
      <p className="font-medium text-lg mb-6">
        These Terms of Service ( “Terms” ) govern your use of the Safer Core
        Banking Platform ( “the Platform” ), provided by Safer Technologies
        Limited ( “we,” “our,” or “us” ). By accessing or using the Platform,
        you agree to these Terms. Please read them carefully.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-2">1. Eligibility</h2>
      <ul className="list-disc list-inside font-medium text-lg space-y-1">
        <li>You must be at least 18 years old to use the Platform.</li>
        <li>
          You agree to provide accurate and complete information during
          registration.
        </li>
        <li>
          Use of the Platform is subject to compliance with applicable laws and
          regulations ( e.g., CBN, AML/CFT, data protection laws ).
        </li>
      </ul>

      <h2 className="text-lg font-bold mt-6 mb-2">2. Services Provided</h2>
      <p className="font-medium text-lg mb-2">
        The Platform offers technology infrastructure to enable:
      </p>
      <ul className="list-disc list-inside font-medium text-lg space-y-1">
        <li>Account creation and management</li>
        <li>Deposits, transfers, and withdrawals</li>
        <li>Wallet services and ledger management</li>
        <li>Payment processing and settlement</li>
        <li>Compliance checks, reporting, and monitoring</li>
      </ul>
      <p className="font-medium text-lg mt-2">
        We provide the technology and infrastructure; regulated financial
        services ( e.g., holding of funds ) are provided in partnership with
        licensed financial institutions.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-2">3. User Responsibilities</h2>
      <ul className="list-disc list-inside font-medium text-lg space-y-1">
        <li>Use the Platform only for lawful purposes</li>
        <li>
          Maintain the confidentiality of your login credentials and security
          PINs
        </li>
        <li>Notify us immediately of any unauthorized use of your account</li>
        <li>Not attempt to interfere with or compromise system security</li>
      </ul>

      <h2 className="text-lg font-bold mt-6 mb-2">
        4. Transactions & Processing
      </h2>
      <ul className="list-disc list-inside font-medium text-lg space-y-1">
        <li>
          All transactions are processed in accordance with our partner banks
          and payment providers.
        </li>
        <li>
          We may delay, decline, or reverse transactions if required by law,
          fraud detection systems, or compliance reviews.
        </li>
        <li>
          You are responsible for ensuring accurate recipient details ( e.g.,
          bank name, account number ). We are not liable for losses due to
          incorrect information provided by you.
        </li>
      </ul>

      <h2 className="text-lg font-bold mt-6 mb-2">5. Fees & Charges</h2>
      <ul className="list-disc list-inside font-medium text-lg space-y-1">
        <li>
          Applicable service fees will be disclosed before you authorize a
          transaction.
        </li>
        <li>
          Fees may be updated from time to time, and continued use of the
          Platform constitutes acceptance of such changes.
        </li>
      </ul>

      <h2 className="text-lg font-bold mt-6 mb-2">
        6. Data Protection & Privacy
      </h2>
      <ul className="list-disc list-inside font-medium text-lg space-y-1">
        <li>
          Your personal and financial data will be collected, stored, and
          processed in accordance with our Privacy Policy.
        </li>
        <li>
          We use encryption and secure storage systems to protect your
          information.
        </li>
        <li>
          By using the Platform, you consent to our data handling practices.
        </li>
      </ul>

      <h2 className="text-lg font-bold mt-6 mb-2">
        7. Compliance & Monitoring
      </h2>
      <ul className="list-disc list-inside font-medium text-lg space-y-1">
        <li>We comply with AML, CFT, and KYC regulations.</li>
        <li>
          You may be required to provide identity documents or transaction
          justifications.
        </li>
        <li>
          Failure to comply may result in account restrictions or closure.
        </li>
      </ul>

      <h2 className="text-lg font-bold mt-6 mb-2">
        8. Limitations of Liability
      </h2>
      <ul className="list-disc list-inside font-medium text-lg space-y-1">
        <li>
          The Platform is provided on an “as is” and “as available” basis.
        </li>
        <li>
          We are not liable for downtime, delays, or technical errors beyond our
          control.
        </li>
        <li>
          We are not responsible for incorrect user input or third-party system
          failures.
        </li>
        <li>
          We are not responsible for a user’s failure to safeguard credentials (
          passwords, PINs, etc. ).
        </li>
        <li>
          Payments made to unverified, inaccurate, or incorrect bank account
          details are at the user’s risk.
        </li>
        <li>
          Our maximum liability shall not exceed the amount of fees paid by you
          in the past 3 months.
        </li>
      </ul>

      <h2 className="text-lg font-bold mt-6 mb-2">
        9. Suspension & Termination
      </h2>
      <ul className="list-disc list-inside font-medium text-lg space-y-1">
        <li>We may suspend or terminate access if you breach these Terms.</li>
        <li>
          Fraudulent, illegal, or suspicious activity may result in termination.
        </li>
        <li>
          Failure to comply with regulatory requirements may lead to
          restrictions or closure.
        </li>
      </ul>

      <h2 className="text-lg font-bold mt-6 mb-2">10. Intellectual Property</h2>
      <p className="font-medium text-lg">
        All software, trademarks, logos, and documentation remain the property
        of Safer Technologies Limited. You may not copy, modify, or distribute
        them without permission.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-2">11. Amendments</h2>
      <p className="font-medium text-lg">
        We may update these Terms periodically. Significant changes will be
        communicated via email, in-app notifications, or our website. Continued
        use of the Platform constitutes acceptance of updated Terms.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-2">
        12. Governing Law & Dispute Resolution
      </h2>
      <p className="font-medium text-lg">
        These Terms are governed by the laws of the Federal Republic of Nigeria.
        Disputes shall first be resolved amicably, then referred to arbitration
        in Lagos, Nigeria if unresolved.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-2">13. Contact Us</h2>
      <p className="font-medium text-lg flex items-center gap-2">
        <FiMail className="text-lg" /> Email:{" "}
        <a
          href="mailto:support@saferapp.com"
          className="text-blue-600 font-semibold underline"
        >
          support@saferapp.com
        </a>
      </p>
      <p className="font-medium text-lg flex items-center gap-2 mt-1">
        <FiMapPin className="text-lg" /> Address: [ Insert Company Address ]
      </p>
    </div>
  );
}
