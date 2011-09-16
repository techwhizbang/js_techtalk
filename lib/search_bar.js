SearchBar = (function() {

    function bindClickEvent() {
        $('#find_book').click(function() {
           $('#search_results').show();
        });
    }

    return {
        bindEvents: function() {
            bindClickEvent();
        }
    }

})();

SearchBar.bindEvents();