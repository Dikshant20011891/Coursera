setInterval (() =>{
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    hrotate = 30*h + m/2; // seconds are negligible 12h = 360, 60min = 30 degree
    mrotate = 6*m;  // 60 min = 360 degree
    srotate = 6*s;  // similar as minute

    document.getElementById("hour").style.transform = `rotate(${hrotate}deg)`;
    document.getElementById("min").style.transform = `rotate(${mrotate}deg)`;
    document.getElementById("sec").style.transform = `rotate(${srotate}deg)`;

},1000);