$(document).on('click', '.hide', function(e){
    console.log(e.target.id);
    hide(e.target.id.split('-')[1])
})

$(document).on('click', '.show', function(e){
    console.log(e.target.id);
    show(e.target.id.split('-')[1])
})


function hide(id){
    $("#" + id).addClass('invisible');
    $("#hide-" + id).addClass('invisible');
    $("#show-" + id).removeClass('invisible');
}

function show(id){    
    $("#" + id).removeClass('invisible');
    $("#hide-" + id).removeClass('invisible');
    $("#show-" + id).addClass('invisible');
}