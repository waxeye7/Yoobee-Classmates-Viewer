let ClassDatabase;
async function fetch_data() {
    const response = await fetch("./class.json");
    let js_version_of_data = await response.json();
    ClassDatabase = js_version_of_data;
    for(let student of ClassDatabase) {
        MaterialiseStudent(student);
    }
}

let parent = document.getElementById("parent-of-yoobee-students");
fetch_data();

function MaterialiseStudent(student) {
    let Card_Div = document.createElement('div');
    let Full_Name_H1 = document.createElement('h1');

    let InitialsH1 = document.createElement('h1');

    let InitialsDivWrapper = document.createElement('div');

    let extra_info = document.createElement("div")


    Full_Name_H1.innerHTML = student.First_Name + " " + student.Last_Name;
    InitialsH1.innerHTML = student.First_Name[0] + student.Last_Name[0];

    Card_Div.classList.add('clean');
    Full_Name_H1.classList.add("h1-control");
    InitialsH1.classList.add('initials', 'div-wrapper-h1');
    extra_info.classList.add("extra-info")



    let Child = document.createElement('child');
    parent.appendChild(Child);


    InitialsDivWrapper.appendChild(InitialsH1);
    Card_Div.appendChild(InitialsDivWrapper);
    Card_Div.appendChild(Full_Name_H1);

    Child.appendChild(Card_Div);

    Child.appendChild(extra_info);

    extra_info.innerHTML = 'hi';



    extra_info.classList.add("hide");
    Card_Div.onclick = function() {
        extra_info.classList.toggle("hide");

        let allCards = document.getElementsByClassName("extra-info");
        for(let card of allCards) 
        if(card.parentNode != this.parentNode)
            card.classList.add("hide");

    }
    extra_info.onclick = function() {
        let nameURL = student.First_Name.toLowerCase() + "." + student.Last_Name.toLowerCase();
        window.open("http://" + nameURL + ".yoobeestudent.net/")        
    }

    // extra_info.notonclick = function() {
    //     let allCards = document.getElementsByClassName("extra-info");
    //     for(let card of allCards) 
    //     if(card.parentNode != this.parentNode)
    //         card.classList.add("hide");
    // }
}