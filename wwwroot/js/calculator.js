$(document).ready(function () {
    $('#calculateBtn').click(function () {
        var hours = $('#hours').val();

        // Validate if hours is a positive number
        if (isNaN(hours) || parseFloat(hours) <= 0) {
            if (parseFloat(hours) < 0) {
                alert('Please enter a positive number for hours.');
            } else {
                alert('Please enter a valid number for hours.');
            }
            return;
        }

        var chargePerHour = parseFloat($('#chargePerHour').val().replace('$', ''));
        var total = hours * chargePerHour;
        $('#total').val('$' + total.toFixed(2));
    });
});
