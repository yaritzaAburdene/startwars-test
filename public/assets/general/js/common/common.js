/***************************************************
 *  Generals Functions
 ***************************************************/

/**
 * Show image
 *
 * @param object input
 */
function readURL(input,id_div_preview) {
    if (input.files && input.files[0]) {
        file = input.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            $(id_div_preview).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    } else {
        alert('select a file to see preview');
        $(id_div_preview).attr('src', '');
    }
}