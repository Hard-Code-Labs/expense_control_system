import {
  ChartPieIcon,
  RectangleGroupIcon,
  TableCellsIcon,
  Cog6ToothIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/solid';

export const links = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: ChartPieIcon,
  },
  {
    name: 'Category',
    href: '/category',
    icon: RectangleGroupIcon,
  },
  { 
    name: 'Data',
    href: '/data',
    icon: TableCellsIcon, 
  },
  { 
    name: 'Preferences',
    href: '/preferences',
    icon: Cog6ToothIcon, 
  },
];