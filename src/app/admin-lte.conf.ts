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
    {label: 'Renda Fixa', iconClasses: 'fa fa-th-list', children: [
      {label: 'Tesouro Direto', route: 'tesouro-direto'},
    ]},
    {label: 'Home Broker', route: 'home-broker', iconClasses: 'fa fa-tasks'},
    {label: 'Carteira', route: 'carteira', iconClasses: 'fa fa-tasks'}
  ]
};
