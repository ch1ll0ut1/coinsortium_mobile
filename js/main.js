var app = {

    initialize: function() {
        var self = this;

        //initial global event handling
        this.registerEvents();

        //define route regex
        this.details_url = /^#security\/(\d{1,})/;

        //initialize api
        // this.coinsortium = new CoinsortiumApi();

        //initialize routing
        self.route();
    },

    coinsortium: {

        login: function(name, password){
            if(name == 'test' && password == 'test')
            {
                return true;
            }

            return false;
        },

        logout: function(){
            return true;
        },

        getSecurities: function(){
            return [{
                id: 0,
                ticker: 'ARDEVA',
                bid: 0.01, 
                ask: 0.01,   
                last: 0.01,   
                volume: 2.805,

                //for details | just in this dummy api, in real only by getSecurity()
                name: 'Ardeva',
                description: 'ARDEVA is a trust, verification and due-diligence platform used to verify someone before doing business with them. We have a broad range of verifications already in place, and are planning to add much more in the upcoming weeks.',
                listing_date: '2014-08-10 20:53:25',
                total_shares_issued: 280.5,
                dividends: 0,
                owner: 'Frederic Houle'
            },{
                id: 1,
                ticker: 'BARTER',
                bid: 0.00000555, 
                ask: 0.00000555,   
                last: 0.00000555,   
                volume: 0.0741036,

                //for details | just in this dummy api, in real only by getSecurity()
                name: 'Fuse Barter project',
                description: 'Fuse Barter Project (Working Name)– Company Equity without Cash Investments Equity Barter is an innovative funding concept for high-growth entrepreneurial companies in technology space. It is a barter scheme in which Fuse Barter Project (Working Name) invests in early stage technology start-ups companies. Equity barter is a great idea for companies in enterprise space which are ready to finance their growth. With a zero fee in cash, a significant campaign can be realized of a size which normally only accredited investors can afford. This can catapult entrepreneurial technology ventures into another league in terms of new customers, – for equity, not cash. The IRS recently declared Bitcoin to be treated as property instead of currency using this classification we can barter for equity shares in several areas that previously only accredited investors could using capital.',
                listing_date: '2014-08-10 20:53:25',
                total_shares_issued: 13352.00000555,
                dividends: 0,
                owner: 'Todd Arthur Pietila'
            },{
                id: 2,
                ticker: 'BIF',
                bid: 0.00501, 
                ask: 0.0069,   
                last: 0.0069,   
                volume: 0.112,

                //for details | just in this dummy api, in real only by getSecurity()
                name: 'BTC Index Fund',
                description: 'BTCIndexFund (BIF) is an index fund that includes a few bigger (more expensive) funds in it. It will allows smaller investors to invest in great stocks like TRADER and DEBT, all in one simplified stock that is less expensive to get in than the actual stocks, since it\'s subdivided in multiple parts.',
                listing_date: '2014-08-09 14:20:32',
                total_shares_issued: 2349,
                dividends: 0,
                owner: 'Frederic Houle'
            }];
        },

        getSecurity: function(id){
            var securities = app.coinsortium.getSecurities();

            for (var i = securities.length - 1; i >= 0; i--) 
            {
                if(securities[i].id == id)
                {
                    return securities[i];
                }
            };

            return undefined;
        }
    },

    registerEvents: function() {
        var self = this;

        //page routing
        $(window).on('hashchange', $.proxy(this.route, this));
    },

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    route: function() {
        var hash = window.location.hash;

        if (!hash) 
        {
            $('body').html(new ViewLogin(self.store).render().el);
            return;
        }

        if(hash == '#securities')
        {
            $('body').html(new ViewSecurities(self.store).render().el);
            return;
        }

        var match = hash.match(app.details_url);

        if(match) 
        {
            $('body').html(new ViewSecurity(self.store).render(Number(match[1])).el);
        }
    }
};

app.initialize();