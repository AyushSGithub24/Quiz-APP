let text = `{
    "questions": [
        {
            "question": "A ____ constraint requires that an entity belong to no more than one lower-level entity set.",
            "options": ["Disjointness", "Uniqueness", "Special", "Relational"],
            "answer": "Disjointness"
        },
        {
            "question": "Which of the following is another name for a weak entity?",
            "options": ["Child", "Owner", "Dominant", "All of the above"],
            "answer": "Child"
        },
        {
            "question": "Which of the following is a component of the DBMS?",
            "options": ["Data", "Data languages", "Data manager", "All of the above"],
            "answer": "All of the above"
        },
        {
            "question": "What does 'object' refer to in an Object-Based data model?",
            "options": ["Data carrying its properties", "Objects carrying its properties", "Relations carrying its properties", "Models carrying its properties"],
            "answer": "Objects carrying its properties"
        },
        {
            "question": "Which of the following is not a generalization constraint?",
            "options": ["Condition-defined", "User-defined", "Disjoint", "Machine-defined"],
            "answer": "Machine-defined"
        },
        {
            "question": "A university uses a DBMS to handle student information. To maintain data integrity, which DBMS function ensures that data entered is accurate and reliable?",
            "options": ["Data redundancy", "Data validation", "Data mining", "Data replication"],
            "answer": "Data validation"
        },
        {
            "question": "Which of the following is generally used for performing tasks like creating the structure of the relations and deleting relations?",
            "options": ["DML", "Query", "Relational Schema", "DDL"],
            "answer": "DDL"
        },
        {
            "question": "In which phase of the Database Development Life Cycle is the ER model typically transformed into a relational schema?",
            "options": ["Requirement Analysis", "Logical Design", "Physical Design", "Implementation"],
            "answer": "Logical Design"
        },
        {
            "question": "Which of the following represents a weak entity set in an ER diagram?",
            "options": ["An entity set that does not have a primary key", "An entity set that depends on another entity set for its primary key", "An entity set that participates in a weak relationship", "An entity set that is represented with a dotted line"],
            "answer": "An entity set that depends on another entity set for its primary key"
        },
        {
            "question": "Which of the following best defines a 'union type' or 'category' in an EER model?",
            "options": ["A specialization where each subclass inherits from a single superclass", "A generalization where a subclass is a subset of multiple superclasses", "A specialization where a subclass inherits from multiple superclasses", "A combination of aggregation and generalization"],
            "answer": "A specialization where a subclass inherits from multiple superclasses"
        },
        {
            "question": "A/An ____ of a database is the data in it at a specific moment in time.",
            "options": ["Schema", "Instance", "Instant", "Schema"],
            "answer": "Instance"
        },
        {
            "question": "Data objects and relationships among them are represented logically in a/an ____",
            "options": ["Relational data model", "ER model", "Object-based model", "Semi-structured data model"],
            "answer": "ER model"
        },
        {
            "question": "Which of the following best describes a 'composite attribute' in EER diagrams?",
            "options": ["An attribute that consists of a single value", "An attribute that is derived from other attributes", "An attribute that can be broken down into smaller components", "An attribute that is unique across the entity set"],
            "answer": "An attribute that can be broken down into smaller components"
        },
        {
            "question": "During which phase of the Database Development Life Cycle is the indexing strategy primarily determined?",
            "options": ["Conceptual design", "Logical design", "Physical design", "Maintenance"],
            "answer": "Physical Design"
        },
        {
            "question": "Which of the following refers to the number of tuples in a relation?",
            "options": ["Entity", "Column", "Cardinality", "None of the above"],
            "answer": "Cardinality"
        },
        {
            "question": "What is the purpose of an index in an ER diagram?",
            "options": ["To uniquely identify entities in an entity set", "To improve the efficiency of database queries", "To define the cardinality of relationships", "To represent a recursive relationship"],
            "answer": "To improve the efficiency of database queries"
        },
        {
            "question": "Which of the following cardinalities represents a one-to-many (1:M) relationship in an ER diagram?",
            "options": [
                "Each entity in A can be associated with many entities in B, and each entity in B can be associated with many entities in A.",
                "Each entity in A can be associated with at most one entity in B, and each entity in B can be associated with at most one entity in A.",
                "Each entity in A can be associated with at most one entity in B, but each entity in B can be associated with many entities in A.",
                "Each entity in A can be associated with exactly one entity in B, and each entity in B can be associated with at most one entity in A."
            ],
            "answer": "Each entity in A can be associated with at most one entity in B, but each entity in B can be associated with many entities in A."
        },
        {
            "question": "Scenario A: A company's employee database is organized in a hierarchy where each department can have multiple employees, but each employee is assigned to one department only. Which data model best represents this company's database structure?",
            "options": ["Network", "Hierarchical", "Relational", "Object-oriented"],
            "answer": "Hierarchical"
        },
        {
            "question": "The entity set Person is classified as Student and Employee. This process is called ____",
            "options": ["Generalization", "Specialization", "Inheritance", "Constraint generalization"],
            "answer": "Specialization"
        },
        {
            "question": "A startup is considering using a DBMS to manage its customer data. What is one significant initial disadvantage they should be aware of?",
            "options": ["Enhanced data security", "High initial cost", "Improved data integrity", "Easier data access"],
            "answer": "High initial cost"
        },
        {
            "question": "Which of the following best describes the concept of the 'union type' or 'category' in the EER model?",
            "options": [
                "It is a specialization where a subclass belongs to one superclass.",
                "It is a specialization where a subclass belongs to multiple superclasses.",
                "It is a generalization where a superclass belongs to multiple subclasses.",
                "It is an aggregation of entity sets."
            ],
            "answer": "It is a specialization where a subclass belongs to multiple superclasses."
        },
        {
            "question": "Which symbol typically represents a weak entity in an EER diagram?",
            "options": ["Single rectangle", "Double rectangle", "Ellipse", "Triangle"],
            "answer": "Double rectangle"
        },
        {
            "question": "Which of the following is not a component of the DBMS architecture?",
            "options": ["Query processor", "Database engine", "Transaction manager", "Network layer"],
            "answer": "Network layer"
        },
        {
            "question": "What statement explains the relational data model?",
            "options": [
                "Within a table, rows and columns are used to arrange the data.",
                "Data objects and relationships among them are represented logically in this model.",
                "Functions, encapsulation, and object identity are also considered in addition to the ER model.",
                "These data models facilitate data specification where different attributes are defined for the same data items of the same type."
            ],
            "answer": "Within a table, rows and columns are used to arrange the data."
        },
        {
            "question": "Designing an ER diagram for a social media platform, which type of relationship best represents the scenario where users can follow other users, and each user can have multiple followers?",
            "options": ["One-to-one (1:1)", "One-to-many (1:M)", "Many-to-one (M:1)", "Many-to-many (M:M)"],
            "answer": "Many-to-many (M:M)"
        },
        {
            "question": "Which notation is used to represent a relationship between two entities with an associative entity in an ER diagram?",
            "options": ["Double diamond", "Dashed ellipse", "Double rectangle", "Dotted line"],
            "answer": "Double diamond"
        },
        {
            "question": "In an ER diagram, what does a double rectangle symbolize?",
            "options": ["Strong entity", "Weak entity", "Inheritance", "Specialization"],
            "answer": "Weak entity"
        },
        {
            "question": "Which of the following can be used to denote a discriminator attribute in a specialization in the EER model?",
            "options": ["Double line", "Dashed line", "Ellipse", "Rectangle"],
            "answer": "Ellipse"
        },
        {
            "question": "Which of the following statements about 'overlapping' and 'disjoint' constraints in EER models is true?",
            "options": [
                "Overlapping constraints allow an entity to belong to multiple subclasses simultaneously, while disjoint constraints do not.",
                "Disjoint constraints allow an entity to belong to multiple subclasses simultaneously, while overlapping constraints do not.",
                "Overlapping constraints require that each entity belongs to only one subclass, while disjoint constraints allow multiple subclass memberships.",
                "Disjoint constraints are used to enforce subclass inheritance, while overlapping constraints are used for union types."
            ],
            "answer": "Overlapping constraints allow an entity to belong to multiple subclasses simultaneously, while disjoint constraints do not."
        },
        {
            "question": "What is the key difference between the ER model and the EER model?",
            "options": ["EER model includes additional concepts like generalization, specialization, and aggregation.", "ER model supports complex inheritance structures.", "ER model supports union types and categories.", "EER model is mainly used for non-relational databases."],
            "answer": "EER model includes additional concepts like generalization, specialization, and aggregation."
        }
    ]
}`;
// const obj = JSON.parse(text);
// const arr = obj.questions;
// let currentQuestionIndex = 0;
// let score = 0;

