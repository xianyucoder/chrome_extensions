console.log(jQuery)
const url = chrome.runtime.getURL('options.html');
$.get(url,function (text){
    $("body").append($(text))
})