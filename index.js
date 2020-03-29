let id = 0;

function check(e){
    const target = e.target.dataset.id
    console.log(target);
    const text = document.getElementById(`p${target}`);
    console.log(text)

    //const cheked = e.target.dataset.cheked
    //if (cheked){
    //    text.style.setProperty("text-decoration", "line-through")
    //    document.getElementById(target).setAttribute("data-cheked", !cheked);
    //}
    //else {
    //    text.style.removeProperty('text-decoration')
    //    document.getElementById(target).setAttribute("data-cheked", !cheked);
    //}

    text.classList.toggle("checked")
    if (text.classList.contains("checked")){
        e.target.innerHTML = "uncheck"
    } else {
        e.target.innerHTML = "check"
    } 
}

function errase(e){
    const target = e.target.dataset.id
    const items = document.getElementById("items")
    const item = document.getElementById(target)
    items.removeChild(item)
}

function submit(e) {
    e.preventDefault();
    const input = document.getElementById("input");
    let list = document.getElementById("items");
    list.innerHTML += 
    `
    <div class="item" id="${id}">
        <p class="item-p" id="p${id}"> ${input.value} </p>
        <div>
            <button class="btn-add" data-id="${id}" onclick="check(event)">check</button>
            <button class="btn-delete" data-id="${id}" onclick="errase(event)">delete</button>
        </div>
    </div>
    `;
    id = id+ 1;
    input.value = "";
}

function init(){
    document.getElementById("form").addEventListener("submit", submit);
}

window.onload = init();