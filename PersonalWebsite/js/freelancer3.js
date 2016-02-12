$(document).ready(function () {
    if ($('#javascriptTab').hasClass('tabActive') === true) {

    }
    $(".portfolioTabs").click(function () {
        $(".portfolioTabs").removeClass('tabActive');
        $(this).addClass('tabActive');
        if ($('#javascriptTab').hasClass('tabActive') === true) {
            $('.portfolioContents').addClass('noDisplay');
            $('#javascriptTabContent').toggle('fade', 2000);
            $('#jqueryTabContent').hide();
            $('#csharpTabContent').hide();
        }
        else if ($('#jqueryTab').hasClass('tabActive') === true) {
            $('.portfolioContents').addClass('noDisplay');
            $('#jqueryTabContent').toggle('fade', 2000);
            $('#csharpTabContent').hide();
            $('#javascriptTabContent').hide();
        }
        else if ($('#csharpTab').hasClass('tabActive') === true) {
            $('.portfolioContents').addClass('noDisplay');
            $('#csharpTabContent').toggle('fade', 2000);
            $('#javascriptTabContent').hide();
            $('#jqueryTabContent').hide();
        }
    });

});