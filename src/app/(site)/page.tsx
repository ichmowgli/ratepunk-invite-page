import ReferalCard from "@/components/main_content/ReferalCard";
import Step, { type IStep } from "@/components/main_content/Step";

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
  );
}
