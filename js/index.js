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

    var clock = jQuery("#multi").radialMultiProgress("init", {
      'fill': 10,
      'font-size': 14,
      'data': [
        {'color': "#2DB1E4", 'range': [0, 59]},
        {'color': "#9CCA13", 'range': [0, 59]}
      ]
    });

    clock.radialMultiProgress("to", {
      "index": 0,
      'perc': 30
    });

    clock.radialMultiProgress("to", {
      "index": 1,
      'perc': 15
    });


});
