
//effect

let typed=new Typed('.auto-input',{
    strings:[,'ML Engineer!','Front-end Developer!'],
    typeSpeed:100,
    backspeed:100,
    backDelay:2000,
    loop:true,
})




window.addEventListener('load', function () {
    setTimeout(function() {
        document.getElementById('r').classList.add('animate');
    }, 500);
    
    setTimeout(function() {
        document.getElementById('b').classList.add('animate');
    }, 1000);
});



const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
             entry.target.classList.remove('show');
            
        }
    });
});


const hiddanElements = document.querySelectorAll('.hidden');
hiddanElements.forEach((el) => observer.observe(el));


  
  

