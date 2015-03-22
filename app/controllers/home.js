var args = arguments[0] || {}; //loads whatever from index.js. We technically don't need this here.'

/* Adds the options wrench in Android and is supposed to add options menu for iOS
 * Works for Android but haven't tested on iOS
 */
function clickedSettings(e) {
	var settingsController = Alloy.createController('settings');
	var win = settingsController.getView();

	if (Alloy.Globals.navgroup) {
		Alloy.Globals.navgroup.openWindow(win);
	} else if (OS_ANDROID) {
		win.open();
	}
}

//Main page buttons, likened to the WT app

// cob button
//opens the WT CoB page. Correct me if this is the wrong site.
$.cobButton.addEventListener('click', function(e)
{
	Ti.Platform.openURL("http://www.wtamu.edu/academics/college-business.aspx");
}); 

// calendar button
//not functional yet
$.calendarButton.addEventListener('click', function(e)
{
	Titanium.Platform.openURL('CALSHOW://');
});

// contact us button
//Not functional yet
$.contactButton.addEventListener('click', function(e)
{
	alert('This will open the internal Contact Us Page.');
});
 //---------------------------------------------------
 
 // facebook button
 
 /*I want to try to get the FB button to one the CoB page if the FB app is installed
	 * else open in a browser. The YouTube app does this naturally but that is a Googleism
	 * whereas FB is a Zuckerbergism. His stuff is always a bit behind the trend. (See: 
	 * Circa 2013 FB app for Android) 
	 * As it stands, the button simply opens it in the default browser. Safari in iOS and 
	 * whatever you selected in Android
	 * 
	 * I really would like to get this functionality done by end of semester.
	 */
$.facebookButton.addEventListener('click', function(e)
{
	Ti.Platform.openURL("http://www.facebook.com/WTAMUCOB");
	
	/*var strUrl = "http://www.facebook.com/WTAMUCOB";
	if (OS_IOS) {
	    strUrl = "http://www.facebook.com/WTAMUCOB";
	    if (Titanium.Platform.canOpenURL(strUrl)) {
	        Ti.Platform.openURL(strUrl);
	    } else {
	        strUrl = "http://www.facebook.com/WTAMUCOB";
	        Ti.Platform.openURL(strUrl);
	    }
	} else {
	
	    var result = Ti.Platform.openURL(strUrl);
	    Ti.API.info('RESULT = ' + result);
	}  */
});

// youtube button

/* Need to test on iOS without YT app installed to see if it is functionally consistent
 * On Android, GApps generally tend to work this way: 
 * If installed, open with app, 
 * else, open with browser.
 * Makes things a lot easier on the developer.
 */
$.youtubeButton.addEventListener('click', function(e)
{
	Ti.Platform.openURL("https://www.youtube.com/channel/UCENCoEEcsLJvyWaMjonwFuQ");
});

//---------------------------------------------------

// open window
$.home.open();