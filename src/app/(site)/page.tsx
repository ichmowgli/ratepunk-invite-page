"use client";

import ReferalCard from "@/components/main_content/ReferalCard";
import Step, { type IStep } from "@/components/main_content/Step";
import StoreLink from "@/components/main_content/StoreLink";
import { Icon } from "@iconify/react";

const steps: IStep[] = [
  {
    label: "Invite friends",
    description: "Refer friends with your unique referral link",
    image: "/images/invite.svg",
  },
  {
    label: "Collect coins",
    description:
      "Get 1 coin for each friend that installs our extension using your referral link.",
    image: "/images/collect-coins.svg",
  },
  {
    label: "Get voucher",
    description:
      "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
    image: "/images/voucher.svg",
  },
];

export default function Home() {
  return (
    <>
      <div className="bg-[#F8CC5D]">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-y-12 px-4 py-8 md:px-0 md:py-16 xl:flex-row xl:justify-between xl:gap-x-32">
          <ReferalCard />
          <div className="grid gap-y-12">
            {steps.map((step, index) => (
              <Step
                key={index}
                index={index + 1}
                {...step}
                imagePosition={index % 2 ? "right" : "left"}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="border-y border-black bg-[#45565E]">
        <div className="mx-auto flex max-w-[1120px] flex-col justify-center	 gap-4 p-8 xl:flex-row xl:justify-normal xl:gap-8 xl:px-0">
          <StoreLink />
          <div className="flex items-center justify-center gap-x-4 pt-2 xl:pt-0">
            <div className="flex gap-x-1">
              <Icon icon="ion:star" color="white" width="16" height="16" />
              <Icon icon="ion:star" color="white" width="16" height="16" />
              <Icon icon="ion:star" color="white" width="16" height="16" />
              <Icon icon="ion:star" color="white" width="16" height="16" />
              <Icon icon="ion:star" color="white" width="16" height="16" />
            </div>
            <p className="text-white md:text-xl ">Chrome Store reviews</p>
          </div>
        </div>
      </div>
    </>
  );
}
