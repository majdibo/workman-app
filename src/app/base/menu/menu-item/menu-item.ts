export interface MenuItem {

  title: string;
  icon?: string;
  link?: string;
  home?: boolean;

  group?: boolean;

  children?: MenuItem[];
}

