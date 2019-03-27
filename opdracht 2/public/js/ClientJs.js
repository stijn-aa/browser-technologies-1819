let currentActive = 0
let start = false


document.querySelector('.volgende').addEventListener('click', function () {
    if (start === false) {
        start = true
        //next page
        currentActive++
        const active = document.querySelector('.v' + currentActive)
        active.setAttribute('active', 'active');

    } else if (currentActive > 0 && currentActive < 3) {
        //submit waarde naar restulaat
        const answers = Array.from(active.querySelectorAll(".answers input"))
        const answerElement = answers.find(function (input) {
            console.log(input.checked)
            return (input.checked);
        })
        console.log(answerElement)
        const answer = {
            [answerElement.name]: answerElement.value
        }
        console.log(answer)
        storage.add(answer)

        //next page
        const old = document.querySelector('.v' + currentActive)
        currentActive++
        const active = document.querySelector('.v' + currentActive)
        old.setAttribute('active', 'false');
        active.setAttribute('active', 'active');

    } else if (currentActive === 3) {
        //submit waarde naar restulaat
        const active = document.querySelector('.v' + currentActive)
        const answers = Array.from(active.querySelectorAll(".answers input"))
        const answerElement = answers.find(function (input) {
            return (input.checked);
        })
        console.log(answerElement)
        const answer = {
            [answerElement.name]: answerElement.value
        }
        console.log(answer)
        storage.add(answer)
        //next page
    }
});

document.querySelector('.vorige').addEventListener('click', function () {
    if (currentActive >= 1) {
        const old = document.querySelector('.v' + currentActive)
        currentActive--
        const active = document.querySelector('.v' + currentActive)
        old.setAttribute('active', 'false');
        active.setAttribute('active', 'active');

    } else {
        console.log(document.querySelector('.v' + currentActive))
    }

});

const storage = {
    answers: {},
    result: 0,

    add: function (answer) {

        Object.keys(answer).forEach(function (key) {
            storage.answers[key] = answer[key]
        })
        console.log(storage.answers)

        console.log(storage.answers)
    },
    calc: function () {



        for (var property in storage.answers) {
            storage.result += Number(storage.answers[property]);
            console.log(storage.result)
        }

    },
    reset: function () {
        storage.result = 0;
    }



}