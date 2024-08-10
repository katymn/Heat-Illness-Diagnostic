//DOCUMENT QUERIES
let h1 = document.querySelector("h1");
let img = document.querySelector("img");
let innerDiv = document.getElementById('moreContent');
const desc1 = document.getElementById("p1");
const desc2 = document.getElementById('p2');
let beginButton = document.getElementById('begin-button');
let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");
let restartButton = document.getElementById("restartButton");
let pageNumber = -1;

//ARRAYS
const diseases = [
    {
        name:"Heat Stroke",
        symptoms: ["high body temperature (above 104°F or 40°C)","altered mental state or confusion","hot, dry skin or profuse sweating"],
        care: "Immediate cooling is critical; move the patient to a cooler environment, remove excess clothing, and use ice packs or cool water to lower body temperature. Seek emergency medical help as soon as possible, and monitor the patient's breathing and heart rate until help arrives.",
        video: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/jvGC_dQJUtE?si=Tf3vkM88thmnk_yJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
        name:"Heat Exhaustion",
        symptoms: ["heavy sweating","weakness or fatigue","nausea or vomiting"],
        care: "Move the patient to a cool, shaded area and have them lie down with their legs elevated. Provide cool water or an electrolyte-rich drink and encourage rest until symptoms subside; seek medical attention if symptoms worsen or persist.",
        video: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/R6VdoV8dZRc?si=coULmOoilhQ8rQaj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
        name:"Heat Cramps",
        symptoms: ["painful muscle spasms, usually in the legs, arms, or abdomen","heavy sweating during intense exercise","muscle pain or tightness"],
        care: "Stop all physical activity and move to a cooler environment. Drink water or a sports drink with electrolytes, and gently stretch and massage the affected muscles until the cramps subside.",
        video: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/sO-V5Uj-dYg?si=b3BViBlvdbOcfVs5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
        name:"Heat Tetany",
        symptoms: ["tingling or numbness in the extremities","muscle spasms or cramps","hyperventilation"],
        care: "Move the patient to a cooler area and encourage slow, controlled breathing to alleviate hyperventilation. Hydrate with cool fluids, and if symptoms persist, seek medical evaluation for further assessment and treatment.",
        link: "https://www.icliniq.com/articles/diseases-and-disorders-common-medical-conditions/heat-tetany"
    },
    {
        name:"Heat Edema",
        symptoms: ["swelling in hands, ankles, or feet","mild discomfort","increased swelling with prolonged standing"],
        care: "Elevate the affected limbs to reduce swelling and avoid standing for long periods in the heat. Ensure adequate hydration and consider using compression stockings if the swelling is significant or persistent.",
        link: "https://thekimmelinstitute.com/could-your-swelling-be-heat-edema/"
    },
    {
        name:"Heat Rash",
        symptoms: ["red clusters of small blisters","itching or prickling sensation","rash in areas where sweat is trapped (e.g., underarms, neck, chest, groin)"],
        care: "Keep the affected area cool, dry, and exposed to air. Apply calamine lotion or hydrocortisone cream to relieve itching, and avoid further sweating by staying in a cool environment and wearing loose, breathable clothing.",
        video: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/FReMtVzk55M?si=V8S6VPkQka4xPOo6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    }
]

