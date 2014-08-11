var ViewLogin = function(store) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');

        //register login button event
        this.el.on('click', 'button', $.proxy(this.login, this));
    };

	this.render = function() {
	    this.el.html(ViewLogin.tpl.login());
	    return this;
	};

	this.login = function() {

		var user = this.el.find('#login_name').val();
		var pwd = this.el.find('#login_pwd').val();

		if(app.coinsortium.login(user, pwd))
		{
			window.location.hash = '#securities';
		}
		else
		{
			app.showAlert('Wrong credentials! Please try again.');
		}
	};

	//start initiation
    this.initialize();
}

ViewLogin.tpl = {
    login: Handlebars.compile($("#tpl_login").html())/*,
    securities: Handlebars.compile($("#employee-li-tpl").html())*/
};