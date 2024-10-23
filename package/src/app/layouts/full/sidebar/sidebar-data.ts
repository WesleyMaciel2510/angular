import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    bgcolor: 'primary',
    route: '/dashboard',
  },
  {
    navCap: 'Formuláios',
  },
  {
    displayName: 'Forms',
    iconName: 'stethoscope',
    bgcolor: 'primary',
    route: '/ui-components/forms',
  },
  {
    displayName: 'Badge',
    iconName: 'pill',
    bgcolor: 'primary',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Chips',
    iconName: 'poker-chip',
    bgcolor: 'primary',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Lists',
    iconName: 'list',
    bgcolor: 'primary',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'layout-navbar-expand',
    bgcolor: 'primary',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Tooltips',
    iconName: 'tooltip',
    bgcolor: 'primary',
    route: '/ui-components/tooltips',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    bgcolor: 'primary',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    bgcolor: 'primary',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'heart',
    bgcolor: 'primary',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'aperture',
    bgcolor: 'primary',
    route: '/extra/sample-page',
  },
];
