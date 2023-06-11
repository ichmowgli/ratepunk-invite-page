import Image from "next/image";

const StoreLink = () => {
  return (
    <div className="mx-auto flex flex-col gap-4 md:flex-row xl:mx-0">
      <div className="flex max-w-[312px] flex-row gap-x-5 rounded-2xl border border-[#1F343E] px-6 py-[14px]">
        <Image
          src="/images/chrome.svg"
          alt="chrome"
          className="block cursor-pointer"
          width="56"
          height="52"
        />
        <div className="font-regular text-white">
          <p>available in the</p>
          <h4 className="text-xl font-bold">chrome web store</h4>
        </div>
      </div>
      <div className="flex max-w-[312px] flex-row gap-x-5 rounded-2xl border border-[#1F343E] px-6 py-[14px]">
        <Image
          src="/images/apple.svg"
          alt="apple store"
          className="block cursor-pointer"
          width="56"
          height="52"
        />
        <div className="font-regular bottom-0 text-white">
          <p>available in the</p>
          <h4 className="text-xl font-bold">apple app store</h4>
        </div>
      </div>
    </div>
  );
};

export default StoreLink;
