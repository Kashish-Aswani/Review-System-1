let rname = document.getElementById("name-input");
let title = document.getElementById("title-input");
let desc = document.getElementById("description-input");
let subBtn = document.getElementById("btn");
let ul = document.getElementById("review-list");

subBtn.addEventListener("click", ()=>{

    let nameValue = rname.value;
    let titleValue = title.value;
    let descValue = desc.value;

    // checking if any of the field is empty

    if(nameValue == "" || titleValue == "" || descValue ==""){
        alert("All fields are required");
        rname.value="";
        title.value="";
        desc.value="";
    }

    else{
        let li = document.createElement("li");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        let i = document.createElement("i");

        h3.innerText = titleValue;
        p.innerText = descValue;
        i.innerText = `~ ${nameValue}`;

        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(i);



        ul.prepend(li);


        rname.value="";
        title.value="";
        desc.value="";
    }

    
})