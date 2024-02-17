/***************************************************
 *             Funciones Generales
 ***************************************************/

/**
 * Muestra loading de tipo pagina
 */
function loadingPageShow(text = "Loading page")
{
    $("#text-loading").html(text);
    $(".loader-wrapper").removeClass("hidden");
}

/**
 * Oculta loading de tipo pagina
 * @param timeot {number} tiempo de milisegundos a ocultar. Default 1800
 */
function loadingPageHidden(timeot = 1800)
{
    setTimeout(function (){
        $(".loader-wrapper").addClass("hidden");
    },timeot);
}