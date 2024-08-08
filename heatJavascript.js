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
        image:""
    },
    {
        symptom: 2,
        question: "Is patient experiencing any moderate symptoms: i.e. heavy sweating, rapid pulse, dizziness, nausea?",
        image:""
    },
    {
        symptom: 3,
        question: "Is patient experiencing muscle cramps?",
        image:""
    },
    {
        symptom: 4,
        question: "Is patient experiencing breathing difficulties or tingling sensations",
        image:""
    },
    {
        symptom: 5,
        question: "Is patient experiencing swelling in extremities?",
        image:""
    },
    {
        symptom: 6,
        question: "Is patient experiencing red, itchy skin?",
        image:""
    },
    {
        symptom: 7,
        question: "Please re-evaluate symptoms and consult a healthcare professional. Feel free to restart.",
        image:""
    },
]

