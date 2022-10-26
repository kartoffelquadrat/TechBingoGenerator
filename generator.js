let enhancers
let technologies
let titles

function registerLoadHander() {
    document.body.addEventListener('click', generate);
}

async function load() {

    // load buzzwords
    await loadArrays();
    console.log(enhancers)
    console.log(technologies)
    console.log(titles)

    // fill page
    generate()
}

function generate() {

    // pick random of each
    let random_enhancer = getRandomElement(enhancers)
    let random_technology = getRandomElement(technologies)
    let random_title = getRandomElement(titles)
    let fusion = random_enhancer + " " + random_technology + " " + random_title
    console.log("new title: "+fusion)

    // store in page
    document.getElementById("bingo").innerText = fusion
}

function getRandomElement(json_array) {
    return json_array[Math.floor(Math.random()*json_array.length)];
}

async function loadArrays() {

    await fetch("enhancers.json")
        .then(result => result.json())
        .then(loaded_enhancers => enhancers = loaded_enhancers)

    await fetch("technologies.json")
        .then(result => result.json())
        .then(loaded_technologies => technologies = loaded_technologies)

    await fetch("titles.json")
        .then(result => result.json())
        .then(loaded_titles => titles = loaded_titles)
}