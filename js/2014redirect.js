(function($) {
    $(document).ready(function() {
    var path = location.pathname;
    if (path != "/") {
        window.location.replace("http://2014.nyccamp.org" + path)
    }
    })
})(jQuery)
