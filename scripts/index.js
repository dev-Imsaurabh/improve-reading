import nav from "../components/nav.js";

document.querySelector("#navbar").innerHTML=nav()
let status =0

let toSplit=""
let content =document.querySelector("#content");
let set_content_btn=document.querySelector("#content_btn");
set_content_btn.onclick=()=>{

    if(content.value!=""){
        toSplit=content.value
        status=1
        content.style.display="none";
        set_content_btn.style.display="none"


    }else{

        alert("Enter content")
    }




}

let banner = document.querySelector("#banner");
let id;
let play_btn =document.querySelector("#play_btn");
play_btn.onclick=()=>{

    playText()

   

   


}

let delay =250


let speed =document.querySelector("#speed")
speed.addEventListener("change",function(){

    delay=speed.value
    clearInterval(id)
    reset()
    console.log(delay)

})

function playText(){
    if(status==0){
        alert("Set the content first")
        return
    }
    if(play_btn.innerText=="Play"){
        play_btn.innerText="Stop"
        let data=toSplit.split(" ");
        let length = data.length;
    
    let i =0
       id = setInterval(() => {
    
            if(i==length-1){
                clearInterval(id)
               reset()
    
    
            }
    
            banner.innerText=data[i]
            i++
    
            
        }, delay);
    }else{
        clearInterval(id)
        reset()
    }
}


function reset(){
    banner.innerText="Read me"
    play_btn.innerText="Play"
    content.style.display="block";
    set_content_btn.style.display="block"
    status=0

}