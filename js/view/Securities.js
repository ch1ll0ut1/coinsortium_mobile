var ViewSecurities = function(store) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
    };

	this.render = function() {

		var securities = app.coinsortium.getSecurities();

	    this.el.html(ViewSecurities.tpl.securities(securities));
	    return this;
	};

	//start initiation
    this.initialize();
}

ViewSecurities.tpl = {
    securities: Handlebars.compile($("#tpl_securities").html())
};