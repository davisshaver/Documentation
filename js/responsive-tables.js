jQuery(document).ready(function(e){function r(e){e.wrap("<div class='table-wrapper' />");var t=e.clone();t.find("td:not(:first-child), th:not(:first-child)").css("display","none");t.removeClass("responsive");e.closest(".table-wrapper").append(t);t.wrap("<div class='pinned' />");e.wrap("<div class='scrollable' />");s(e,t)}function i(e){e.closest(".table-wrapper").find(".pinned").remove();e.unwrap();e.unwrap()}function s(t,n){var r=t.find("tr"),i=n.find("tr"),s=[];r.each(function(t){var n=e(this),r=n.find("th, td");r.each(function(){var n=e(this).outerHeight(true);s[t]=s[t]||0;if(n>s[t])s[t]=n})});i.each(function(t){e(this).height(s[t])})}var t=false;var n=function(){if(e(window).width()<767&&!t){t=true;e("#content table").each(function(t,n){r(e(n))});return true}else if(t&&e(window).width()>767){t=false;e("#content table").each(function(t,n){i(e(n))})}};e(window).load(n);e(window).bind("resize",n)})