const questions = [
    {
        symptom: 1,
        question: "Is patient experiencing severe symptoms: i.e. confusion, loss of consciousness, seizures?",
        image:"https://cdn.create.vista.com/api/media/small/648348884/stock-vector-heat-stroke-kid-girl-vector-illustration",
        alt:"Sun causes curly-haired woman to have a seizure on the ground while sweating heavily"
    },
    {
        symptom: 2,
        question: "Is patient experiencing any moderate symptoms: i.e. heavy sweating, rapid pulse, dizziness, nausea?",
        image:"https://thumb.ac-illust.com/ba/baad3b42e1ec1fee3ea95a10b11ff3b9_t.jpeg",
        alt:"Sun causes brown-haired boy to sweat heavily, be dizzy, and have a red face"
    },
    {
        symptom: 3,
        question: "Is patient experiencing muscle cramps?",
        image:"https://media.istockphoto.com/id/952974270/vector/worker-of-heat-stroke.jpg?s=612x612&w=0&k=20&c=-HqAwnkO5bUuk5GAvoIrl1Vsg1r3jN9w9-RH2JlAQdE=",
        alt:"Sun causes sweating, red-faced construction worker to have a leg cramp"
    },
    {
        symptom: 4,
        question: "Is patient experiencing breathing difficulties or tingling sensations?",
        image:"https://media.istockphoto.com/id/1251461478/vector/it-is-an-illustration-of-a-male-sportsman-who-had-a-fever-cramp-vector-image.jpg?s=612x612&w=0&k=20&c=HfPiZRRgC1uItxroDvcQDlBGkOjgllB-DUN98VkR6lk=",
        alt:"Sun causes blue-shirted, heavily sweating boy to sit on the grass because of tingling sensations in his leg"
    },
    {
        symptom: 5,
        question: "Is patient experiencing swelling in extremities?",
        image:"https://media.istockphoto.com/id/1226761464/vector/swelling-of-baby-limbs.jpg?s=612x612&w=0&k=20&c=JEukWDjGQDPS8xvz7I-3YLbW4qGd6yt5MAC8Z3OgLME=",
        alt:"A clipart hand and foot swell up"
    },
    {
        symptom: 6,
        question: "Is patient experiencing red, itchy skin?",
        image:"https://media.istockphoto.com/id/1325725414/vector/young-man-scratching-arm-guy-suffering-from-strong-allergy-skin-itchy-symptom-in-flat-design.jpg?s=612x612&w=0&k=20&c=yJDe2IqJ79FXm4IgctxiFuR2Sc7cwY6SWvibZSpvjAk=",
        alt:"A blue-shirted boy has a rash on his left forearm"
    },
    {
        symptom: 7,
        question: "Please re-evaluate symptoms and consult a healthcare professional. Feel free to restart.",
    },
]

//INITIALIZE BUTTONS
beginButton.addEventListener("click", Begin)
yesButton.addEventListener("click", diagnosis);
noButton.addEventListener("click", updateSymptoms);
restartButton.addEventListener("click", restart);

//PAGE SET UP FXNS
function Begin() {
    beginButton.style.display = "none";
    yesButton.style.display = "inline-flex";
    noButton.style.display = "inline-flex";
    updateSymptoms();
}

function updateSymptoms() {
    pageNumber++;
    if (pageNumber < questions.length) {
        desc1.innerHTML = `${questions[pageNumber].question}`;
        desc2.innerHTML = ``;
        img.src = `${questions[pageNumber].image}`;
        img.alt = `${questions[pageNumber].alt}`;
    }
    
    if (pageNumber == 6) {
        displayRestart()
    }
}

function diagnosis() {
    h1.innerHTML = `${diseases[pageNumber].name}`;
    desc1.innerHTML = `Your patient may be experiencing <strong>${diseases[pageNumber].name}</strong>. <br><br>${diseases[pageNumber].name} is characterized by ${diseases[pageNumber].symptoms.join(", ")}.`
    desc2.innerHTML = `${diseases[pageNumber].care}`;
    
    displayRestart();

    if (pageNumber == 3 || pageNumber == 4) {
        const link = ` <a href="${diseases[pageNumber].link}">Find out more</a>`
        desc2.innerHTML += link;
    }
    else {
        const video = `${diseases[pageNumber].video}`;
        desc2.innerHTML += video;}
}

function restart() {
    pageNumber = -1;
    h1.innerHTML = `Heat Illness Diagnostic`;
    desc1.innerHTML = `Heat illnesses are common in hot, humid climates and can affect anyone, ranging from mild discomfort to life-threatening emergencies. Prompt recognition and treatment are crucial to prevent severe health consequences.`;
    desc2.innerHTML = `This tool is for educational purposes only, not for diagnosis.<br><br>Press begin to identify symptoms and their corresponding heat illness.`
    img.src = "https://thumb.ac-illust.com/78/78c0d398f063e281134cdb6383797875_t.jpeg";
    img.alt = "Male worker sweating in the sun while holding a water bottle and a handkerchief";
    img.style.display = "inline-flex"
    buttonDisplay(beginButton, yesButton, noButton);
    restartButton.style.display = "none";
}

function displayRestart() {
    img.style.display = "none";
    buttonDisplay(restartButton, yesButton, noButton);
}

function buttonDisplay(buttonDisplay,b1,b2) {
    buttonDisplay.style.display = "inline-flex";
    b1.style.display = "none";
    b2.style.display = "none";
}