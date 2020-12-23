window.onload = function(){
    document.getElementById("submitForm").addEventListener("click", function(event){
        event.preventDefault()
        let link = document.getElementById("link").value
        let linkFinal = document.getElementById("link").value.replace("https://youtu.be/","")
        if(link == ""){
            console.log("no link")
        }else{
            let video = document.getElementById("videoPlayer")
            video.setAttribute("src", "https://www.youtube.com/embed/"+linkFinal)
            sendURL(link)
        }
    })
}
function sendURL(URL){
    window.location.href = `http://ztube.glitch.me/download?URL=${URL}`
}