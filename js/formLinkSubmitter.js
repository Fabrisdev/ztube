window.onload = function(){
    document.getElementById("submitForm").addEventListener("click", function(event){
        event.preventDefault()
        let link = document.getElementById("link").value
        let linkFinal = document.getElementById("link").value.replace("https://youtu.be/","")
        if(link == ""){
            let status = document.getElementById("status")
            status.innerHTML = "Status: ERROR"
        }else{
            video = document.getElementById("videoPlayer")
            video.setAttribute("src", "https://www.youtube.com/embed/"+linkFinal)
            sendURL(link)
        }
    })
}
function sendURL(URL){
    window.location.href = `http://localhost:4000/download?URL=${URL}`
}