export interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  class: string;
  submenu?: RouteInfo[];
}
