import { Paragraph } from "@/common/components/ui/paragraph";
import { StatsItemProps } from "@/types";

function StatsItem({ value, suffix, label }: StatsItemProps) {
  return (
    <div className="pl-6 border-l-[3px] border-base-300 w-40">
      <div className="text-3xl font-bold text-text-accent leading-[1.25] tracking-tight mb-1">
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
