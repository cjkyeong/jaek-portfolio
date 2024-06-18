$(document).ready(function(){
    const content = "|처음\n뵙겠습니다\n전\n 최재경 입니다.|";
    const text = document.querySelector(".text");
    let i = 0;
    
    function typing(){
        let txt = content[i++];
        text.innerHTML += txt=== "\n" ? "<br/>": txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 200)



    
    
});