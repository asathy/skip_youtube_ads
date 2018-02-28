# skip_youtube_ads

Intention: The chrome plugin developed in this project allows users to skip ads on youtube.

Just show me how to install and use it:

Steps(Assuming you are already chrome browser):
1. Download `chrome-extension` file from the current project
2. Click on the `three dots` located in top right-hand corner
3. Select `More Tools`->`Extensions`
4. Click on `Load Unpacked Extensions...` option & select the downloaded file(`chrome-extension`).
5. Voila! You will notice a new plugin added next to the `three dots`
6. Go To www.youtube.com and play any video and if you see an ad just click on the plugin to skip it!


Feel free to check out the contents of the file `chrome-extension`
Nothing is a secret! 

How does it work:
At its core, all the video players in the World Wide Web uses HTML5 video element to serve and play their content.
Ads are also a form of content which is played in the same video player. AND Youtube.com is no different. 
What the plugin actually does is:
1. It finds this video player on the webpage, 
2. Calculates the length of the video.(In our case `Ads`)
3. And finally sets the length of the video to the same video.

So if a `15 sec` ad is served, the plugin, make itself aware of the length of the played ad(`15 sec`) and fast forwards the ad to the 15th second, ultimately giving us the notion of skipping the ad. 
