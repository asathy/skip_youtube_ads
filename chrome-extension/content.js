
// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var html5element = document.getElementsByClassName("html5-main-video")[0];
      html5element.currentTime = html5element.duration;
      console.log("Ad skipped. To Thank, send razor.goes.to.school@gmail.com a cookie \;\)");
    }
  }
);
