import { Button } from "@/common/components/ui/button";

interface ActionsProps {
  handleClose?: () => void;
}

function Actions({ handleClose }: ActionsProps) {
  return (
    <div className="flex w-full flex-col gap-6 sm:flex-row sm:gap-4">
      <Button
        className="w-full sm:basis-1/2 lg:w-32"
        variant="secondary"
        onClick={handleClose}
      >
        Login
      </Button>
      <Button
        className="w-full sm:basis-1/2 lg:w-32"
        variant="primary"
        onClick={handleClose}
      >
        Sign up
      </Button>
    </div>
  );
}

export default Actions;
