function init()
{
    var menu = false;

    document.getElementById('menuToogle')
        .addEventListener( 'click', e => {
            if(menu = !menu)
            {
                document.querySelector('nav')
                    .classList
                    .add('open')
                e.stopPropagation();
            }
            else
            {
                document.querySelector('nav')
                    .classList
                    .remove('open')
            }
        })
    
    window.addEventListener('click', e => {
        if( menu )
        {
            if( e.target != document.querySelector('nav') )
            {
                menu = false;
                document.querySelector('nav')
                    .classList
                    .remove('open')
            }
        }
    })
}

window.onload = init;