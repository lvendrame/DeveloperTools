(function(window){
    var MenuItem = function(name, url, parent){
        this.name = name;
        this.url = url;
        this.children = [];

        parent.children.push(this);
    };

    var root = {children:[]};
    var groupMenu = new MenuItem("Portuguese", "", root);

    new MenuItem("CPF", "#Portuguese/cpf", groupMenu);

    window.rootMenu = root;

})(window);
