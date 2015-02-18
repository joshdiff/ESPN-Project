# ESPN-Project
<h2>Welcome Player Stats Version 1.0 featuring the Golden State Warriors!!</h2>
Please select a player to the left to view their stats for the 2014/2015 season (stats are as of 2/17/2015)

<h2>How this page works</h2>
 - Player information is initially loaded from a JSON file which would normally be retrieved by an AJAX request.
 - Once the file is loaded, each entery is used to create a <strong>Player Object</strong>
 - The Player Object stores general information and all statistics for that particular Player
 - The Player Object also currently has one fuction called <strong>showStats()</strong> which shows their stats in the right pane.
 - As each Player Object is created, it is saved into a local JavaScript array to call for display and future editing on the screen (editing coming in v2.0)
 - Finally, all Player Objects are displayed on the left
