/*$('div').on('click', function() {
$(this).toggleClass('show-description')
})
*/
$(document).ready(function(){
    $('div').on('click', function(){
        $(this).toggleClass('show-description')
        return false
    })
})