"use client";

import Logo from "../Logo";
import Image from "next/image";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <div className="mx-auto flex max-w-544 flex-col gap-y-12 px-8 py-12 text-main md:px-0 xl:max-w-1120 xl:gap-y-0">
      <div className="flex flex-col gap-12 xl:flex-row xl:gap-x-32">
        <div className="flex max-w-544 flex-col gap-y-8">
          <Logo />
          <p>
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you’re getting the best deal!
          </p>
          <p className="hidden text-light-gray xl:inline-block">
            © 2021 Ratepunk. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col gap-x-[110px] gap-y-8 md:flex-row">
          <div className="links-distance">
            <h4 className="font-bold tracking-[1.28px]">QUICK LINKS</h4>
            <ul className="flex flex-col gap-y-[15px]">
              <li>
                <a href="#">Price Comparison</a>
              </li>
              <li>
                <a href="#">Chrome Extension</a>
              </li>
              <li>
                <a href="#">How It Works</a>
              </li>
              <li>
                <a href="#">Ratepunk Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-8 md:justify-between">
            <div className="links-distance">
              <h4 className="font-bold tracking-[1.28px]">CONTACT</h4>
              <div className="flex flex-row gap-x-4">
                <Image
                  src="/images/email-footer.svg"
                  alt="email"
                  className="block cursor-pointer"
                  width="16"
                  height="13"
                />
                <a href="#">hi@ratepunk.com</a>
              </div>
            </div>
            <div className="links-distance">
              <h4 className="font-bold tracking-[1.28px]">SOCIAL</h4>
              <div className="flex flex-row gap-2">
                <SocialLink>
                  <Image
                    src="/images/instagram.svg"
                    alt="instagram"
                    className="block cursor-pointer"
                    width="16"
                    height="16"
                  />
                </SocialLink>

                <SocialLink>
                  <Image
                    src="/images/facebook.svg"
                    alt="facebook"
                    className="block cursor-pointer"
                    width="16"
                    height="16"
                  />
                </SocialLink>

                <SocialLink>
                  <Image
                    src="/images/linkedin.svg"
                    alt="linkedin"
                    className="block cursor-pointer"
                    width="16"
                    height="16"
                  />
                </SocialLink>

                <SocialLink>
                  <Image
                    src="/images/twitter.svg"
                    alt="twitter"
                    className="block cursor-pointer"
                    width="16"
                    height="16"
                  />
                </SocialLink>

                <SocialLink>
                  <Image
                    src="/images/tiktok.svg"
                    alt="tiktok"
                    className="block cursor-pointer"
                    width="16"
                    height="16"
                  />
                </SocialLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-light-gray xl:hidden">
        © 2021 Ratepunk. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
