


const num = 10

function createGrid(num)
{
    for(let i = 0; i < num * num; i++)
    {
        const container= document.querySelector("#container")
        const squareDiv = document.createElement("div");
        
        const w = 600 / num;
        squareDiv.style.width =w +"px";
        squareDiv.style.height=w +"px";
        squareDiv.style.border = " 1px solid";
        squareDiv.style.boxSizing= "border-box";
        squareDiv.classList.add("square");
        container.appendChild(squareDiv);
    }
}

document.getElementById("container").addEventListener("mouseover", (e) =>{
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
       if(e.target.classList.contains("square"))
        {
            //e.target.style.backgroundColor = 'red';
            e.target.style.backgroundColor = `rgb(${r},${g},${b})`
        }
    
})
document.getElementById("rangeInput").addEventListener("input",(e) =>{
    let range = document.getElementById("rangeInput");
    let rangeText = document.getElementById("sizeText")
    rangeText.textContent=`${range.value} x ${range.value}`
    const elements = container.getElementsByClassName("square");
    let listOfSquares = Array.from(elements);
    listOfSquares.forEach(element =>{
        container.removeChild(element);
        
    })
    createGrid(range.value);
    
})

document.getElementById("reset").addEventListener('click',(e)=>{
    const elements = container.getElementsByClassName("square");
    let listOfSquares = Array.from(elements);
    listOfSquares.forEach(element =>{
        container.removeChild(element);
        
    })
    createGrid(num);
})

createGrid(num);



