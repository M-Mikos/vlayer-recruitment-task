export interface NavigationItemProps extends React.HTMLAttributes<HTMLElement> {
  path: string;
  label: string;
  title: string;
  handleClose?: () => void;
}

export interface NavigationItemInterface extends Omit<NavigationItemProps, "handleClose"> {
  uid: string;
}

export interface SocialMediaItemInterface extends NavigationItemInterface {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface StatsItemProps {
  value: number;
  suffix: string;
  label: string;
}

export interface StatsItemInterface extends StatsItemProps {
  uid: string;
}
