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


function clearActive(nodelist) {
    nodelist.forEach(node => {
        node.classList.remove("active");
    });

    return nodelist;
};

function getActive(nodelist) {
    const active = nodelist.find(node => node.classList.contains("active"));

    return (active) ?
        active :
        nodelist[0];
}

function getNext(nodelist) {
    const active = getActive(nodelist);
    const next = active.nextElementSibling;

    clearActive(nodelist);
    next.classList.add("active");
    return {
        active,
        next
    };
};

document.querySelector("#start").addEventListener("click", () => {
    console.log(document.querySelector("#vraag1"))
    document.querySelector("#vraag1").classList.add("active");
    const element = document.querySelector(".header");
    element.parentNode.removeChild(element);

})

document.querySelector(".volgende").addEventListener("click", () => {
    const vragen = Array.from(document.querySelectorAll(".vraag, .Resultaat"));
    const {
        active,
        next
    } = getNext(vragen);

    const antwoorden = Array.from(active.querySelectorAll(".answers input"))
    const answerElement = antwoorden.find(input => input.checked);
    console.log(active)
    const answer = {
        [answerElement.name]: answerElement.value
    };
    document.querySelector("#vraag1").classList.remove("active");
    storage.add(answer);
    document.querySelector(".volgende").disabled = true;

    if (next.classList.contains("Resultaat")) {
        storage.calc()
        document.getElementById("%").innerHTML = storage.result;

        const volgende = document.querySelector(".volgende")

        volgende.disabled = false;
        volgende.innerHTML = "Opnieuw";
        volgende.addEventListener("click", function () {
            location.reload();
        })

        return

    }
});




document.querySelectorAll("input").forEach(function (input) {
    input.addEventListener("input", function () {
        document.querySelector(".volgende").disabled = false;
    })

})