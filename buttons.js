 	var buttons = new Array(5);
    // Get a handle on the first button element in the document.
    var button0 = document.getElementsByName("origins");
    var button1 = document.getElementsByName( "evolution");
    var button2 = document.getElementsByName( "results");
    var button3 = document.getElementsByName( "next");
    var button4 = document.getElementsByName( "people");
    
    var content = 	document.getElementById("content");
  
    var content1 = document.getElementsByName("intro");
    var content2 = document.getElementById("instructions");
    
    function clickOrigins(){
    	content.src="origins.html";
        content.style.display="inline";
        //content2[0].style.display="inline";
        content1[0].style.display="none";
        
        button0[0].style.backgroundColor = "white";
        button0[0].style.color = "black";
       
        button1[0].style.removeProperty("background-color");
        button1[0].style.removeProperty("color");
        button2[0].style.removeProperty("background-color");
        button2[0].style.removeProperty("color");
        button3[0].style.removeProperty("background-color");
        button3[0].style.removeProperty("color");
        button4[0].style.removeProperty("background-color");
        button4[0].style.removeProperty("color");
        
        if(content2){
        	content2.style.display="none";
        }
    
    }
 
    // If a user clicks on it, say hello!
    button0[0].addEventListener( "click", function( ev ) {
    	//alert("Evolution Clicked");
        content.src="origins.html";
        content.style.display="inline";
        //content2[0].style.display="inline";
        content1[0].style.display="none";
        
        button0[0].style.backgroundColor = "white";
        button0[0].style.color = "black";
       
        button1[0].style.removeProperty("background-color");
        button1[0].style.removeProperty("color");
        button2[0].style.removeProperty("background-color");
        button2[0].style.removeProperty("color");
        button3[0].style.removeProperty("background-color");
        button3[0].style.removeProperty("color");
        button4[0].style.removeProperty("background-color");
        button4[0].style.removeProperty("color");
        if(content2){
        	content2.style.display="none";
        }
    }, false);
    
     button1[0].addEventListener( "click", function( ev ) {
     //alert("Evolution Clicked");
        content.src="evolution.html";
        content.style.display="inline";
        content1[0].style.display="none";
        //content2[0].style.display="none";
        button1[0].style.backgroundColor = "white";
        button1[0].style.color = "black";
        
        button0[0].style.removeProperty("background-color");
        button0[0].style.removeProperty("color");
        button2[0].style.removeProperty("background-color");
        button2[0].style.removeProperty("color");
        button3[0].style.removeProperty("background-color");
        button3[0].style.removeProperty("color");
        button4[0].style.removeProperty("background-color");
        button4[0].style.removeProperty("color");
        if(content2){
        	content2.style.display="none";
        }
        
    }, false);
 
  button2[0].addEventListener( "click", function( ev ) {
     //alert("Results Clicked");
        content.src="results.html";
        content.style.display="inline";
        content1[0].style.display="none";
        //content2[0].style.display="none";
        button2[0].style.backgroundColor = "white";
        button2[0].style.color = "black";
        
        button0[0].style.removeProperty("background-color");
        button0[0].style.removeProperty("color");
        button1[0].style.removeProperty("background-color");
        button1[0].style.removeProperty("color");
        button3[0].style.removeProperty("background-color");
        button3[0].style.removeProperty("color");
        button4[0].style.removeProperty("background-color");
        button4[0].style.removeProperty("color");
        if(content2){
        	content2.style.display="none";
        }
    }, false);
    
    button3[0].addEventListener( "click", function( ev ) {
     //alert("Next Clicked");
        content.src="next.html";
        content.style.display="inline";
        content1[0].style.display="none";
        //content2[0].style.display="none";
        button3[0].style.backgroundColor = "white";
        button3[0].style.color = "black";
        
        button0[0].style.removeProperty("background-color");
        button0[0].style.removeProperty("color");
        button1[0].style.removeProperty("background-color");
        button1[0].style.removeProperty("color");
        button2[0].style.removeProperty("background-color");
        button2[0].style.removeProperty("color");
        button4[0].style.removeProperty("background-color");
        button4[0].style.removeProperty("color");
        if(content2){
        	content2.style.display="none";
        }
    }, false);
    
    button4[0].addEventListener( "click", function( ev ) {
    // alert("People Clicked");
        content.src="people.html";
        content.style.display="inline";
        content1[0].style.display="none";
        //content2[0].style.display="none";
        button4[0].style.backgroundColor = "white";
        button4[0].style.color = "black";
        
        button0[0].style.removeProperty("background-color");
        button0[0].style.removeProperty("color");
        button1[0].style.removeProperty("background-color");
        button1[0].style.removeProperty("color");
        button2[0].style.removeProperty("background-color");
        button2[0].style.removeProperty("color");
        button3[0].style.removeProperty("background-color");
        button3[0].style.removeProperty("color");
        if(content2){
        	content2.style.display="none";
        }
    }, false);
    
    
    
    