//  Submitted by Jagadeesh Kumar . S 
//  My name is Jagadeesh Kumar . S 
//  My Email Address is jagadeesh_2k17@proton.me 
//  Kindly contribute some money to my UPI address which is jagadeesh-kumar.ybl

var content = document.getElementById('content');
var active;
var prev;

function data1(ele){
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json", true);
    request.send();
    request.onload = function () {
        var data = JSON.parse(this.response);

        content.innerHTML=''
        var no;

        for(var i = 1; i < 11; i++){
            if(document.getElementById(i).classList.contains("active")){
                prev=i;
                document.getElementById(i).classList.remove("active");
                document.getElementById(i).disabled=false;
            }
        }
        
        if (ele.value == 'Previous'){
            prev=prev-1;
            no=(prev)*10;
            document.getElementById(prev).className='active';

        }
        else if(prev == 0){
            prev = 10;
            document.getElementById(prev).className='active';
        }
        else if (ele.value == 'Next'){
            prev=prev+ +1;
            no=(prev)*10;
            document.getElementById(prev).className='active';
        }

        else if (ele.value == "First"){
            prev = 1;
            no=(prev)*10;
            document.getElementById(prev).className='active';
        }

        else if (ele.value == "Last"){
            prev = 10;
            no=(prev)*10;
            document.getElementById(prev).className='active';
        }

        else{
            no=ele.value*10;
        }

        ele.classList.toggle("active");

        if(ele.classList.contains("active")){
            ele.disabled = true;
        }

        for(var i = no - 10; i < no; i++){
            content.innerHTML += `id:${data[i].id} </br> name: ${data[i].name} </br> email: ${data[i].email} <br>`
        }

        document.getElementById('11').disabled=false;
        document.getElementById('12').disabled=false;
        document.getElementById('13').disabled=false;
        document.getElementById('14').disabled=false;
    }
}

//  Submitted by Jagadeesh Kumar . S 
//  My name is Jagadeesh Kumar . S 
//  My Email Address is jagadeesh_2k17@proton.me 
//  Kindly contribute some money to my UPI address which is jagadeesh-kumar.ybl