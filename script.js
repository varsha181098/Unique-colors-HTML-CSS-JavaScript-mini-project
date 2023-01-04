const contaienrEl = document.getElementById('container');
function codeGenerator(){
let string='0123456789abcdef'
let color="#"
for(let i=0;i<6;i++){
    let num= Math.floor(Math.random()*string.length)
    color+=string[num]
}
return color
}

setInterval(()=>{
    contaienrEl.innerHTML = '';
    for(let i=0;i<20;i++ ){ 
        const divEl=document.createElement('div')
        divEl.className="box"
        let color = codeGenerator()
        divEl.style.backgroundColor = color;
        divEl.innerText = color;
        contaienrEl.appendChild(divEl)
       
        }
},1000)

