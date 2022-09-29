function toggle_visibility(){
        var e =document.getElementById('invisible');
        var i = document.getElementById('visible');
        if (e.style.display == 'flex') {
                i.style.display = 'flex';
                e.style.display = 'none';
        } else {
                e.style.display = 'flex';
                i.style.display = 'none';
        }
}


