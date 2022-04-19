function addInfo(h, a, s, d, t, i, h1, h2, h3, h4){
    newMobInfo = {
        hp: `HP: ${h}`,
        atk: `ATK: ${a}`,
        spd: `SPEED: ${s}`,
        def: `DEF: ${d}`,
        total: `TOTAL: ${t}`,
        img: i,
        hab1: h1,
        hab2: h2,
        hab3: h3,
        hab4: h4
    }
    changeInfo(newMobInfo)
}


let i = 0
function changeInfo (mobObj){
    const pushLiInfo = document.getElementsByClassName("cards")

        document.getElementsByClassName("powerRank")[0].innerHTML = mobObj.hp
        document.getElementsByClassName("powerRank")[1].innerHTML = mobObj.atk
        document.getElementsByClassName("powerRank")[2].innerHTML = mobObj.spd
        document.getElementsByClassName("powerRank")[3].innerHTML = mobObj.def
        document.getElementsByClassName("powerRank")[4].innerHTML = mobObj.total

        receiveMobImg.setAttribute("src", mobObj.img)

        document.getElementsByClassName("nameSkills")[0].innerHTML = mobObj.hab1
        document.getElementsByClassName("nameSkills")[1].innerHTML = mobObj.hab2
        document.getElementsByClassName("nameSkills")[2].innerHTML = mobObj.hab3
        document.getElementsByClassName("nameSkills")[3].innerHTML = mobObj.hab4
        
}

const receiveMobImg = document.getElementById("mob") //link mob img


for (let count in document. getElementsByClassName("clickControl")){ //Add event in all Li
    document.getElementsByClassName("clickControl")[count].addEventListener("click", click1)
}


function click1 (event){
    /*All Cards modifications */
    if (event.target == document.getElementsByClassName("clickControl")[0]){
        document.body.style.background= "blue"
        addInfo(600, 300, 400, 350, 1650, "srcs/images/bubbleFull.png", "Maelstrom", "Alma dos Mares", "Projétil Espiral", "Clone de Água")
    }else if(event.target == document.getElementsByClassName("clickControl")[1]){
        document.body.style.background = "red"
        addInfo(400, 250, 200, 500, 1350, "srcs/images/felpFull.png")
    }else if(event.target == document.getElementsByClassName("clickControl")[2]){
        document.body.style.background = "mediumslateblue"
        addInfo(500, 650, 180, 200, 1530, "srcs/images/ghostFull.png")
        
    }else if(event.target == document.getElementsByClassName("clickControl")[3]){
        document.body.style.background = "burlywood"
        addInfo(400, 350, 700, 150, 1600,"srcs/images/horseFull.png" )

    }else if(event.target == document.getElementsByClassName("clickControl")[4]){
        document.body.style.background = "orchid"
        addInfo(700, 500, 350, 400, 1950, "srcs/images/penguFull.png")
        
    }else if(event.target == document.getElementsByClassName("clickControl")[5]){
        document.body.style.background = "greenyellow"
        addInfo(850,550,500,400,2300, "srcs/images/DragonFull.png")
    }

}
