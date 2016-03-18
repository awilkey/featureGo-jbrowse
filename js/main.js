define([
           'dojo/_base/declare',
           'JBrowse/Plugin'
       ],
       function(
           declare,
           JBrowsePlugin
       ) {
return declare( JBrowsePlugin,
{
    constructor: function( args ) {
        var browser = args.browser;

        // do anything you need to initialize your plugin here
	
        console.log( "featureGo plugin starting" );
	browser.afterMilestone( 'initView', function() {
		var feature = browser.config.queryParams.gotofeature;

		if(feature){
			delete browser.config.queryParams.gotofeature;
			browser.nameStore.query({name:feature}).then(
			function(matches){ 
				if(matches){
					var loc= matches[0].location;
					var match= loc.ref+":"+loc.start+".."+loc.end;
					console.log(match);
					browser.navigateTo(match);
				}
			});		
		}
	});
    }

});
});
