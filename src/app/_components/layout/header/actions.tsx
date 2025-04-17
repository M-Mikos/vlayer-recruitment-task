import { Button } from "@/common/components/ui/button";

function Actions() {
  return (
    <div className="flex w-full gap-6 flex-col sm:flex-row sm:gap-4">
      <Button className="w-full sm:basis-1/2 lg:w-32" variant="secondary">
        Login
      </Button>
      <Button className="w-full sm:basis-1/2 lg:w-32" variant="primary">
        Sign up
      </Button>
    </div>
  );
}

export default Actions;
