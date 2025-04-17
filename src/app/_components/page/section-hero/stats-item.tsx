import { Paragraph } from "@/common/components/ui/paragraph";
import { StatsItemProps } from "@/types";

function StatsItem({ value, suffix, label }: StatsItemProps) {
  return (
    <div className="border-base-300 max-w-40 basis-1/2 border-l-[3px] pl-6 lg:w-40 lg:basis-auto">
      <div className="text-text-accent mb-1 text-3xl leading-[1.25] font-bold tracking-tight">
        <span>{value}</span>
        <span>{suffix}</span>
      </div>
      <Paragraph asChild>
        <span>{label}</span>
      </Paragraph>
    </div>
  );
}

export default StatsItem;
