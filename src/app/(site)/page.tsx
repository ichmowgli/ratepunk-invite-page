import ReferalCard from "@/components/main_content/ReferalCard";
import Step from "@/components/main_content/Step";

export default function Home() {
  return (
    <div className="bg-[#F8CC5D] ">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center px-4 py-8 md:py-16 xl:flex-row xl:justify-between xl:gap-x-32">
        <ReferalCard />
        <div className="grid gap-y-12 pt-12">
          <Step idx={1} />
          <Step idx={2} />
          <Step idx={3} />
        </div>
      </div>
    </div>
  );
}
