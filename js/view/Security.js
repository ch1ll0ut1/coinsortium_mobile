var ViewSecurity = function(store) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
    };

	this.render = function(id) {

		var security = app.coinsortium.getSecurity(id);

	    this.el.html(ViewSecurity.tpl.security(security));
	    return this;
	};

	//start initiation
    this.initialize();
}

ViewSecurity.tpl = {
    security: Handlebars.compile($("#tpl_security").html())
};