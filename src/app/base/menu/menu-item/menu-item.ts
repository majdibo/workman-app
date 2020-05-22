export class MenuItem {

  title: string;
  icon?: string;
  link?: string;
  home?: boolean;

  group = false;

  children?: MenuItem[];
}

