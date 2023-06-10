import Image from "next/image";

export type IStep = {
  label: string;
  description: string;
  image: string;
};

const Step = (
  step: IStep & { index: number; imagePosition: "left" | "right" }
) => {
  const rowDirectionClass =
    step.imagePosition === "left" ? "" : "xl:flex-row-reverse";
  return (
    <div
      className={
        "flex flex-col items-center gap-8 text-[#1F343E] sm:mx-auto sm:flex-row sm:gap-12  " +
        rowDirectionClass
      }
    >
      <Image
        src={step.image}
        alt={step.label}
        className="block cursor-pointer"
        width="144"
        height="144"
      />
      <div className="flex flex-col  gap-y-4 text-center sm:max-w-[256px] sm:text-left">
        <h4 className="font-bold uppercase text-[#4EB3E3] md:text-xl">
          Step {step.index}
        </h4>
        <h3 className="font-caveatBrush text-[32px] uppercase">{step.label}</h3>
        <p className="md:text-xl">{step.description}</p>
      </div>
    </div>
  );
};

export default Step;
