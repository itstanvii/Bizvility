function dropdown(){
    document.getElementById("dropdown").classList.toggle("show");
}
window.onclick=function(event){
    if(!event.target.matched('.userbutton')){
        var dropdowns=document.getElementsByClassName("dropdown-content");
        var i;
        for(i=0;i<dropdowns.length;i++){
            var openDropdown=dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}
function dropdown_icon(event){
    event.stopPropagation();
    document.getElementById("dropdown_icon").classList.toggle("show_add");
}
window.onclick=function(event){
    if(!event.target.matches('.fa-caret-down')){
        var dropdown_icon=document.getElementsByClassName("dropdown_icon_content");
        var i;
        for(i=0;i<dropdown_icon.length;i++){
            var openDropdown=dropdown_icon[i];
            if(openDropdown.classList.contains('show_add')){
                openDropdown.classList.remove('show_add');
            }   
        }
    }
}
// document.addEventListener("DOMContentLoaded", function() {
//     const toggleButton = document.querySelector('.navbutton');
//     const sidebar = document.querySelector('.sidebar');
//     const rightContainer = document.querySelector('.right_container');
//     const icons = document.querySelectorAll('.icons');

//     const sidebarWidth = () => window.innerWidth <= 519 ? 300 : 400;

//     toggleButton.addEventListener('click', function() {
//         sidebar.classList.toggle('active');
//         if (sidebar.classList.contains('active')) {
//             rightContainer.classList.add('expanded');
//             rightContainer.style.marginLeft = `${sidebarWidth()}px`;
//             rightContainer.style.width = `calc(100% - ${sidebarWidth()}px)`;
//         } else {
//             rightContainer.classList.remove('expanded');
//             rightContainer.style.marginLeft = '0';
//             rightContainer.style.width = '100%';
//         }
//     });

//     // Ensure the right container is fully visible initially
//     rightContainer.style.marginLeft = '0';
//     rightContainer.style.width = '100%';


document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.navbutton');
    const sidebar = document.querySelector('.sidebar');
    const rightContainer = document.querySelector('.right_container');
    const icons = document.querySelectorAll('.icons');

    toggleButton.addEventListener('click', function() {
        const sidebarWidth = window.innerWidth<=519 ? 250:400;
        sidebar.classList.toggle('active');
        if(sidebar.classList.contains("active")){
                 rightContainer.classList.remove("expanded");
                 rightContainer.style.marginLeft="0"; 
                 icons.style.display="none";
                }
                else{
                    rightContainer.classList.add("expanded");
                    rightContainer.style.marginLeft=`-${sidebarWidth}px`;
                }
    });

});



function loadfile(selector,filepath) {
    const element = document.querySelector(selector);
    if (element.innerHTML.trim() === "") {
        fetch(filepath)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then(html => {
                element.innerHTML = html;
                const contentContainer = document.getElementById('content-container');
        contentContainer.prepend(element);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    } else {
        element.innerHTML = ""; 
        const contentContainer = document.getElementById('content-container');
        contentContainer.prepend(element);
    }
}

    function viewProfile(username) {
      
        window.location.href = 'listingUser.html?username=' + encodeURIComponent(username);
    }
    
