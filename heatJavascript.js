//DOCUMENT QUERIES
let h1 = document.querySelector("h1");
let img = document.querySelector("img");
let innerDiv = document.getElementById('moreContent');
const desc1 = document.getElementById("p1");
const desc2 = document.getElementById('p2');
let beginButton = document.getElementById('begin-button');
let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");
let pageNumber = -1;

//ARRAYS
const diseases = [
    {
        name:"Heat Stroke",
        symptoms: ["high body temperature (above 104°F or 40°C)","altered mental state or confusion","hot, dry skin or profuse sweating"],
        care: "Immediate cooling is critical; move the patient to a cooler environment, remove excess clothing, and use ice packs or cool water to lower body temperature. Seek emergency medical help as soon as possible, and monitor the patient's breathing and heart rate until help arrives.",
        image:""
    },
    {
        name:"Heat Exhaustion",
        symptoms: ["heavy sweating","weakness or fatigue","nausea or vomiting"],
        care: "Move the patient to a cool, shaded area and have them lie down with their legs elevated. Provide cool water or an electrolyte-rich drink and encourage rest until symptoms subside; seek medical attention if symptoms worsen or persist.",
        image:""
    },
    {
        name:"Heat Cramps",
        symptoms: ["painful muscle spasms, usually in the legs, arms, or abdomen","heavy sweating during intense exercise","muscle pain or tightness"],
        care: "Stop all physical activity and move to a cooler environment. Drink water or a sports drink with electrolytes, and gently stretch and massage the affected muscles until the cramps subside.",
        image:""
    },
    {
        name:"Heat Tetany",
        symptoms: ["tingling or numbness in the extremities","muscle spasms or cramps","hyperventilation"],
        care: "Move the patient to a cooler area and encourage slow, controlled breathing to alleviate hyperventilation. Hydrate with cool fluids, and if symptoms persist, seek medical evaluation for further assessment and treatment.",
        image:""
    },
    {
        name:"Heat Edema",
        symptoms: ["swelling in hands, ankles, or feet","mild discomfort","increased swelling with prolonged standing"],
        care: "Elevate the affected limbs to reduce swelling and avoid standing for long periods in the heat. Ensure adequate hydration and consider using compression stockings if the swelling is significant or persistent.",
        image:""
    },
    {
        name:"Heat Rash",
        symptoms: ["red clusters of small blisters","itching or prickling sensation","rash in areas where sweat is trapped (e.g., underarms, neck, chest, groin)"],
        care: " Keep the affected area cool, dry, and exposed to air. Apply calamine lotion or hydrocortisone cream to relieve itching, and avoid further sweating by staying in a cool environment and wearing loose, breathable clothing.",
        image:""
    }
]

const questions = [
    {
        symptom: 1,
        question: "Is patient experiencing severe symptoms: i.e. confusion, loss of consciousness, seizures?",
        image:"https://thumb.ac-illust.com/ba/baad3b42e1ec1fee3ea95a10b11ff3b9_t.jpeg"
    },
    {
        symptom: 2,
        question: "Is patient experiencing any moderate symptoms: i.e. heavy sweating, rapid pulse, dizziness, nausea?",
        image:"https://thumb.ac-illust.com/ba/baad3b42e1ec1fee3ea95a10b11ff3b9_t.jpeg"
    },
    {
        symptom: 3,
        question: "Is patient experiencing muscle cramps?",
        image:"https://media.istockphoto.com/id/952974270/vector/worker-of-heat-stroke.jpg?s=612x612&w=0&k=20&c=-HqAwnkO5bUuk5GAvoIrl1Vsg1r3jN9w9-RH2JlAQdE="
    },
    {
        symptom: 4,
        question: "Is patient experiencing breathing difficulties or tingling sensations",
        image:"https://media.istockphoto.com/id/1251461478/vector/it-is-an-illustration-of-a-male-sportsman-who-had-a-fever-cramp-vector-image.jpg?s=612x612&w=0&k=20&c=HfPiZRRgC1uItxroDvcQDlBGkOjgllB-DUN98VkR6lk="
    },
    {
        symptom: 5,
        question: "Is patient experiencing swelling in extremities?",
        image:"https://media.istockphoto.com/id/1226761464/vector/swelling-of-baby-limbs.jpg?s=612x612&w=0&k=20&c=JEukWDjGQDPS8xvz7I-3YLbW4qGd6yt5MAC8Z3OgLME="
    },
    {
        symptom: 6,
        question: "Is patient experiencing red, itchy skin?",
        image:"https://media.istockphoto.com/id/1325725414/vector/young-man-scratching-arm-guy-suffering-from-strong-allergy-skin-itchy-symptom-in-flat-design.jpg?s=612x612&w=0&k=20&c=yJDe2IqJ79FXm4IgctxiFuR2Sc7cwY6SWvibZSpvjAk="
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
        document.getElementById("p1").innerHTML = `${questions[pageNumber].question}`;
        document.getElementById("p2").innerHTML = ``;
        img.src = `${questions[pageNumber].image}`;
    }
    
    if (pageNumber == 6) {
        img.style.display = "none";
        yesButton.style.display = "none";
        noButton.style.display = "none";
    }
    
}

function diagnosis() {
    /*

    */
}

function restart() {
    /*
    call begin() onclick
    */
}
