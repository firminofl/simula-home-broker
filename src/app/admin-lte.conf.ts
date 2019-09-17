import {Tesouro, Coe, RendaVariavel, FundosInvestimento} from './texts'

export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: 'Navegação', separator: true},
    {label: 'Início', route: '/', iconClasses: 'fa fa-dashboard'},
    {label: 'Tesouro Direto', route: 'tesouro-direto', iconClasses: 'fa fa-th'},
    {label: 'Home Broker', route: 'home-broker', iconClasses: 'fa fa-th'}
  ]
};
