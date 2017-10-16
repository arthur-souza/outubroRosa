jQuery(document).ready(function() {

	jQuery('#fullpage').fullpage({
    paddingTop: '40px',
    sectionsColor: ['#ffffff', '#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    menu: '.header__nav__list',
    scrollOverflow: true
  });

  jQuery('#show-navbar').on('click', function(event) {
    event.preventDefault();
    var button = jQuery(this);

    if (button.hasClass('active')) {
      button.removeClass('active');
      jQuery('#navbar').css('width', '0');

      return;
    }

    button.addClass('active');
    jQuery('#navbar').css('width', '200px');
  });
});
