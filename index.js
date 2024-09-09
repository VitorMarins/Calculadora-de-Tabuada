function tabuada(){
    if (document.getElementById('tabuada').value != "" & Math.sign(document.getElementById('tabuada').value) == 1){
        var tab = parseInt(document.getElementById('tabuada').value);
        for(var count=1; count<=10; count++){
            document.write(tab + " x " + count + " = " + tab * count + "<br>")
        }
    }
}