    //variable global
    let color = '';

    document.addEventListener("keydown", function (event) {
        let slc = document.getElementById("seleccionado")
        if (event.key === 'a' || event.key === 'A') {
            slc.style.backgroundColor = "#966B9D";
            color = "#966B9D"
        } else if (event.key === 's' || event.key === 'S') {
            slc.style.backgroundColor = "#C98686";
            color = "#C98686"
        } else if (event.key === 'd' || event.key === 'D') {
            slc.style.backgroundColor = "#F2B880";
            color = "#F2B880"
        } else {
            document.getElementsByClassName("outputMessage").innerHTML = "Presiona alguna tecla válida"
        }
    })

    const box1 = document.getElementById("div1")
    const box2 = document.getElementById("div2")
    const box3 = document.getElementById("div3")
    const box4 = document.getElementById("div4")

    box1.addEventListener("click", () => box1.style.backgroundColor = color)
    box2.addEventListener("click", () => box2.style.backgroundColor = color)
    box3.addEventListener("click", () => box3.style.backgroundColor = color)
    box4.addEventListener("click", () => box4.style.backgroundColor = color)

    /*
    ejemplo en guía
    document.addEventListener('keydown', function (event) 
    { if (event.key === 'a') { 
        } else if (event.key === 's') { 
        } })
    */