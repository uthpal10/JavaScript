document.getElementById('ss').innerHTML="JS session is going on"

document.getElementById('cc').onclick = demo
function demo() 
{
    document.getElementById('cc').innerHTML = 'clicked';    
}

document.getElementById('dd').onclick = demo1;
function demo1() 
{
    document.getElementById('dt').innerHTML = Date();    
}

document.getElementById('hh').innerHTML = "hello! Good to see you here"