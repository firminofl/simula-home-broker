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
    {label: 'Início', route: '/', iconClasses: 'fa fa-road', pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
    {label: 'Layout', iconClasses: 'fa fa-th-list', children: [
        {label: 'Configuração', route: 'layout/configuration'},
        {label: 'Customização', route: 'layout/custom'},
        {label: 'Cabeçalho', route: 'layout/header'},
        {label: 'Sidebar Esquerdo', route: 'layout/sidebar-left'},
        {label: 'Sidebar Direito', route: 'layout/sidebar-right'},
        {label: 'Atual', route: 'layout/content'}
      ]},
    {label: 'Componentes', separator: true},
    {label: 'Acordição', route: 'accordion', iconClasses: 'fa fa-tasks'},
    {label: 'Alertas', route: 'alert', iconClasses: 'fa fa-exclamation-triangle'},
    {label: 'Caixas', iconClasses: 'fa fa-files-o', children: [
        {label: 'Caixa padrão', route: 'boxs/box'},
        {label: 'Caixa informativa', route: 'boxs/info-box'},
        {label: 'Caixa pequena', route: 'boxs/small-box'}
      ]},
    {label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v'},
    {label: 'Formulário', iconClasses: 'fa fa-files-o', children: [
        {label: 'Entrada de texto', route: 'form/input-text'}
    ]},
    {label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th'}
  ]
};
