import Image from "next/image";

type Step = {
  label: string;
  description: string;
  image: string;
};

const steps: Step[] = [
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

interface StepProps {
  idx: number;
}

const Step: React.FC<StepProps> = ({ idx }) => {
  const step = steps[idx - 1];
  return (
    <div className="flex flex-col items-center gap-8 text-[#1F343E] sm:flex-row">
      <Image
        src={step.image}
        alt="email"
        className="block cursor-pointer"
        width="144"
        height="144"
      />
      <div className="flex flex-col gap-y-4 text-center sm:text-left">
        <h4 className="font-bold uppercase text-[#4EB3E3] ">Step {idx}</h4>
        <h3 className="font-caveatBrush text-[32px] uppercase">{step.label}</h3>
        <p>{step.description}</p>
      </div>
    </div>
  );
};

export default Step;
