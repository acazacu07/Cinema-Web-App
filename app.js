console.log('it works')
   

$(document).ready(function() {
    
    ReadFileForXml ();

  $('#title').change(function(){
      ReadFileForXmlForAttributeValue( this.value );
    });    
    
});


function ReadFileForXmlForAttributeValue(filmTitle){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status==200) {
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(xhttp.responseText,"text/xml");
        ReadTimeWithTitle(xmlDoc , filmTitle);

      }
  };
    
    
xhttp.open("GET", "https://raw.githubusercontent.com/acazacu07/Cinema-Web-App/master/cinema.xml", true);
xhttp.send()

console.log('xmlDoc');}


function ReadTimeWithTitle (xml , filmTitle){
    
    var path = "/cinema/film[@title='$input_title']/time".replace('$input_title', filmTitle);
    
      
    
    var txt ="";
  if (xml.evaluate) {
      var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
      var result = nodes.iterateNext();
      while (result) {
        txt += result.childNodes[0].nodeValue
        result = nodes.iterateNext();

          result = nodes.iterateNext();
      }
    
  }
  document.getElementById("time_for_title").innerHTML = txt;
}


//Define function ReadFileForXml

  function ReadFileForXml(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status==200) {
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(xhttp.responseText,"text/xml");
        createDropDown(xmlDoc);

      }
};
  xhttp.open("GET", "https://raw.githubusercontent.com/acazacu07/Cinema-Web-App/master/cinema.xml", true);
  xhttp.send();

}


function createDropDown(xml){
  var txt = "";
  path = "/cinema/film/@title";
  select = document.getElementById('title');


  if (xml.evaluate) {
      var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
      var result = nodes.iterateNext();
      while (result) {
          var opt = document.createElement('option');
          opt.value = result.value;
          opt.innerHTML = result.value;
          select.appendChild(opt);

          result = nodes.iterateNext();
      }
  }

};


/*dropdown genre

function createDropDown(xml){
  var txt = "";
  path = "/cinema/film/@genre";
  select = document.getElementById('genre');


  if (xml.evaluate) {
      var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
      var result = nodes.iterateNext();
      while (result) {
          var opt = document.createElement('option');
          opt.value = result.value;
          opt.innerHTML = result.value;
          select.appendChild(opt);

          result = nodes.iterateNext();
      }
  }

};

//button

function dosomethingNice () {
$(document).ready(function() {

ReadFileForXml (); })

function ReadFileForXml(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status==200) {
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(xhttp.responseText,"text/xml");
        show results(xmlDoc);

      }
  }
  xhttp.open("GET", "https://raw.githubusercontent.com/acazacu07/Cinema-Web-App/master/ticket.xml", true);
  xhttp.send();

}
}

function showResult(xml) {
    var txt = "";
    path = "/ticket/ticket-adult";
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        }
document.getElementById("demo").innerHTML = txt;
} */			