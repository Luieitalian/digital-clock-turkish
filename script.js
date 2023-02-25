$(function() {

    function updateTime(){
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();

        $('.hours').text(hours);
        $('.minutes').text(minutes);
        $('.seconds').text(seconds);


        setTimeout(()=>{
            updateTime();
        },1000);
    }
    updateTime();

    
});