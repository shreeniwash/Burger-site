const hamburger=document.getElementById('hamburger');
const navmenu=document.getElementById('nav-menu');
const navcloseicon=document.getElementById('nav-close');
const navlink=document.querySelectorAll('.nav_link');

navlink.forEach(link=>{
    link.addEventListener("click",()=>{
       navmenu.classList.add('hidden');
    })
})
navcloseicon.addEventListener("click",()=>{
    navmenu.classList.add('hidden');
})
hamburger.addEventListener("click",() =>{
    navmenu.classList.remove('hidden');
})


// ............................. TABS_WRAP ........................
const tabs= document.querySelectorAll(".tabs_wrap ul li");
const all=document.querySelectorAll(".items_wrap");
const foods=document.querySelectorAll(".food");
const beverages=document.querySelectorAll(".beverage");
const snacks=document.querySelectorAll(".snack");



tabs.forEach((tab) =>{
    tab.addEventListener("click",()=>{
        tabs.forEach((tab) =>{
            tab.classList.remove('active');
        })
       tab.classList.add('active');


        const tabval= tab.getAttribute('data-tabs');
        //console.log(tabvalue);
        all.forEach((item) =>{
                item.style.display='none';
            });

            if(tabval == "food"){
                foods.forEach((item) =>{
                    item.style.display='block';
                });
               // console.log(foods)
            }
             else if(tabval == 'snack'){
                 snacks.forEach((item)=>{
                    item.style.display='block';
                });
               // console.log(snacks)
            }
            else if(tabval == 'beverage'){
                beverages.forEach((item) =>{
                    item.style.display='block';
                });
            }
            else{
                all.forEach((item)=>{
                    item.style.display="block";
                });
            }

        });
    });


    // ......................... SCROLL-UP ......................
    const scrollup =()=>{
        const scrollupbtn =document.getElementById('scroll-up');
        if(this.screenY >= 250){
            scrollupbtn.classList.remove("-bottom-1/2");
            scrollupbtn.classList.add("bottom-4");
        }else{
            scrollupbtn.classList.add("-bottom-1/2");
            scrollupbtn.classList.remove("bottom-4");
        }
    }

    window.addEventListener('scroll',scrollup)


    // ......................... change background Header.....................
    const scrollHeader =()=>{
        const header =document.getElementById('header');
        if(this.screenY >= 50){
            header.classList.add("border-b","border-secondaryColor");
        }else{
           
            header.classList.remove("bottom-b" ,"border-secondaryColor");
        }
    }

    window.addEventListener('scroll',scrollHeader)



//    ......................... DARK LIGHT HERE ........................... 
const html= document.querySelectorAll("html");
const themebtn=document.getElementById("theme-togle");

themebtn.addEventListener('click',()=>{
    html.classList.add('dark');
    themebtn.classList.replace("ri-moon-line","ri-sun-line");
    localStorage.setItem("mode","dark");
})