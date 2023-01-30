window.addEventListener("load", function () {
    
    document.getElementById("copybtn").style.display = "none";
    document.getElementById("short2").style.display = "none";
    
    var ans = "";
    var word = "abcdefghijkmnpqrstuvwxyz";
    var num = Math.floor( Math.random()* 99 ) + 1 ;
    if (num < 10 ){
        num = "0" + num;
    }
    
    for (var i = 0; i < 2; i++){
        ans += word.charAt( Math.floor( Math.random() * 24 ));
    }
    
    ans += num;
    document.getElementById("short1").value = ans;
    
    document.getElementById("enter").addEventListener("click", function () {
        var longurl = document.getElementById("long3").value;
        var shorturl = document.getElementById("short1").value;
        
        if(longurl == ""){
            alert("長網址欄位不得為空!");
        }
        else if(shorturl == ""){
            alert("短網址欄位不得為空!");
        }
        else if( longurl.indexOf("https://") != -1 || longurl.indexOf("http://") != -1 ){
            
            document.getElementById("enter").style.display = "none";
            document.getElementById("copybtn").style.display = "block";
            document.getElementById("textdiv").style.display = "none";
            document.getElementById("short1").style.display = "none";
            document.getElementById("short2").style.display = "block";
            
            var url = 'https://script.google.com/macros/s/AKfycbx4X_zNO_Ppq4WkMFtaQcYNLtw8B8Rml_gbeX5Psfcl6x_-AVVf19_kPxiHI1JXHwLwtw/exec?name=' + shorturl + "&url=" + longurl;
            
            fetch(url)
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return "error";
                    }
                })
                .then(function (data) {
                    var ansurl = data;
                    document.getElementById("short2").value = ansurl;
                    document.querySelector("#long3").readOnly = true;
                })
                .catch(function (error) {
                    console.log('Something went wrong: ', error);
                });
        }
        else{
            alert("長網址欄位須包含https://或http://");
        }
    });
});

function copyfunction() {
    var copyText = document.getElementById("short2");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    //alert("已複製: " + copyText.value);
}
