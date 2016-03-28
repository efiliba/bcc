﻿export default (html, initialState) => {
    const cssPath = process.env.NODE_ENV === 'production' ? '/css/app.min.css' : '/css/app.css';
    return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Best Choice Care</title>

		<link rel="stylesheet" href="https://cask.scotch.io/bootstrap-4.0-flex.css" />
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href=${cssPath} />
        <link rel="shortcut icon" href="/images/fav_icon.jpg" type="image/jpg" />
        <link rel="stylesheet" href="/css/animate.min.css" />
       
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
   		<script src="/scripts/classie.js"></script>
   		<script src="/scripts/cbpAnimatedHeader.min.js"></script>
   		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
		<script src="https://www.atlasestateagents.co.uk/javascript/tether.min.js"></script><!-- Tether for Bootstrap -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>
        <script src="/dist/bundle.js"></script>
        <script src="/scripts/jquery.easing.1.3.js"></script>
        <script src="/scripts/jquery.stellar.min.js"></script>
        <script src="/scripts/wow.min.js"></script>
        
        <script>
            $(function() {
                $(window).on("load", function() {
                   // $("body").css("padding-top", "63px");

                    // Set src of all img's to it's data-src value (deferred images)
                    $('img[data-src]').each(function() {
                        this.src = $(this).data("src");
                    });

                    $('section#about-image div.fill-screen').css("background-image", "url(/images/beach.jpg)");
                    $('header, #content, footer, #contactUsForm').fadeIn();
                });

                $(window).on("load resize", function() {
                    $(".fill-screen").css("height", window.innerHeight - 100);
                });
        
                $('body').scrollspy({ 
                    target: '.navbar',
                    offset: 160
                });
        
                $('nav a, .down-button a').bind('click', function() {
                    $('html, body').stop().animate({
                        scrollTop: $($(this).attr('href')).offset().top - 100
                    }, 1500, 'easeInOutExpo');
                    event.preventDefault();
                });

                $(window).stellar();

                new WOW().init();
            });
        </script>
      </body>
    </html>
  `;
};