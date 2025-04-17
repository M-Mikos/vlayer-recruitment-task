import { Button } from "@/common/components/ui/button";

function Actions() {
  return (
    <div className="flex w-full gap-6 flex-col lg:flex-row lg:gap-4">
      <Button className="w-full lg:w-32" variant="secondary">
        Login
      </Button>
      <Button className="w-full lg:w-32" variant="primary">
        Sign up
      </Button>
    </div>
  );
}

export default Actions;
