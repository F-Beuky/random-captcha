// تولید یک کد کپچای 5 کاراکتری از حروف کوچک و بزرگ و اعداد
var r=0
var s=""
var asciiCode=0,asciiCharacter="";


for(var i=1;i<=5;i++)
{
    r=Math.floor(Math.random()*3)
    switch (r){
        case 0:
            s=s+Math.floor(Math.random()*10)
            break;

        case 1:
            asciiCode=Math.floor(Math.random()*(122-97+1))+97
            asciiCharacter=String.fromCharCode(asciiCode)
            s=s+asciiCharacter
            break

        case 2:
            asciiCode=Math.floor(Math.random()*(90-65+1))+65
            asciiCharacter=String.fromCharCode(asciiCode)
            s=s+asciiCharacter        
            break
    }
}

console.log("Your Capcha Code: ",s)


