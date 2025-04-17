export interface NavigationItemProps extends React.HTMLAttributes<HTMLElement> {
  path: string;
  label: string;
  title: string;
  handleClose?: () => void;
}

export interface NavigationItemInterface extends Omit<NavigationItemProps, "handleClose"> {
  uuid: string;
}

export interface SocialMediaItemInterface extends NavigationItemInterface {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
