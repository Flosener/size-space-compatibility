/*
Here we implement the experiment's wrapping views.
*/


// The intro view appears in the beginning of the experiment and provides some background information.
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: 'Welcome to the experiment!',
  text: `This is an experiment for the replication study on a compatibility effect
        between physical stimulus size and left-right responses.
        <br />
        It doesn't work on a touchscreen, so if you got a keyboard available, you're good to go!
        <br />`,
  buttonText: 'Get some instructions'
});

// The intro view is followed by the instructions view, giving the participant important general instructions (1: compatible mapping condition).
const instructions_compatible_first = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_compatible_first',
  title: 'General instructions',
  text: `Please read the instructions carefully!
            <br />
            <br />
            Your task at hand is a classic stimulus-response task.
            At the beginnging of each trial, please focus on the fixation point that appears at the center of the screen. The fixation point is followed either by
            a small or by a large black square. If a <B>small square</B> appears, press the <B>"f" key</B> on your keyboard. If a <B>large square</B> appears,
            press the <B>"j" key</B> on your keyboard.
            <br />
            Please strive to optimize speed as well as accuracy in giving your responses to the appearing stimuli.
            <br />
            <br />
            To get more comfortable with your task we included some practice trials.`,
  buttonText: 'Begin practice trials'
});

// The intro view is followed by the instructions view, giving the participant important general instructions (1: compatible mapping condition).
const instructions_incompatible_first = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_incompatible_first',
  title: 'General instructions',
  text: `Please read the instructions carefully!
            <br />
            <br />
            Your task at hand is a classic stimulus-response task.
            At the beginnging of each trial, please focus on the fixation point that appears at the center of the screen. The fixation point is followed either by
            a small or by a large black square. If a <B>small square</B> appears, press the <B>"j" key</B> on your keyboard. If a <B>large square</B> appears,
            press the <B>"f" key</B> on your keyboard.
            <br />
            Please strive to optimize speed as well as accuracy in giving your responses to the appearing stimuli.
            <br />
            <br />
            To get more comfortable with your task we included some practice trials.`,
  buttonText: 'Begin practice trials'
});

// The intro view is followed by the instructions view, giving the participant important general instructions (2: incompatible mapping condition).
const instructions_compatible_second = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_compatible_second',
  title: 'General instructions',
  text: `Please read the instructions carefully!
            <br />
            <br />
            Alright, you did a nice job in the first run! Now, we reverse the key order.
            <br />
            If a <B>small square</B> appears, press the <B>"f" key</B> on your keyboard. If a <B>large square</B> appears,
            press the <B>"j" key</B> on your keyboard.
            <br />
            Please strive to optimize speed as well as accuracy in giving your responses to the appearing stimuli.
            <br />
            <br />
            We again included some practice trials for you to get more comfortable with your task.`,
  buttonText: 'Begin practice trials'
});

// The intro view is followed by the instructions view, giving the participant important general instructions (2: incompatible mapping condition).
const instructions_incompatible_second = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_incompatible_second',
  title: 'General instructions',
  text: `Please read the instructions carefully!
            <br />
            <br />
            Alright, you did a nice job in the first run! Now, we reverse the key order.
            <br />
            If a <B>small square</B> appears, press the <B>"j" key</B> on your keyboard. If a <B>large square</B> appears,
            press the <B>"f" key</B> on your keyboard.
            <br />
            Please strive to optimize speed as well as accuracy in giving your responses to the appearing stimuli.
            <br />
            <br />
            We again included some practice trials for you to get more comfortable with your task.`,
  buttonText: 'Begin practice trials'
});

// Pausing screen, where the participant can shortly rest before the next block begins.
const pause_first = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'pause_first',
  title: 'Take a break!',
  text: `Take a deep breath and have a quick rest. When you feel confident enough, start the next block!`,
  buttonText: 'Begin next block'
});

// Pausing screen, where the participant can shortly rest before the next block begins.
const pause_second = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'pause_second',
  title: 'Take a break!',
  text: `Take a deep breath and have a quick rest. When you feel confident enough, start the next block!`,
  buttonText: 'Begin next block'
});

