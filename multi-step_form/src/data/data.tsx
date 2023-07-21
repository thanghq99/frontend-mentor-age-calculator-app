import ArcadeIcon from '@/public/assets/images/icon-arcade.svg';
import AdvancedIcon from '@/public//assets/images/icon-advanced.svg';
import ProIcon from '@/public/assets/images/icon-pro.svg';

export interface Plan {
  id: number;
  icon: any;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

export interface AddOn {
  id: number;
  name: string;
  description: string;
  price: number;
}

export const plans: Plan[] = [
  {
    id: 0,
    icon: ArcadeIcon,
    name: 'arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    id: 1,
    icon: AdvancedIcon,
    name: 'advanced',
    monthlyPrice: 9,
    yearlyPrice: 12,
  },
  {
    id: 2,
    icon: ProIcon,
    name: 'pro',
    monthlyPrice: 9,
    yearlyPrice: 15,
  },
];

export const addOns: AddOn[] = [
  {
    id: 0,
    name: 'online service',
    description: 'access to multiplayer games',
    price: 10,
  },
  {
    id: 1,
    name: 'larger storage',
    description: 'access to multiplayer games',
    price: 10,
  },
  {
    id: 2,
    name: 'customizable profile',
    description: 'access to multiplayer games',
    price: 10,
  },
];
