// https://stackoverflow.com/questions/16364748/must-do-adb-kill-server-and-start-server-everytime-to-recognize-android-device-i

var glob = require("glob");

var exec = require('child_process').exec;

function puts(error, stdout, stderr) { 
  console.log(stdout) 
}

// kill adb
exec("adb kill-server", puts);

// start adb
exec("adb start-server", puts);

//
console.log("\nwait for 8s\n");

// https://stackoverflow.com/questions/32604656/what-is-the-glob-character
setTimeout(
  function() {
    glob("/home/kenpeter/Downloads/music/**/*.mp3", function (er, files) {

      // push
      files.map(function(singleFile){
  
        // e.g.
        // singleFile === /home/kenpeter/Downloads/music/蒙 面唱将猜猜猜.mp3
       
        //var cmd = "adb push" + " " + "'" + singleFile + "'" + " " + "/sdcard/Music";
        //console.log(cmd);
        //exec(cmd, puts);
      }); // end files.map
      
    }); // end glob
  }, 
  8000
);

