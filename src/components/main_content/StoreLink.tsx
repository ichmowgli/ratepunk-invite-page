import Image from "next/image";

const StoreLink = () => {
  return (
    <div className="mx-auto flex flex-col gap-4 md:flex-row xl:mx-0">
      <a
        href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
        className="flex max-w-312 flex-row gap-x-5 rounded-2xl border border-main px-6 py-[14px]"
      >
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
      </a>
      <a
        href="https://apps.apple.com/app/ratepunk/id1607823726"
        className="flex max-w-312 flex-row gap-x-5 rounded-2xl border border-main px-6 py-[14px]"
      >
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
      </a>
    </div>
  );
};

export default StoreLink;