// In the post test questionnaire you can ask your participants addtional questions.
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Post-experiment questionnaire',
  text: 'Answering the following questions is optional, but we kindly ask for your contribution. Your answers stay anonymous and they will help us analyze our results.',
  },
  {
    answer_container_generator: function(config, CT) {
        const quest = magpieUtils.view.fill_defaults_post_test(config);
        return `<form>
                    <p class='magpie-view-text'>
                        <label for="age">${quest.age.title}:</label>
                        <input type="number" name="age" min="18" max="110" id="age" />
                    </p>
                    <p class='magpie-view-text'>
                        <label for="gender">${quest.gender.title}:</label>
                        <select id="gender" name="gender">
                            <option></option>
                            <option value="${quest.gender.male}">${quest.gender.male}</option>
                            <option value="${quest.gender.female}">${quest.gender.female}</option>
                            <option value="${quest.gender.other}">${quest.gender.other}</option>
                        </select>
                    </p>
                    <p class='magpie-view-text'>
                        <label for="handedness">Handedness:</label>
                        <select id="handedness" name="handedness">
                            <option></option>
                            <option value="left">left</option>
                            <option value="right">right</option>
                        </select>
                    </p>
                    <p class='magpie-view-text'>
                        <label for="education">${quest.edu.title}:</label>
                        <select id="education" name="education">
                            <option></option>
                            <option value="${quest.edu.graduated_high_school}">${quest.edu.graduated_high_school}</option>
                            <option value="${quest.edu.graduated_college}">${quest.edu.graduated_college}</option>
                            <option value="${quest.edu.higher_degree}">${quest.edu.higher_degree}</option>
                        </select>
                    </p>
                    <p class='magpie-view-text'>
                        <label for="languages" name="languages">${quest.langs.title}:<br /><span>${quest.langs.text}</</span></label>
                        <input type="text" id="languages"/>
                    </p>
                    <p class="magpie-view-text">
                        <label for="comments">${quest.comments.title}</label>
                        <textarea name="comments" id="comments" rows="6" cols="40"></textarea>
                    </p>
                    <button id="next" class='magpie-view-button'>${config.button}</button>
            </form>`
    },
    handle_response_function: function(config, CT, magpie, answer_container_generator, startingTime) {
        $(".magpie-view").append(answer_container_generator(config, CT));

        $("#next").on("click", function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            magpie.global_data.age = $("#age").val();
            magpie.global_data.gender = $("#gender").val();
            magpie.global_data.handedness = $("#handedness").val();
            magpie.global_data.education = $("#education").val();
            magpie.global_data.languages = $("#languages").val();
            magpie.global_data.comments = $("#comments")
            .val()
            .trim();
            magpie.global_data.endTime = Date.now();
            magpie.global_data.timeSpent =
                (magpie.global_data.endTime -
                    magpie.global_data.startTime) /
                60000;

            // moves to the next view
            magpie.findNextView();
        });
    }
  }
);

// The 'thanks' view is the end of the experiment and submits the results.
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});



/*
Here we implement the experiment's trial type views
*/


//
const practice_first_compatible = custom_views.keyPress_practice({
  trials: 10,
  name: 'practice_first_compatible',
  data: _.shuffle(compEffect.compatible),
  fix_duration: 1000,
  pause: 1500,
  trial_type: 'practice',
  key1: "f",
  key2: "j",
  f: "small",
  j: "large"
});

//
const practice_second_compatible = custom_views.keyPress_practice({
  trials: 20,
  name: 'practice_second_compatible',
  data: _.shuffle(compEffect.compatible),
  fix_duration: 1000,
  pause: 1500,
  trial_type: 'practice',
  key1: "f",
  key2: "j",
  f: "small",
  j: "large"
});

//
const practice_first_incompatible = custom_views.keyPress_practice({
  trials: 10,
  name: 'practice_second_incompatible',
  data: _.shuffle(compEffect.incompatible),
  fix_duration: 1000,
  pause: 1500,
  trial_type: 'practice',
  key1: "f",
  key2: "j",
  f: "large",
  j: "small"
});

//
const practice_second_incompatible = custom_views.keyPress_practice({
  trials: 20,
  name: 'practice_second_incompatible',
  data: _.shuffle(compEffect.incompatible),
  fix_duration: 1000,
  pause: 1500,
  trial_type: 'practice',
  key1: "f",
  key2: "j",
  f: "large",
  j: "small"
});

//
const main_compatible = custom_views.keyPress_main({
  trials: 60,
  name: 'main_compatible',
  data: _.shuffle(compEffect.compatible),
  fix_duration: 1000,
  pause: 1500,
  trial_type: 'main',
  key1: "f",
  key2: "j",
  f: "small",
  j: "large"
});

//
const main_incompatible = custom_views.keyPress_main({
  trials: 60,
  name: 'main_incompatible',
  data: _.shuffle(compEffect.incompatible),
  fix_duration: 1000,
  pause: 1500,
  trial_type: 'main',
  key1: "f",
  key2: "j",
  f: "large",
  j: "small"
});
