import { RouteObject } from 'react-router-dom';
import { ReactNode } from 'react';
export interface RouteMeta {
  // antd menu selectedKeys
  key: string;
  // menu label
  label: string;
  // menu prefix icon
  icon?: ReactNode;
  // menu suffix icon
  suffix?: ReactNode;
  // show in tab
  hideTab?: boolean;
  /**
   * Show in menu
   *
   * @default false
   */
  hideMenu?: boolean;
  // disable in menu
  disabled?: boolean;
  // need to auth,
  auth?: boolean;
  // react router outlet
  outlet?: any;
  // use to refresh tab
  timeStamp?: string;
}

export type AppRouteObject = {
  order?: number;
  meta?: RouteMeta;
  children?: AppRouteObject[];
} & Omit<RouteObject, 'children'>;


// 获取router
export function getMenuModules() {
  const menuModules: AppRouteObject[] = [];

  const modules = import.meta.glob('./routes/module/**/*.tsx', { eager: true });
  Object.keys(modules).forEach((key) => {
    const mod = (modules as any)[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    menuModules.push(...modList);
  });
  return menuModules;
}