// const container = document.querySelector('.container');
// const questionElement = document.getElementById('question');
// const optionsElement = document.getElementById('options');
// const nextButton = document.getElementById('next');
// const resultContainer = document.getElementById('result');

// function randomize(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
// }

// randomize(arr);
// let wrong=[];
// function generateQuestion() {
//   const currentQuestion = arr[currentQuestionIndex];
//   questionElement.textContent = currentQuestion.question;
//   optionsElement.innerHTML = '';
//   randomize(currentQuestion.options)
//   currentQuestion.options.forEach((option,
//  index) => {
//     const li = document.createElement('li');
//     li.textContent = option;
//     li.addEventListener('click',
//  () => {
//       if (option === currentQuestion.answer) {
//         score++;
//       }else{
//         wrong.push( currentQuestion);
//       }
//       currentQuestionIndex++;
//       if (currentQuestionIndex < arr.length) {
//         generateQuestion();
//       } else {
//         displayResult();
//       }
//     });
//     optionsElement.appendChild(li);
//   });
//   nextButton.addEventListener('click',()=>{
//     currentQuestionIndex++;
//       if (currentQuestionIndex < arr.length) {
//         generateQuestion();
//       } else {
//         displayResult();
//       }
//   })
// }

// function displayResult() {
//   container.style.display = 'none';
//   const h1=document.createElement('h1');
//   h1.textContent=`You scored ${score} out of ${arr.length}`;
//   const ol=document.createElement('ol');
//   for(let i of wrong){
//     let wrongQuestion = arr[i];
//     const li=document.createElement('li');
//     const h3=document.createElement('h3');
//     h3.textContent=wrongQuestion.question;
//     const p=document.createElement('p');
//     p.textContent=`Correct answer = ${wrongQuestion.answer}`
//     li.appendChild(h3);
//     li.appendChild(p)
//     ol.appendChild(li)
//   }
//   resultContainer.appendChild(h1);
//   resultContainer.appendChild(ol)
// }
// generateQuestion();
const obj = JSON.parse(text);
const arr = obj.questions;
let currentQuestionIndex = 0;
let score = 0;

