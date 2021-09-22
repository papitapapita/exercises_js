let correct;
const yes = document.getElementById('yes');
const no = document.getElementById('no');

yes.addEventListener('click', function(){Yes()});
no.addEventListener('click', function(){No()});

function Yes()
{
    alert("Great! it's on");
}

function No()
{
    alert("You should search for matchsticks");
    do
    {
        correct = prompt("Have you found some?(y/n)");
    }while((correct != 'n' && correct != 'y') || correct == 'n')
    Yes();
}
