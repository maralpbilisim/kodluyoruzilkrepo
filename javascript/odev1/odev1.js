let isim=prompt("isminizi giriniz")

document.getElementById("myName").innerHTML=`${isim[0].toUpperCase()}${isim.slice(1).toLowerCase()}` //baş harfi büyütmek için bu kodu yazdım.
    

    
    function showTime() {
      let days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
    ];
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById("myClock").innerHTML =  h + ":" + m + ":" + s +days[today.getDay()];
        setTimeout(showTime, 1000);
      }
      
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  
        return i;
      }
     
