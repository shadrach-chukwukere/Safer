import { Link } from "react-router-dom";
import Download from "./Download";

export default function Footer() {
  return (
    <div className="font-Righteous">
      {/* Download component */}
      <div className="lg:mx-10 md:mx-8 -mb-[130px] text-center">
        <Download />
      </div>

      {/* Footer main section */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-8 lg:px-24 py-20 pt-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-center">
            <div className="space-y-4 lg:mx-0 w-full md:text-center lg:text-left text-left">
              <div className="font-bold text-lg">
                Safer intelligence technology
                <div className="text-[14px] font-semibold block sm:hidden">
                  Lekki, lagos - Nigeria.
                </div>
              </div>

              <div className="w-full h-[1px] bg-[repeating-linear-gradient(to_right,#BFBFBF_0_40px,transparent_40px_50px)] block sm:hidden opacity-40"></div>

              <div className="text-sm leading-relaxed container md:mx-auto">
                Safer provides secure and seamless payment solutions, offering
                users stress-free methods to send and receive money. With
                AI-powered smart features, payments are made easier and more
                convenient, while funds sent to the Safer app are safely held
                with our trusted partner banks.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-start md:justify-around text-sm text-left">
              <div className="space-y-3">
                <div className="font-bold text-base">Safer</div>
                <div>
                  <Link to="/terms">Terms</Link>
                </div>
                <div>
                  <Link to="/about">About us</Link>
                </div>
                <div>
                  <Link to="contact">Contact</Link>
                </div>
                <div>Community guidelines</div>
              </div>

              <div className="space-y-3">
                <div className="font-bold text-base">Social</div>
                <div>Instagram</div>
                <div>Linkedin</div>
                <div>Tiktok</div>
                <div>X (Twitter)</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center text-sm text-base text-center pt-12">
            © Copyright 2025, All rights reserved Safer technologies limited
          </div>
        </div>
      </div>
    </div>
  );
}
