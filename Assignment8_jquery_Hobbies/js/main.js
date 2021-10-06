const root = $("#root");
const ul = root.append("<ul><li>Singing</li></ul>");

function addHobby() {   

    const item = $("#hobby").val();
    $("#hobby").val("");
     ul.append("<li>"+item+"</li>");

}

