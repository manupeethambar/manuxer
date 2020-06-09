jQuery(document).ready(function($) {
    var contentSections = $('.cd-section')
      , navigationItems = $('#cd-vertical-nav a');
    updateNavigation();
    $(window).on('scroll', function() {
        updateNavigation();
    });
    navigationItems.on('click', function(event) {
        event.preventDefault();
    });
    function updateNavigation() {
        contentSections.each(function() {
            $this = $(this);
            var activeSection = $('#cd-vertical-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
                navigationItems.eq(activeSection).addClass('is-selected');
            } else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }
});