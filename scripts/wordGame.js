$(document).ready(function() {
    $('#joinGameForm').submit(function(e) {

        if($('#playerName').val().length == 0)
        {
            e.preventDefault();
            $('#errorContainer').html("Player Name cannot be empty");
            $('#errorContainer').addClass('text-danger bg-danger');
            $('#playerName').focus();
        }

    });

    $('#playerName').focus();
});
