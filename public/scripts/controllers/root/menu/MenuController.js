var MenuController = function(ng, rootMenu){
    ng.menu = rootMenu;
    ng.sideMenu = rootMenu[0].sideMenu;

    ng.changeSideMenu = function(sideMenu){
        ng.sideMenu = sideMenu;
    };
};

MenuController.$inject = ['$scope', 'rootMenu'];
