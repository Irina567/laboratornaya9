var drums = $('.drum')

w = new Audio("sounds/crash.mp3")
a = new Audio("sounds/kick-bass.mp3")
s = new Audio("sounds/snare.mp3")
d= new Audio("sounds/tom-1.mp3")
j= new Audio("sounds/tom-2.mp3")
k= new Audio("sounds/tom-3.mp3")
l= new Audio("sounds/tom-4.mp3")

document.addEventListener("keypress", async event=>{
    if(event.code == "KeyW")
    {
        w.currentTime = 0;
        w.play()
    }
    else if(event.code == "KeyA")
    {
        a.currentTime = 0;
        a.play()
    }
    else if(event.code == "KeyS")
    {
        s.currentTime = 0;
        s.play()
    }
    else if(event.code == "KeyD")
    {
        d.currentTime = 0;
        d.play()
    }
    else if(event.code == "KeyJ")
    {
        j.currentTime = 0;
        j.play()
    }
    else if(event.code == "KeyK")
    {
        k.currentTime = 0;
        k.play()
    }
    else if(event.code == "KeyL")
    {
        l.currentTime = 0;
        l.play()
    }
})


for(let drum of drums){

    drum.addEventListener("click", event => {
        if(drum.classList.contains("w")){
            w.play()
        }
        else if(drum.classList.contains("a"))
        {
            a.play()
        }
        else if(drum.classList.contains("s"))
        {
            s.play()
        }
        else if(drum.classList.contains("d"))
        {
            d.play()
        }
        else if(drum.classList.contains("j"))
        {
            j.play()
        }
        else if(drum.classList.contains("k"))
        {
            k.play()
        }
        else if(drum.classList.contains("l"))
        {
            l.play()
        }
    })
}