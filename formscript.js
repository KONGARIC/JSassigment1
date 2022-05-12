function validate(){
    var n=document.getElementById('name');  
    var email=document.getElementById('email'); 
    var message=document.getElementById('message'); 
    if(n.value=='' || n.value==null){
        document.getElementById('nameError').style.opacity=1;
        return false;
    }
    else{
        document.getElementById('nameError').style.opacity=0;

    }
    if(email.value=='' || email.value==null){
        document.getElementById('emailError').style.opacity=1;
        return false;
    }
    else{
        document.getElementById('emailError').style.opacity=0;

    }
    if(message.value=='' || message.value==null){
        document.getElementById('messageError').style.opacity=1;
        return false;
    }
    else{
        document.getElementById('messageError').style.opacity=0;

    }
    return true;
}


