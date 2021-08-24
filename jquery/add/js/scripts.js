$(document).ready(function() {
    var toggleButton = $(".toggle-rows-button");
    $("tbody tr").on("click", function(){
        $(this).addClass("collapse");
        toggleButton.html("Показать строки");
    });

    toggleButton.on("click", function() {
        $("tbody").find("tr.collapse").each(function() {
            var collapsedRow = $(this);
            collapsedRow.removeAttr("class");
        });
        toggleButton.html("Нет скрытых строк");
    });
});