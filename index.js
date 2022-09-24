

function search(){
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();

    ul = document.getElementById("myUl");
    li = ul.getElementsByTagName("li");
    
    for(let i = 0; i < li.length; i++){
        h3 = li[i].getElementsByTagName("h3")[0];
        txtValue = h3.textContent || h3.innerText;
    
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}


