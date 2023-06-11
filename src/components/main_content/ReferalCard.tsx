"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import isEmail from "validator/es/lib/isEmail";

let savedCode = "abc";

const GetReferralForm = ({ onSuccess }: { onSuccess: () => any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const gerReferralCode = async (email: string) => {
    await fetch(
      "https://api.jsonbin.io/v3/b/" + process.env.NEXT_PUBLIC_JSONBIN_BIN_ID,
      {
        method: "PUT",
        headers: {
          "X-Master-Key": atob(
            process.env.NEXT_PUBLIC_JSONBIN_ACCESS_KEY_BASE64!
          ),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lastSubmittedEmail: email,
        }),
      }
    ).then((res) => res.json());
    return "referral";
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        gerReferralCode(data.email).then((code) => {
          savedCode = code;
          onSuccess();
        });
      })}
      className="grid gap-4 md:pt-1"
    >
      {errors.email?.type == "required" && (
        <span className="text-red-500">This field is required</span>
      )}
      {errors.email?.type == "validate" && (
        <span className="text-red-500">This field has to be an email</span>
      )}

      <div className="flex flex-row gap-x-4 rounded-lg border border-[#1F343E]  p-4">
        <Image
          src="/images/email.svg"
          alt="email"
          className="block cursor-pointer"
          width="16"
          height="13"
        />
        <input
          {...register("email", { required: true, validate: isEmail })}
          className="w-full text-[#375360] focus:outline-none "
          placeholder="Enter your email address"
        />
      </div>
      <button
        type="submit"
        className="align-center  mx-auto w-full rounded-lg border border-[#1F343E] bg-[#4EB3E3] py-4 font-bold text-white"
      >
        Get Referral Link
      </button>
    </form>
  );
};

const ReferralLink = ({ code }: { code: string }) => {
  const url = "https://ratepunk.com/" + code;

  return (
    <div className="grid gap-4 md:pt-1">
      <div className="flex flex-row items-center gap-4 ">
        <Image
          src="/images/success.svg"
          alt="success"
          className="block cursor-pointer md:h-8 md:w-8"
          width="24"
          height="24"
        />
        <p className="font-bold">Your email is confirmed!</p>
      </div>
      <div className="flex flex-col gap-y-4 md:flex-row md:justify-between  md:text-xl">
        <p className="rounded-lg border border-[#1F343E] p-4 text-[#6D7A80] md:w-full md:rounded-none md:rounded-l-lg md:border-r-0">
          {url}
        </p>

        <button
          onClick={() => {
            navigator.clipboard.writeText(url);
          }}
          className="rounded-lg  border border-[#1F343E] bg-[#4EB3E3] py-4 font-bold text-white md:rounded-none md:rounded-r-lg md:border-y md:border-r md:px-6"
        >
          Copy <span className="md:hidden">URL</span>
        </button>
      </div>
    </div>
  );
};

const ReferalCard = () => {
  const [showReferralLink, setShowReferralLink] = useState(false);

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
      {showReferralLink ? (
        <ReferralLink code={savedCode} />
      ) : (
        <GetReferralForm onSuccess={() => setShowReferralLink(true)} />
      )}
      <p className="pt-12 text-[#6D7A80] md:pt-[121px] md:text-xl">
        Limits on max rewards apply.
      </p>
    </div>
  );
};

export default ReferalCard;
