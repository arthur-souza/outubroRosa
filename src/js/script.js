jQuery(document).ready(function() {

	jQuery('#fullpage').fullpage({
    paddingTop: '40px',
    sectionsColor: ['#ffffff', '#f18889', '#65b5b5', '#7BAABE', '#f18889'],
    anchors: ['inicio', 'o-cancer', 'exames', 'curiosidades', 'produção'],
    menu: '.header__nav__list',
    scrollOverflow: true,
    // slidesNavigation: true,
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