const container = document.querySelector('.container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next');
const resultContainer = document.getElementById('result');
const totalTime = document.querySelector('.total-time');
totalTime.textContent = `${arr.length} min`
const timer = document.querySelector('#timer');
const tim=document.querySelector('.timer');
let time = 0;
let tt=0;

function randomize(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

randomize(arr);
let wrong = [];
function generateQuestion() {
    const currentQuestion = arr[currentQuestionIndex];
    questionElement.textContent = `Q${currentQuestionIndex + 1} - ${currentQuestion.question}`;
    optionsElement.innerHTML = '';
    randomize(currentQuestion.options);
    currentQuestion.options.forEach((option) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => {
            if (option === currentQuestion.answer) {
                score++;
            } else {
                wrong.push(currentQuestion);
            }
            nextQuestion();
        });
        optionsElement.appendChild(li);
    });
}
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < arr.length) {
        generateQuestion();
    } else {
        clearInterval(id);
        tim.innerHTML="";
        displayResult();
    }
    time = 0;
}
nextButton.addEventListener('click', nextQuestion);

function displayResult() {
    container.style.display = 'none';
    const h1 = document.createElement('h1');
    h1.textContent = `You scored ${score} out of ${arr.length}`;
    const h4=document.createElement('h4');
        h4.textContent=`and You have completed it in ${tt/60<0 ? 0:Math.floor(tt/60) } min and ${tt%60} secs`;
    const ol = document.createElement('ol');
    wrong.forEach(wrongQuestion => {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        h3.textContent = wrongQuestion.question;
        const p = document.createElement('p');
        p.textContent = `Correct answer = ${wrongQuestion.answer}`;
        li.appendChild(h3);
        li.appendChild(p);
        ol.appendChild(li);
    });
    resultContainer.appendChild(h1);
    resultContainer.appendChild(h4);
    resultContainer.appendChild(ol);
    const a=document.createElement('a');
    a.href="./index.html";
    resultContainer.appendChild(a);

}
let id = setInterval(() => {
    time++;
    tt++;
    timer.textContent = `${time} sec`
    if (time > 60) {
        nextQuestion();
    }
}, 1000);

generateQuestion();