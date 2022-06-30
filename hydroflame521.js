(function () {
        var words = ["A Minecraft Pocket Edition Hack Client for Android","Powerful server bypasses","Expertly designed GUI and icons","All premium features are free","Active Discord Support and Development"],
        i = 0;
        setInterval(function(){ $('#words').fadeOut(function(){
            $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
          }); }, 6000)
      })();