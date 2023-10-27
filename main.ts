// important
let mood = 100;
let sleep = 100;
let hunger = 100;
let happy = false;
let sad = false;
let asleep = false;
let angry = false;
let waiting = false;

function check() {
    if (waiting == false) {
        if (mood >= 80 && sleep >= 80 && hunger >= 80) {
            if (!happy) {
                basic.showIcon(IconNames.Happy)
                happy = true;
                sad = false;
                asleep = false;
                angry = false;
            }
        } else {
            if (mood >= 50 && sleep >= 50 && hunger >= 50) {
                if (!sad) {
                    basic.showIcon(IconNames.Sad);
                    happy = false;
                    sad = true;
                    asleep = false;
                    angry = false;
                }
            } else {
                if (mood >= 25 && sleep >= 25 && hunger >= 25) {
                    if (!asleep) {
                        basic.showIcon(IconNames.Asleep);
                        happy = false;
                        sad = false;
                        asleep = true;
                        angry = false;
                    }
                } else {
                    if (!angry) {
                        basic.showIcon(IconNames.Angry);
                        happy = false;
                        sad = false;
                        asleep = false;
                        angry = true;
                    }
                }
            }
        }

        if (randint(1, 100) == 1) {
            mood -= 5;
            hunger -= 10;
            sleep -= 1;
        }
        console.log("Mood: " + mood + ", Hunger: " + hunger + " Sleep: " + sleep);
    }
}

function feed() {
    waiting = true;
    let food = randint(10,20);
    basic.showString("FEEDING");
    basic.showString(food.toString());
    hunger += food;
    pause(500);
    waiting = false;
}

function pet() {
    waiting = true;
    basic.showString("PETTING");
    basic.showString("5");
    mood += 5;
    pause(500);
    waiting = false;
}

function sleeping() {
    waiting = true;
    basic.showString("micro:bit");
    basic.showString("is");
    basic.showString("sleeping");
    basic.showString("for an hour");
    basic.showIcon(IconNames.Asleep);
    pause(3.6e+6); // an hour
    waiting = false;
}

input.onButtonPressed(Button.A, pet);
input.onButtonPressed(Button.B, feed);
input.onButtonPressed(Button.AB, sleeping);

basic.forever(check);