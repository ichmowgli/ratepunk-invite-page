"use client";
import Image from "next/image";

const ReferalCard = () => {
  return (
    <div className="mx-auto grid max-w-[544px] gap-[25px] rounded-2xl border border-[#1F343E] bg-white px-4 py-8 text-[#1F343E] md:gap-8 md:p-16 xl:m-0">
      <h2 className="font-caveatBrush text-[32px] uppercase md:text-5xl">
        REFER FRIENDS AND GET REWARDS
      </h2>
      <p className="md:text-xl">
        Refer your friends to us and earn hotel booking vouchers. We&apos;ll
        give you 1 coin for each friend that installs our extension. Minimum
        cash-out at 20 coins.
      </p>
      <div className="grid gap-4 md:pt-1">
        <div className="flex flex-row gap-x-4 rounded-lg border border-[#1F343E]	p-4">
          <Image
            src="/images/email.svg"
            alt="email"
            className="block cursor-pointer"
            width="16"
            height="13"
          />
          <input
            type="email"
            className="w-full text-[#375360] focus:outline-none "
            placeholder="Enter your email address"
          />
        </div>
        <button
          onClick={() => {}}
          className="align-center	mx-auto w-full rounded-lg border border-[#1F343E] bg-[#4EB3E3] py-4 font-bold text-white"
        >
          Get Referral Link
        </button>
      </div>
      <p className="pt-12 text-[#6D7A80] md:pt-[121px] md:text-xl">
        Limits on max rewards apply.
      </p>
    </div>
  );
};

export default ReferalCard;
