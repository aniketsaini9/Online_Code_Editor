    // code for executing the input code
    function run(){
        //fetchhing the inner values of html, css, js textfields.
    let htmlcode = document.getElementById("htmlcode").value;
    let csscode = document.getElementById("csscode").value;
    let jscode = document.getElementById("jscode").value;
    let output = document.getElementById("frame");
     /* concating the html css and javascript files into the output
     iframe element.*/
        output.contentDocument.body.innerHTML = htmlcode +
        "<Style>" + csscode + "</Style>";
    output.contentWindow.eval(jscode);

    }
    let count=1;
    function btn() {
        /*If Lock button is pressed one time, the editor is disabled
      if the button is press two times the editor is enabled.*/
    count++;
    if(count%2==0){
    document.getElementById("htmlcode").disabled = true;
    document.getElementById("csscode").disabled = true;
    document.getElementById("jscode").disabled = true;
    }
    else
    {
    document.getElementById("htmlcode").disabled = false;
    document.getElementById("csscode").disabled = false;
    document.getElementById("jscode").disabled = false;
    
    }
    }


    // code for copy button 
    function htmlcopy() {
    // Get the text field
    let htmlcode = document.getElementById("htmlcode");

    // Select the text field
    htmlcode.select();
    htmlcode.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(htmlcode.value);
    
    } 
    // code for copy button 
    function csscopy() {
    // Get the text field
    let csscode = document.getElementById("csscode");
  
    // Select the text field
    csscode.select();
    csscode.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(csscode.value);
    
    } 
    // code for copy button 
    function jscopy() {
    // Get the text field
    let jscode = document.getElementById("jscode");
  
    // Select the text field
    jscode.select();
    jscode.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(jscode.value);
    
    } 
      






