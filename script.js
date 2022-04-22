function addInfo(MobName, h, a, s, d, t, i, h1, h2, h3, h4, color, num){
    newMobInfo = {
        name: MobName,
        hp: `HP: ${h}`,
        atk: `ATK: ${a}`,
        spd: `SPEED: ${s}`,
        def: `DEF: ${d}`,
        total: `TOTAL: ${t}`,
        img: i,
        hab1: h1,
        hab2: h2,
        hab3: h3,
        hab4: h4,
        cardColor: color,
        number: num
    }
    changeInfo(newMobInfo)
} /*Função que recebe argumentos como informações*/


let i = 0
function changeInfo (mobObj){
    const pushLiInfo = document.getElementsByClassName("cards")

        document.getElementsByClassName("mobName")[0].innerHTML = mobObj.name

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

        document.getElementsByClassName("mobInfo")[0].style.backgroundImage = mobObj.cardColor

        document.getElementsByClassName("mobNumber")[0].innerHTML = mobObj.number
} /*Alterações no HTML e CSS utilizando o objeto addInfo*/ 

const receiveMobImg = document.getElementById("mob") //link mob img


for (let count in document. getElementsByClassName("clickControl")){ //Add event in all Li
    document.getElementsByClassName("clickControl")[count].addEventListener("click", click1)
} /*Adição de eventos em cada card*/ 


function click1 (event){
    /*All Cards modifications */
    document.getElementsByClassName("mobsCard")[0].animate([
        
        {transform: 'skew(30deg, -6deg' },
        { transform: 'skew(0deg, 0deg' }], {
        duration: 1000,
      });
    if (event.target == document.getElementsByClassName("clickControl")[0]){

        setTimeout(()=>{addInfo("Mizu",600, 300, 400, 350, 1650, "srcs/images/mobs/bubbleFull.png", "Maelstrom", "Alma dos Mares", "Projétil Espiral", "Clone de Água", "linear-gradient(40deg, #fd2595f5, #67fcffc9, #A658EC)", "#005")

        document.body.style.backgroundImage= "url(srcs/images/backgrounds/water.jpg)"
    
        document.getElementsByTagName("img")[0].setAttribute("src", "srcs/images/elements/water.png")}, 1000) 

    }else if(event.target == document.getElementsByClassName("clickControl")[1]){
        
        setTimeout(()=>{addInfo("Flukye",400, 250, 200, 500, 1350, "srcs/images/mobs/felpFull.png", "Microwave", "Cabeçada", "Estrondo", "Expansão", "linear-gradient(350deg, #f30707d7, #f0197ad7, #f98dfdd7)", "#002")
    
        document.body.style.backgroundImage = "url(srcs/images/backgrounds/earth.jpg)"
    
        document.getElementsByTagName("img")[0].setAttribute("src", "srcs/images/elements/Earth.png")}, 1000)

    }else if(event.target == document.getElementsByClassName("clickControl")[2]){

        setTimeout(()=>{addInfo("Yoruu",500, 650, 180, 200, 1530, "srcs/images/mobs/ghostFull.png", "Usurpar", "Sentença", "Pesadelo Sem Fim", "Devaneio", "linear-gradient(30deg, #0d0ddad7, #5b2ca0d7, #132531d7)", "#013")

        document.body.style.backgroundImage = "url(srcs/images/backgrounds/night.jpg)"
    
        document.getElementsByTagName("img")[0].setAttribute("src", "srcs/images/elements/dark.png")},1000)

        
    }else if(event.target == document.getElementsByClassName("clickControl")[3]){
        
        setTimeout(()=>{addInfo("Kaminari",400, 350, 700, 150, 1600,"srcs/images/mobs/horseFull.png", "Thunderbolt", "Hekireki", "Kirin", "Ondas Elétricas", " linear-gradient(30deg, #0069B5d7, #e0dd14d7, #7916b6d7)", "#024")

        document.body.style.backgroundImage = "url(srcs/images/backgrounds/thunder.jpg)"

        document.getElementsByTagName("img")[0].setAttribute("src", "srcs/images/elements/thunder.png")},1000)

        

    }else if(event.target == document.getElementsByClassName("clickControl")[4]){
        
        setTimeout(()=>{addInfo("Senshi",700, 500, 350, 400, 1950, "srcs/images/mobs/penguFull.png","Quebrar", "Bushido", "Redemoinho", "Ventania Cortante", "linear-gradient(220deg, #438017d7, #ff8331d7, #4b443bd7)", "#028")

        document.body.style.backgroundImage = "url(srcs/images/backgrounds/air.jpg)"
    
    
        document.getElementsByTagName("img")[0].setAttribute("src", "srcs/images/elements/air.png")},1000)
        
        
    }else if(event.target == document.getElementsByClassName("clickControl")[5]){
       
        setTimeout(()=>{addInfo("Unmei",850,550,500,400,2300, "srcs/images/mobs/DragonFull.png", "Prisão de Lava", "Dispersão Solar", "Boreal", "Mandamento Das Chamas", "linear-gradient(230deg, #15132d77, #E2224Ed7, #f7b843d7)", "#034")

        document.body.style.backgroundImage = "url(srcs/images/backgrounds/fire.jpg)"
    
        document.getElementsByTagName("img")[0].setAttribute("src", "srcs/images/elements/fire.png")  },1000)

    }

    
}
