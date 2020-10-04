console.log(window.document);

const FirstDiv = document.createElement("div");
document.body.appendChild(FirstDiv);
FirstDiv.innerText="S.Nida Fathima";
FirstDiv.classList.add("naam");

const oneDiv = document.createElement("div");
document.body.appendChild(oneDiv);
oneDiv.innerText="Contact: 9840619009";
oneDiv.classList.add("basic");

const twoDiv = document.createElement("div");
document.body.appendChild(twoDiv);
twoDiv.innerText="Mail-id: nidafathima.snf@gmail.com";
twoDiv.classList.add("basic");
 
const threeDiv = document.createElement("div");
document.body.appendChild(threeDiv);
threeDiv.innerText="Address: Sterling Road,Nungambakkam,Chennai-34";
threeDiv.classList.add("basic");

const FirstMove = document.createElement("div");
document.body.appendChild(FirstMove);
FirstMove.classList.add("move1");

const FirstPTag = document.createElement("p");
FirstMove.appendChild(FirstPTag);
FirstPTag.innerText="PROFESSIONAL SUMMARY ";
FirstPTag.classList.add("h3");

const SecondPTag = document.createElement("p");
FirstMove.appendChild(SecondPTag);
SecondPTag.innerText="Hardworking and reliable Associate Software Engineer";
SecondPTag.classList.add("p");

const ThirdTag = document.createElement("p");
FirstMove.appendChild(ThirdTag);
ThirdTag.innerText="Quick learner with good communication skills and problem-solving abilities";
ThirdTag.classList.add("p");

const FourthTag = document.createElement("p");
FirstMove.appendChild(FourthTag);
FourthTag.innerText="Motivated to continue to learn and grow as a professional";
FourthTag.classList.add("p");

const SecondMove = document.createElement("div");
document.body.appendChild(SecondMove);
SecondMove.classList.add("move2");

const H3Tag = document.createElement("h3");
SecondMove.appendChild(H3Tag);
H3Tag.innerText="EXPERIENCE";
H3Tag.classList.add("h3");

const ThirdPTag = document.createElement("p");
SecondMove.appendChild(ThirdPTag);
ThirdPTag.innerText="Associate Software Engineer -  Nov 2017 to Jan 2020";
const thirdptag = document.createElement("p");
ThirdPTag.appendChild(thirdptag);
thirdptag.innerText="Accenture Pvt Ltd, Chennai, Tamil Nadu";
ThirdPTag.classList.add("p");

const Value1 = document.createElement("p");
SecondMove.appendChild(Value1);
Value1.innerText="Project: Pfizer";
Value1.classList.add("p")

const Value2 = document.createElement("p");
SecondMove.appendChild(Value2);
Value2.innerText="Duration: 2 years ";
Value2.classList.add("p")

const Value3 = document.createElement("p");
SecondMove.appendChild(Value3);
Value3.innerText="Database: Oracle 11g ";
Value3.classList.add("p")


const Ultag = document.createElement("ul");
SecondMove.appendChild(Ultag);
const LiTag1 = document.createElement("li");
Ultag.appendChild(LiTag1);
LiTag1.innerText=" Oracle Apps Developer for a leading Pharmaceutical Company in US.";
LiTag1.classList.add("li");

const LiTag2 = document.createElement("li");
Ultag.appendChild(LiTag2);
LiTag2.innerText="Worked on Oracle PL/SQL, Oracle Reports and Forms.";
LiTag2.classList.add("li");

const LiTag3 = document.createElement("li");
Ultag.appendChild(LiTag3);
LiTag3.innerText="Resolved incidents consistently by working hard and with strong attention to detail.";
LiTag3.classList.add("li");

const LiTag4 = document.createElement("li");
Ultag.appendChild(LiTag4);
LiTag4.innerText="Worked on TOAD Application for direct DB connection/changes.";
LiTag4.classList.add("li");

const H4Tag1 = document.createElement("h4");
Ultag.appendChild(H4Tag1);
H4Tag1.innerText="Combined GEO-IPL-Catalyst L2 Support";

const LiTag5 = document.createElement("li");
Ultag.appendChild(LiTag5);
LiTag5.innerText="First level of support in case of application / functionality down";
LiTag5.classList.add("li");

const LiTag6 = document.createElement("li");
Ultag.appendChild(LiTag6);
LiTag6.innerText="Performed triage to identify issues in App layer / infra layer / DB / Interface layers.";
LiTag6.classList.add("li");

const LiTag7 = document.createElement("li");
Ultag.appendChild(LiTag7);
LiTag7.innerText="Contacted server team in case of Linux systems or core system drive issues";
LiTag7.classList.add("li");

const LiTag8 = document.createElement("li");
Ultag.appendChild(LiTag8);
LiTag8.innerText="Executed Python scripts for processing CPM interface files.";
LiTag8.classList.add("li");

