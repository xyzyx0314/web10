y1200=0;
y1700=0;
y2400=0;
y2900=0;
y3400=0;
y3800=0;
y4200=0;
y4800=0;
y5400=0;
y5800=0;
y6400=0;
y6800=0;
y7100=0;
y8000=0;
y8200=0;
y8700=0;
y9100=0;

y10500=0;
y107700=0;

window.addEventListener('scroll',(event) => {
    console.log(window.scrollX, window.scrollY)
    y=window.scrollY;
    if (y>=1200 && y1200==0)
    {
        y1200=1;
        /*document.getElementById('.mid-lt-showpho').style.display = '';*/
        document.querySelector('.mid-lt-showpho').style.animationPlayState = '';
        document.querySelector('.mid-lt-showback').style.animationPlayState = '';
        document.querySelector('.mid-rt-showpho').style.animationPlayState = '';
        document.querySelector('.mid-rt-showback').style.animationPlayState = '';
        document.querySelector('.mid-mid-word').style.animationPlayState = '';
        document.querySelector('.mid-lt1-show').style.animationPlayState = '';
        document.querySelector('.mid-lt2-show').style.animationPlayState = '';
        document.querySelector('.mid-lt3-show').style.animationPlayState = '';
    } 
    if (y>=1700)
    {
        y1200=1;        y1700=1;
        document.querySelector('.abo-top').style.animationPlayState = '';
    }
    if (y>=2400)
    {
        y1200=1;        y1700=1;        y2400=1;
        document.querySelector('.abo-mid').style.animationPlayState = '';
    }
    if (y>=2900)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        document.querySelector('.abo-bot').style.animationPlayState = '';
    }
    if (y>=3400)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;
        document.querySelector('.m-con-lt').style.animationPlayState = '';
        document.querySelector('.con1-num').style.animationPlayState = '';
        document.querySelector('.con1').style.animationPlayState = '';
    }
    if (y>=3800)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;
        document.querySelector('.con2-num').style.animationPlayState = '';
        document.querySelector('.con2').style.animationPlayState = '';
    }
    if (y>=4200)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;        y4200=1;
        document.querySelector('.con3-num').style.animationPlayState = '';
        document.querySelector('.con3').style.animationPlayState = '';
    }
    if (y>=4800)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;        y4200=1;        y4800=1;
        document.querySelector('.m-how').style.animationPlayState = '';
    }
    if (y>=5400)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;        y4200=1;        y4800=1;
        y5400=1;
        document.querySelector('.m-use-top').style.animationPlayState = '';
    }
    if (y>=5800)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;        y4200=1;        y4800=1;
        y5400=1;        y5800=1;
        document.querySelector('.m-use-mid').style.animationPlayState = '';
    }    
    if (y>=6400)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;        y4200=1;        y4800=1;
        y5400=1;        y5800=1;        y6400=1;
        document.querySelector('.m-use-bot').style.animationPlayState = '';
    }

    if (y>=7100)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;        y4200=1;        y4800=1;
        y5400=1;        y5800=1;        y6400=1;        y7100=1;
        document.querySelector('.m-com').style.animationPlayState = '';
    }

    if (y>=8000)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;        y4200=1;        y4800=1;
        y5400=1;        y5800=1;        y6400=1;        y7100=1;
        y8000=1;
        document.querySelector('.m-item-top').style.animationPlayState = '';
    }

    if (y>=8200)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;        y4200=1;        y4800=1;
        y5400=1;        y5800=1;        y6400=1;        y7100=1;
        y8000=1;        y8200=1;
        document.querySelector('.m-item-bot1').style.animationPlayState = '';
    }
    if (y>=8700)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;        y4200=1;        y4800=1;
        y5400=1;        y5800=1;        y6400=1;        y7100=1;
        y8000=1;        y8200=1;        y8700=1;
        document.querySelector('.m-item-bot2').style.animationPlayState = '';
    }
    if (y>=9100)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;        y4200=1;        y4800=1;
        y5400=1;        y5800=1;        y6400=1;        y7100=1;
        y8000=1;        y8200=1;        y8700=1;        y9100=1;
        document.querySelector('.m-item-bot3').style.animationPlayState = '';
    }

    if (y>=9700)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;        y4200=1;        y4800=1;
        y5400=1;        y5800=1;        y6400=1;        y7100=1;
        y8000=1;        y8200=1;        y8700=1;        y9100=1;
        y9700=1;
        document.querySelector('.m-fund-top').style.animationPlayState = '';
    }
    if (y>=9900)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;        y4200=1;        y4800=1;
        y5400=1;        y5800=1;        y6400=1;        y7100=1;
        y8000=1;        y8200=1;        y8700=1;        y9100=1;
        y9700=1;        y9900=1;
        document.querySelector('.m-fund-bot').style.animationPlayState = '';
    }
    if (y>=10500)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;        y4200=1;        y4800=1;
        y5400=1;        y5800=1;        y6400=1;        y7100=1;
        y8000=1;        y8200=1;        y8700=1;        y9100=1;
        y9700=1;        y9900=1;        y10500=1;
        document.querySelector('.m-buy-top').style.animationPlayState = '';
    }
    if (y>=10700)
    {
        y1200=1;        y1700=1;        y2400=1;        y2900=1;
        y3400=1;        y3800=1;        y4200=1;        y4800=1;
        y5400=1;        y5800=1;        y6400=1;        y7100=1;
        y8000=1;        y8200=1;        y8700=1;        y9100=1;
        y9700=1;        y9900=1;        y10500=1;       y10700=1;
        document.querySelector('.m-buy-bot').style.animationPlayState = '';
    }
    if (y<=1800 || y>=8000)
    {
        document.getElementById("b-top").style.opacity="0";
        document.getElementById("b-top").classList.add("downmove");
        document.getElementById("b-top").classList.remove("upmove");
    }
    if (y>=1800 && y<=8000)
    {
        document.getElementById("b-top").style.opacity="0.7";
        document.getElementById("b-top").classList.remove("downmove");
        document.getElementById("b-top").classList.add("upmove");
    }
});