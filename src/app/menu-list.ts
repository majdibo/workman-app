import {MenuItem} from './base/menu/menu-item/menu-item';

export const MENU_LIST: MenuItem[] = [
  {
    title: 'Definitions',
    group: true
  },
  {
    title: 'Process Definition',
    icon: 'home',
    link: '/process'
  },
  {
    title: 'Task Definition',
    icon: 'star',
    link: '/process'
  },

  {
    title: 'Executions',
    group: true
  },
  {
    title: 'Process',
    icon: 'star',
    link: '/process'
  },
];
