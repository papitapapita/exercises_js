let time = parseInt(prompt("Second"));

function countdown(secs)
{
    if(secs >= 0)
    {
        console.log(secs);
        secs -= 1;
        setTimeout(function() {
            countdown(secs)
        }, 1000);
    }
}

countdown(time);


