function myAlert() {
    var NewWindow= window.open("submit.html","newWindow");
    var nameValue = document.getElementById("vname").value;
    NewWindow.document.write("<p>Some text followed by form value </p>"+  nameValue );
    }
    