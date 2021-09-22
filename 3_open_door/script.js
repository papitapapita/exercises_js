let correct;
const yes = document.getElementById('yes');
const no = document.getElementById('no');

yes.addEventListener('click', function(){Yes()});
no.addEventListener('click', function(){No()});

function Yes()
{
    alert("You should open the door");
    do
    {
        correct = prompt("Have you opened the door? (y/n)");
    }while((correct != 'n' && correct != 'y') || correct == 'n')
    No();
}

function No()
{
    alert("Great, get it in the store");
}
