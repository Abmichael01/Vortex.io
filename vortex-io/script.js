const animation = document.querySelector(".animation")

var texts = ["Home of money making updates",
            "Earn free money online",
            "Sure investment platforms",
            "Latest Crypto Updates" ]
var textIndex = 0
var charIndex = 0
var speed = 100

function type(){
    if(textIndex < texts.length){
        if(charIndex < texts[textIndex].length){
            animation.textContent += texts[textIndex].charAt(charIndex)
            charIndex++
            setTimeout(type, speed)
        }else{
            textIndex++
            charIndex = 0
            setTimeout(()=>{
                animation.textContent = ""
            }, 2500)
            setTimeout(type, 3000)
            
        }
    }else{
        textIndex = 0
        charIndex = 0
        setTimeout(type, 1000)
    }
}

setTimeout(()=>{
    type()
}, 2000)