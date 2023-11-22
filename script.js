const tab1_ = document.getElementById("tab1-content");
const tab2_ = document.getElementById("tab2-content");
const tab3_ = document.getElementById("tab3-content");

const tab1_button = document.getElementById("tab1-button")
const tab2_button = document.getElementById("tab2-button")
const tab3_button = document.getElementById("tab3-button")


function tab1(){
    tab1_.classList.remove("hidden"); 
    tab1_.classList.add("active");
    tab1_button.classList.add("btn-background")
    tab2_.classList.add("hidden");
    tab2_.classList.remove("active"); 
    tab2_button.classList.remove("btn-background")  
    tab3_.classList.add("hidden");
    tab3_.classList.remove("active");  
    tab3_button.classList.remove("btn-background")  

}
function tab2(){
    tab1_.classList.remove("active"); 
    tab1_.classList.add("hidden"); 
    tab1_button.classList.remove("btn-background")
    tab2_.classList.remove("hidden")
    tab2_.classList.add("active");  
    tab2_button.classList.add("btn-background")
    tab3_.classList.add("hidden"); 
    tab3_.classList.remove("active");  
    tab3_button.classList.remove("btn-background")
    
}
function tab3(){

    tab1_.classList.remove("active"); 
    tab1_.classList.add("hidden"); 
    tab1_button.classList.remove("btn-background") 
    tab2_.classList.add("hidden");
    tab2_.classList.remove("active"); 
    tab2_button.classList.remove("btn-background") 
    tab3_.classList.remove("hidden") 
    tab3_.classList.add("active"); 
    tab3_button.classList.add("btn-background") 
    
}
tab1_.classList.remove("hidden"); 