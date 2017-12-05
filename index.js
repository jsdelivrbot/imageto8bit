document.getElementById('getval').addEventListener('change', readURL, true);
function readURL(){
    var file = document.getElementById("getval").files[0];
    var reader = new FileReader();
    reader.onloadend = function(){

        var img = new Image();
        img.onload = function () {
            eightBit(document.getElementById('mycanvas'), img, 10);
        };
        img.src = reader.result;        
    }
    if(file){
        reader.readAsDataURL(file);
    }
}


