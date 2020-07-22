// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned

    if(counterbalance == 0) {
      window.magpie_monitor = magpieInit({
          // You have to specify all views you want to use in this experiment and the order of them
          views_seq: [
              intro,
              instructions_compatible_first,
              practice_first_compatible,
              pause_first,
              main_compatible,
              instructions_incompatible_second,
              practice_second_incompatible,
              pause_second,
              main_incompatible,
              post_test,
              thanks,
          ],
          // Here, you can specify all information for the deployment
          deploy: {
              experimentID: "INSERT_A_NUMBER",
              serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
              // Possible deployment methods are:
              // "debug" and "directLink"
              // As well as "MTurk", "MTurkSandbox" and "Prolific"
              deployMethod: "directLink",
              contact_email: "fpaetzold@uos.de",
              prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
          },
          // Here, you can specify how the progress bar should look like
          progress_bar: {
              in: [
                  // list the view-names of the views for which you want a progress bar
                  practice_first_compatible.name,
                  main_compatible.name,
                  practice_second_incompatible.name,
                  main_incompatible.name,
              ],
               // Possible styles are "default", "separate" and "chunks"
              style: "separate",
              width: 100
          }

      });
    }
    else {
      window.magpie_monitor = magpieInit({
          // You have to specify all views you want to use in this experiment and the order of them
          views_seq: [
              intro,
              instructions_incompatible_first,
              practice_first_incompatible,
              pause_first,
              main_incompatible,
              instructions_compatible_second,
              practice_second_compatible,
              pause_second,
              main_compatible,
              post_test,
              thanks,
          ],
          // Here, you can specify all information for the deployment
          deploy: {
              experimentID: "163",
              serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
              // Possible deployment methods are:
              // "debug" and "directLink"
              // As well as "MTurk", "MTurkSandbox" and "Prolific"
              deployMethod: "directLink",
              contact_email: "fpaetzold@uos.de",
              prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
          },
          // Here, you can specify how the progress bar should look like
          progress_bar: {
              in: [
                  // list the view-names of the views for which you want a progress bar
                  practice_first_incompatible.name,
                  main_incompatible.name,
                  practice_second_compatible.name,
                  main_compatible.name,
              ],
               // Possible styles are "default", "separate" and "chunks"
              style: "separate",
              width: 100
          }

      });
    }

});
