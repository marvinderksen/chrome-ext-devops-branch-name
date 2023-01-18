const script1 = document.createElement("script");
script1.src = chrome.runtime.getURL("button.js");
script1.type = "module";
(document.head || document.documentElement).appendChild(script1);

const script2 = document.createElement("script");
script2.src = chrome.runtime.getURL("page-pr.js");
script2.type = "module";
(document.head || document.documentElement).appendChild(script2);

const script3 = document.createElement("script");
script3.src = chrome.runtime.getURL("page-prcreate.js");
script3.type = "module";
(document.head || document.documentElement).appendChild(script3);
