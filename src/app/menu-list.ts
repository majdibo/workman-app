import {MenuItem} from './base/menu/menu-item/menu-item';

export const MENU_LIST: MenuItem[] = [
  {
    title: 'Definitions',
    group: true
  },
  {
    title: 'Process Definition',
    icon: 'call_split',
    link: '/process'
  },
  {
    title: 'Task Definition',
    icon: 'task_alt',
    link: '/process/tasks'
  },

  {
    title: 'Executions',
    group: true
  },
  {
    title: 'Process',
    icon: 'timeline',
    link: '/process'
  },
];
