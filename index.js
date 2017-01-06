var IQexamObj = {
    name: "C Exam",
    time: 30,
    Quests: [
        {
            head: "The major language of World Wide Web is ___________?",
            answers: [/*"a: HTML", "b: PHP", "c: ASP.NET", "d: Java"*/"True", "false"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "HTML is an abbreviation for?",
            answers: ["a: HiTech Meaningful Language", "b: HyperText Meaningful Language", "c: HiTech Markup Language", "d: HyperText Markup Language"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "___________ is a device from where the information is sent?",
            answers: ["a: Transmitter", "b: Spreadsheet", "c: Simulation", "d: Modulation"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "LAN is an abbreviation for ?",
            answers: ["a: Large Access Network", "b: Local Access Network", "c: Large Area Network", "d: Local Area Network"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "Full form of URL is ?",
            answers: ["a. Uniform Resource Locator", "b. Uniform Resource Link", "c. Uniform Registered Link", "d. Unified Resource Link"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "FTP is an abbreviation for?",
            answers: ["a: File Transfer Position", "b: File Transfer Protection", "c: File Transfer Protocol", "d: File Transfer Possibility"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "In which of the following form, data is stored in computer ?",
            answers: ["a: Decimal", "b: Binary", "c: HexaDecimal", "d: Octal"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "The brain of any computer system is ?",
            answers: ["a: ALU", "b: Memory", "c: CPU", "d: Control unit"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "Which of the following computer language is used for artificial intelligence ?",
            answers: ["a: FORTRAN", "b: PROLOG", "c: C", "d: COBOL"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "The binary system uses powers of ?",
            answers: ["a: 2", "b: 8", "c: 10", "d: 16"],
            correctAnswer: 0,
            grade: 1
        }
    ]
};

window.addEventListener("load", function () {
    var questHead = document.createElement("h3");
    var questNumHead = document.createElement("h2");
    //Must be Dynamic
    var AnsRadArr = [document.createElement("input"), document.createElement("input"), document.createElement("input"), document.createElement("input")];
    var AnsLabelArr = [document.createElement("label"), document.createElement("label"), document.createElement("label"), document.createElement("label")];
    //to load fist element
    var index = 0;
    appendQuest(index);

    btnStart.addEventListener("click", function () {
        index = 0;
        appendQuest(index);
    });
    btnNext.addEventListener("click", function () {
        if (index >= 0 && index < IQexamObj.Quests.length - 1) {
            index = ++index;
            appendQuest(index);
        }
    });
    btnPrev.addEventListener("click", function () {
        if (index > 0 && index < IQexamObj.Quests.length) {
            index = --index;
            appendQuest(index);
        }
    });
    btnLast.addEventListener("click", function () {
        index = IQexamObj.Quests.length - 1;
        appendQuest(index);
    });
    btnMark.addEventListener("click", function () {
         appendSideQuest(index);
    });
    btnFinish.addEventListener("click", function () {
        var gradeSum = 0;
        for (var y = 0; y < IQexamObj.Quests.length; y++)
        {
            if (IQexamObj.Quests[y].correctAnswer == IQexamObj.Quests[y].userAnswer)
                gradeSum += IQexamObj.Quests[y].grade;
        }
        if (gradeSum >= 5)
            alert("Congratulation\n You passed the exam, your grade is " + gradeSum);
        else
            alert("Unfortunately\n You failed, your grade is " + gradeSum);
    });

    //function to append elements in the mainDiv
    function appendQuest(index)
    {
        questNumHead.innerText = "Question No." + (index + 1);
        mainDiv.appendChild(questNumHead);
        var currentQues = IQexamObj.Quests[index];

        questHead.innerText = currentQues.head;
        mainDiv.appendChild(questHead);

        for (var x = 0; x < currentQues.answers.length; x++)
        {
            // var rad = document.createElement("input");
            AnsRadArr[x].setAttribute("type", "radio");
            AnsRadArr[x].setAttribute("value", x);
            AnsRadArr[x].setAttribute("name", "q" + index);
            AnsRadArr[x].checked=false;
            AnsRadArr[x].addEventListener("click", function () {
                qIndex = Number(this.name.substring(1));
                IQexamObj.Quests[qIndex].userAnswer = this.value;
            });
            if (currentQues.userAnswer != undefined)
                AnsRadArr[currentQues.userAnswer].checked=true;

            mainDiv.appendChild(AnsRadArr[x]);

            //var lable = document.createElement("lable");
            AnsLabelArr[x].innerText = currentQues.answers[x];
            mainDiv.appendChild(AnsLabelArr[x]);
        };
    };
    var MarkQuestArr=[];   // when we click mark empty Array so must be global
    //function to append elements in the side div
    function appendSideQuest(Markindex)
    {
         var qSideHead = document.createElement("h4");    // side div
         qSideHead.innerText = "Question No." + (Markindex + 1);

            if(!(MarkQuestArr.includes(Markindex)))
            {
                MarkQuestArr.push(Markindex);
                sideDiv.appendChild(qSideHead);
            }
        qSideHead.addEventListener("click",function(){
            index=Markindex;
            appendQuest(Markindex);
        });
    };
    //Random Fuunction
      function shuffleQuestArr(array) {
        var tmp, current, top = array.length;
        if(top) while(--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
        return array;
    };

});//End of Load Event
