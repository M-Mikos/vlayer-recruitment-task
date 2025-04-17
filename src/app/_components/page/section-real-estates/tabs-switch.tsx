import { Dispatch, SetStateAction } from "react";

interface TabsSwitchProps {
  tabs: string[];
  current: string;
  setTab: Dispatch<SetStateAction<string>>;
}

function TabsSwitch({ tabs, current, setTab }: TabsSwitchProps) {
  const currentTabStyles = {
    fontWeight: "700",
    backgroundColor: "#ffffff",
    color: "#8b8aff",
  };

  return (
    <div
      className="group border-base-300 bg-secondary-50 group-hover:bg-secondary-50 flex gap-1.5 rounded-lg border p-2"
      role="tablist"
      aria-label="Tab navigation"
    >
      {tabs.map((tab: string) => (
        <button
          key={tab}
          onClick={() => setTab(tab)}
          style={tab === current ? currentTabStyles : undefined}
          className="font-lg text-base-600 group-hover:text-secondary-300 active:border-secondary-100 active:bg-secondary-50 focus-visible:border-secondary-300 focus-visible:bg-secondary-600/20 flex h-12 min-w-[9rem] items-center justify-center rounded-lg bg-transparent font-medium tracking-tight capitalize"
          role="tab"
          aria-selected={tab === current}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TabsSwitch;
