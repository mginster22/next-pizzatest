import { cn } from "@/shared/lib/utils";
import { ArrowUpDown } from "lucide-react";
import * as React from "react";

interface SortPopup {
  className?: string;
}

const SortPopup: React.FunctionComponent<SortPopup> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
        className
      )}
    >
      <ArrowUpDown size={16} />
      <b>Сортировка:</b>
      <b className="text-primary">популярное</b>
    </div>
  );
};

export default SortPopup;
