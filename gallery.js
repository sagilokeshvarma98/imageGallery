
let index = 1

let photoObject = {
    1 : "Beautiful tree",
    2 : "Road between trees",
    3 : "Green Hills",
    4 : "Morning dew",
    5 : "Green Hills",
    6 : "Coffe time",
    7 : "Sunrise",
    8 : "Water on leaf",
}

$(document).ready(()=>{
    $('#galleryDisplay').hide()
    let code1 = ""
    let keyArray = Object.keys(photoObject)
    for(let i of keyArray){
        console.log(i);
        code1+=`<div class="imageDiv" onclick="zoomImage(${i})">
        <img id="clickImg" src="image${i}.jpg" alt="">
        <p>${photoObject[i]}</p>
        </div>`
    }
    console.log(code1);
    $('#gotFromJs').html(code1)
})

function insertImages(){
    let mainCode = ""
    for(let x=index;x<=(index+3);x++){
        if(x<=8){
            code = `<img src='image${x}.jpg' class="scroll" onclick="sendUp(${x})" alt=''>`
            mainCode+=code
        }
    }
    $('#displayGallery').html(mainCode);
}


function sendUp(a){
    zoomImage(a)
}

function zoomImage(imgNo){
    index = imgNo
    $('#normalDisplay').attr("class", 'disable-div')
    $('#galleryDisplay').show()
    $("#zoomImage").attr("src", "image"+index+".jpg");
    insertImages()
}

function leftImage(){
    if(index>1)
        index-=1
    $("#zoomImage").attr("src", "image"+index+".jpg");
    insertImages()
}

function rightImage(){
    if(index<8)
        index+=1
    $("#zoomImage").attr("src", "image"+index+".jpg");
    insertImages()
}

function closeImage(){
    $('#normalDisplay').attr("class", 'able-div')
    $('#galleryDisplay').hide()
}