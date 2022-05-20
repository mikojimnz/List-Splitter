$('#submit').on('click', function(e) {
    $('#a, #b').empty();
    $.each($('#input').val().split(/\n/), function(i ,line) {
        if(i % 2 == 0) {
            $('#a').append(`<li>${line}</li>`);
        } else {
            $('#b').append(`<li>${line}</li>`);
        }
    });
});