// https://stackoverflow.com/questions/16364748/must-do-adb-kill-server-and-start-server-everytime-to-recognize-android-device-i

var glob = require("glob");
var fs = require('fs');
var randomstring = require("randomstring");

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

      files.map(function(singleFile){
        var tmpFileName = randomstring.generate(7);
      
        //https://stackoverflow.com/questions/22504566/renaming-files-using-node-js
        var tmpFullFile = "/home/kenpeter/Downloads/music/" + tmpFileName + ".mp3";
        fs.rename(singleFile, tmpFullFile, function(err) {
          if ( err ) console.log('ERROR: ' + err);
          
          var cmd = "adb push" + " " + tmpFullFile + " " + "/sdcard/Music";
          console.log(cmd);
          exec(cmd, puts);
        });
        
      }); // end files.map
      
    }); // end glob
  }, 
  8000
);

