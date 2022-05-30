function savefile(){

    let f_Name=document.getElementById("fname");
    let l_Name=document.getElementById("lname");
    let E_Mail=document.getElementById("email");
    let MSG=document.getElementById("message");

    let formsdata= "Name: " + f_Name.value + ' ' + l_Name.value + '\n' +
    "Email:" + E_Mail.value + '\n'+ "Message: " + MSG.value + '\n' ;

    //Writing Data in Console
    console.log(formsdata);
    var datatoblob = new Blob([formsdata],{type:"text/plane"});
    
            
            let newLink = document.createElement("a");
            newLink.download = "file.txt";

            if(window.webkitURL!=null){
                newLink.href = window.webkitURL.createObjectURL(datatoblob);
            } else  {
                newLink.href = window.URL.createObjectURL(datatoblob);
            }
            

            newLink.click();


};