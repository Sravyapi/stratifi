
//Animations for bar graph 

$(document).ready( function () {
    $('#demo-bar').gradientProgressBar({
        value: 1,
        fill: {
            gradient: ["#62ce02", "#62ce02","#f39f09","#f39f09", "#f39f09","#c93539", "#c93539"]
        }
    });

    $('#demo-bar2').gradientProgressBar({
        value: 0.75,
        fill: {
            gradient: ["#62ce02", "#62ce02","#f39f09","#f39f09", "#f39f09", "#c93539", "#c93539"]
        }
    });

    $('#demo-bar3').gradientProgressBar({
        value: 0.8,
        fill: {
            gradient: ["#62ce02", "#62ce02","#f39f09","#f39f09","#f39f09", "#c93539", "#c93539"]
        }
    });

    $('#demo-bar4').gradientProgressBar({
        value: 0.9,
        fill: {
            gradient: ["#62ce02","#62ce02", "#f39f09","#f39f09","#f39f09", "#c93539", "#c93539"],
        }
    });

    $('canvas').addClass("barfiller");

    // To display risk level based on it's risk value 

    $('#progress-length').attr('stroke-dashoffset',parseFloat($('#percentage').attr('data-percent'))*62.9)

    var percent = parseFloat($("#percentage").attr("data-percent"));

    if(percent > 6.66){
        $(".risk").css("color","#c93539");
        $('.progress > li').css("color","#c93539");
        $('.risk').text("High Risk");
    } else if (percent > 3.33) {
        $(".risk").css("color","#f39f09");
        $('.progress > li').css("color","#f39f09");
        $('.risk').text("Moderate Risk");
    }

    $('ul > li').click(function() {
        $('ul > li').removeClass('active');
        $(this).addClass('active');
    });

});