const H4Tag2 = document.createElement("h4");
Ultag.appendChild(H4Tag2);
H4Tag2.innerText="EAMS";

const LiTag9 = document.createElement("li");
Ultag.appendChild(LiTag9);
LiTag9.innerText="Used Oracle PL/SQL in resolving tickets.";
LiTag9.classList.add("li");

const LiTag10 = document.createElement("li");
Ultag.appendChild(LiTag10);
LiTag10.innerText="Handled tickets on EAMS inventory and purchasing module";
LiTag10.classList.add("li");


const ThirdMove = document.createElement("div");
document.body.appendChild(ThirdMove);
ThirdMove.classList.add("move");

const H3Tag2 = document.createElement("h3")
ThirdMove.appendChild(H3Tag2);
H3Tag2.innerText="EDUCATION ";
H3Tag2.classList.add("h3");

const PTag1 = document.createElement("p");
ThirdMove.appendChild(PTag1);
PTag1.innerText="B.E.(Computer Science and Engineering)  May 2017 ";
PTag1.classList.add("h4");


const PTag2 = document.createElement("p");
ThirdMove.appendChild(PTag2);
PTag2.innerText="Panimalar Engineering College, Chennai, Tamil Nadu";
const ptag2 = document.createElement("p");
PTag2.appendChild(ptag2);
ptag2.innerText="GPA 7.74";
PTag2.classList.add("p");


const PTag3 = document.createElement("p");
ThirdMove.appendChild(PTag3);
PTag3.innerText="HSC  April 2013";
PTag3.classList.add("h4");


const PTag4 = document.createElement("p");
ThirdMove.appendChild(PTag4);
PTag4.innerText="Good Shepherd Matriculation Higher Secondary School, Chennai, Tamil Nadu";
const ptag4 = document.createElement("p");
PTag4.appendChild(ptag4);
ptag4.innerText="Graduated with 88.58%";
PTag4.classList.add("p");


const PTag5 = document.createElement("p");
ThirdMove.appendChild(PTag5);
PTag5.innerText="SSLC  April 2011";
PTag5.classList.add("h4");


const PTag6 = document.createElement("p");
ThirdMove.appendChild(PTag6);
PTag6.innerText="Good Shepherd Matriculation Higher Secondary School, Chennai, Tamil Nadu";
const ptag6 = document.createElement("p");
PTag6.appendChild(ptag6);
ptag6.innerText="Graduated with 90%";
PTag6.classList.add("p");


const SkillTag = document.createElement("div");
document.body.appendChild(SkillTag);
SkillTag.classList.add("fi");

const PTag7 = document.createElement("p");
SkillTag.appendChild(PTag7);
PTag7.innerText="SKILLS";
PTag7.classList.add("h3");

const DivTag1 = document.createElement("div");
SkillTag.appendChild(DivTag1);
DivTag1.classList.add("container");
const divtag1 = document.createElement("div");
DivTag1.appendChild(divtag1);
divtag1.innerText="Trained in Oracle Apps";
divtag1.classList.add("skills");
divtag1.classList.add("oracle");

const DivTag2 = document.createElement("div");
SkillTag.appendChild(DivTag2);
DivTag2.classList.add("container");
const divtag2 = document.createElement("div");
DivTag2.appendChild(divtag2);
divtag2.innerText="Well experienced in Amazon Work space (AWS).";
divtag2.classList.add("skills");
divtag2.classList.add("aws");

const DivTag3 = document.createElement("div");
SkillTag.appendChild(DivTag3);
DivTag3.classList.add("container");
const divtag3 = document.createElement("div");
DivTag3.appendChild(divtag3);
divtag3.innerText="Basics of PHP and HTML";
divtag3.classList.add("skills");
divtag3.classList.add("php");


const DivTag4 = document.createElement("div");
SkillTag.appendChild(DivTag4);
DivTag4.classList.add("container");
const divtag4 = document.createElement("div");
DivTag4.appendChild(divtag4);
divtag4.innerText="Python";
divtag4.classList.add("skills");
divtag4.classList.add("python");

const DivTag5 = document.createElement("div");
SkillTag.appendChild(DivTag5);
DivTag5.classList.add("container");
const divtag5 = document.createElement("div");
DivTag5.appendChild(divtag5);
divtag5.innerText="C";
divtag5.classList.add("skills");
divtag5.classList.add("c");

const DivTag6 = document.createElement("div");
SkillTag.appendChild(DivTag6);
DivTag6.classList.add("container");
const divtag6 = document.createElement("div");
DivTag6.appendChild(divtag6);
divtag6.innerText="C++";
divtag6.classList.add("skills");
divtag6.classList.add("cc")