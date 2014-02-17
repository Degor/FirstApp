Ext.define('FirstApp.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homepanel',
	
	config: {
		title: 'Home',
		iconCls: 'home',
		cls: 'home',
		scrollable: true,
		styleHtmlContent: true,
		
		html: [
            '<img height=260 src="http://staging.sencha.com/img/sencha.png" />',
            '<h1>Welcome to Sencha Touch</h1>',
            "<p>Building the Getting Started app.</p>",
            '<h2>Sencha Touch</h2>'
        ].join("")
	}
});