let getXMLFile = function(path, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", path);
    request.setRequestHeader("Content-Type","text/xml");
    request.onreadystatechnage = function() {
        if (request.readyState ==4 && request.status== 200) {
            callback(request.responseXML);
        }
    };
    request.send();
}

getXMLFile("cinema.xml", function(xml) {
    console.log(xml);
});