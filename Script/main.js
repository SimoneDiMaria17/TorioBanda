function diable(id){
    let bottone = document.getElementById(id);
    if(bottone.disabled == true)
    {
        bottone.disabled = false
    }else{
        bottone.disabled = true
    }
}

