// Genero constantes

const steps = document.querySelectorAll(".step")

const bar = document.getElementById("bar")

const prevButton = document.getElementById("btn-prev")

const nextButton = document.getElementById("btn-next")


let currentStep = 1



//funcion para agregar clase active a los Steps

nextButton.addEventListener('click', () => {

    if (currentStep < steps.length) {
        currentStep++;

        progressSteps()
    }

})


// Funcion para quitar clase activa a los steps

prevButton.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;

        progressSteps()

    }

})


function progressSteps() {
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add("active")
        } else {
            step.classList.remove("active")
        }
    })

    const withProgress = ((currentStep - 1) / (steps.length - 1)) * 100
    console.log(withProgress)

    bar.style.width = withProgress + "%"
}

