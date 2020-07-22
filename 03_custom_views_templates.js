// In this file you can create your own custom view templates
  // https://github.com/magpie-ea/magpie-mental-rotation/blob/master/03_custom_views_templates.js

// Object to store all custom_views.
const custom_views = {};

// Custom view template for practice trials.
custom_views.keyPress_practice = function(config) {
    const keypress_custom = {
        name: config.name,
        title: magpieUtils.view.setter.title(config.title, ""),
        render: function(CT, magpie) {
            let startingTime; // pause (1500) + fix_duration (1000)
            const question = magpieUtils.view.setter.question(
                config.data[CT].question
            );
            const key1 = config.key1;
            const key2 = config.key2;
            const value1 = config[key1];
            const value2 = config[key2];
            const viewTemplate = `<div class="magpie-view">
                    <h1 class='magpie-view-title'>${this.title}</h1>
                    <p class='magpie-response-keypress-header'><strong>${key1}</strong> = ${value1}, <strong>${key2}</strong> = ${value2}</p>
                    <p class='magpie-response-keypress-header' id='feedback'></p>
                    <div class='magpie-view-stimulus-container'>
                        <div class='magpie-view-stimulus magpie-nodisplay'></div>
                    </div>
                </div>`;
            const answerContainerElem = `<div class='magpie-view-answer-container'>
                        <p class='magpie-view-question'>${question}</p>
                          </div>`;

            $("#main").html(viewTemplate);

            const handleKeyPress = function(e) {
                const keyPressed = String.fromCharCode(
                    e.which
                ).toLowerCase();

                if (keyPressed === key1 || keyPressed === key2) {
                    let correctness;
                    const RT = Date.now() - startingTime; // measure RT before anything else

                    if (
                        config.data[CT].expected ===
                            config[keyPressed]
                    ) {
                        correctness = "correct";
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text('Correct!');

                    } else {
                        correctness = "incorrect";
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text('Incorrect!');
                    }

                    const trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        key_pressed: keyPressed,
                        correctness: correctness,
                        RT: RT - 2500 // 1500ms pause, 1000ms fix_duration
                    };

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    trial_data[config.data[CT].key1] =
                        config.data[CT][key1];
                    trial_data[config.data[CT].key2] =
                        config.data[CT][key2];

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        if (config.data[CT].canvas.canvasSettings !== undefined) {
                            for (let prop in config.data[CT].canvas.canvasSettings) {
                                if (config.data[CT].canvas.canvasSettings.hasOwnProperty(prop)) {
                                    trial_data[prop] = config.data[CT].canvas.canvasSettings[prop];
                                }
                            }
                            delete trial_data.canvas.canvasSettings;
                        }
                        for (let prop in config.data[CT].canvas) {
                            if (config.data[CT].canvas.hasOwnProperty(prop)) {
                                trial_data[prop] = config.data[CT].canvas[prop];
                            }
                        }
                        delete trial_data.canvas;
                    }

                    magpie.trial_data.push(trial_data);
                    $("body").off("keydown", handleKeyPress);
                    setTimeout(magpie.findNextView, 400); // delay to accomodate feedback
                }
            };

            const enableResponse = function() {
                $(".magpie-view").append(answerContainerElem);
                $("body").on("keydown", handleKeyPress);
            };

            startingTime = Date.now();

            // creates the DOM of the trial view
            magpieUtils.view.createTrialDOM(
                {
                    pause: config.pause,
                    fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "keyPress"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return keypress_custom;
};


// // Custom view template for main trials.
custom_views.keyPress_main = function(config) {
    const keypress_custom = {
        name: config.name,
        title: magpieUtils.view.setter.title(config.title, ""),
        render: function(CT, magpie) {
            let startingTime; // pause (1500) + fix_duration (1000)
            const question = magpieUtils.view.setter.question(
                config.data[CT].question
            );
            const key1 = config.key1;
            const key2 = config.key2;
            const value1 = config[key1];
            const value2 = config[key2];
            const viewTemplate = `<div class="magpie-view">
                    <h1 class='magpie-view-title'>${this.title}</h1>
                    <p class='magpie-response-keypress-header'><strong>${key1}</strong> = ${value1}, <strong>${key2}</strong> = ${value2}</p>
                    <p class='magpie-response-keypress-header' id='feedback'></p>
                    <div class='magpie-view-stimulus-container'>
                        <div class='magpie-view-stimulus magpie-nodisplay'></div>
                    </div>
                </div>`;
            const answerContainerElem = `<div class='magpie-view-answer-container'>
                        <p class='magpie-view-question'>${question}</p>
                          </div>`;

            $("#main").html(viewTemplate);

            const handleKeyPress = function(e) {
                const keyPressed = String.fromCharCode(
                    e.which
                ).toLowerCase();

                if (keyPressed === key1 || keyPressed === key2) {
                    let correctness;
                    const RT = Date.now() - startingTime; // measure RT before anything else

                    if (
                        config.data[CT].expected ===
                            config[keyPressed]
                    ) {
                        correctness = "correct";
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text('');

                    } else {
                        correctness = "incorrect";
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text('Incorrect!');
                    }

                    const trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        key_pressed: keyPressed,
                        correctness: correctness,
                        RT: RT - 2500 // 1500ms pause, 1000ms fix_duration
                    };

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    trial_data[config.data[CT].key1] =
                        config.data[CT][key1];
                    trial_data[config.data[CT].key2] =
                        config.data[CT][key2];

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        if (config.data[CT].canvas.canvasSettings !== undefined) {
                            for (let prop in config.data[CT].canvas.canvasSettings) {
                                if (config.data[CT].canvas.canvasSettings.hasOwnProperty(prop)) {
                                    trial_data[prop] = config.data[CT].canvas.canvasSettings[prop];
                                }
                            }
                            delete trial_data.canvas.canvasSettings;
                        }
                        for (let prop in config.data[CT].canvas) {
                            if (config.data[CT].canvas.hasOwnProperty(prop)) {
                                trial_data[prop] = config.data[CT].canvas[prop];
                            }
                        }
                        delete trial_data.canvas;
                    }

                    magpie.trial_data.push(trial_data);
                    $("body").off("keydown", handleKeyPress);
                    setTimeout(magpie.findNextView, 400); // delay to accomodate feedback
                }
            };

            const enableResponse = function() {
                $(".magpie-view").append(answerContainerElem);
                $("body").on("keydown", handleKeyPress);
            };

            startingTime = Date.now();

            // creates the DOM of the trial view
            magpieUtils.view.createTrialDOM(
                {
                    pause: config.pause,
                    fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "keyPress"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return keypress_custom;
};
