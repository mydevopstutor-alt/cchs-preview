/* Transcribed exactly from the CCHS "Current Programs" sheet (UWIN Pro Inc o/a Canadian College for Higher Studies). Fees in CAD. */
const PROGRAMS=[
[1,"Diploma in Graphic, Web Design and Digital Marketing",860,41,15645,19395,"business","Diploma"],
[2,"Post-Graduate Diploma in International Business Management (Finance)",980,49,12740,16690,"business","Post-Graduate Diploma"],
[3,"Diploma in Accounting and Payroll Administration",980,49,10100,13950,"business","Diploma"],
[4,"Diploma in Computerized Accounting with Office Administration",720,36,9680,13180,"business","Diploma"],
[5,"Diploma in Business Administration",954,47,11650,15600,"business","Diploma"],
[6,"Diploma in Supply Chain & Logistics Management",739,36,13995,16995,"business","Diploma"],
[7,"Diploma in Medical & Health Office Administrator",740,37,11800,15750,"health","Diploma"],
[8,"Diploma in Cloud and Cybersecurity Technologies",373,18,6975,8175,"it","Diploma"],
[9,"Diploma in Systems Administrator (Linux/Unix)",882,40,11950,15900,"it","Diploma"],
[10,"Diploma in Cloud-Based IT Support & Cybersecurity",762,38,12954,15554,"it","Diploma"],
[11,"Diploma in Network (LAN/WAN) Administration",760,37,11800,15750,"it","Diploma"],
[12,"Diploma in Enterprise Linux & Application Security Engineering",1100,50,16940,19540,"it","Diploma"],
[13,"Diploma in Cloud Data Analytics & Edge AI Security",880,44,16720,18920,"it","Diploma"],
[14,"Diploma in Cybersecurity & AI-Driven Threat Detection",915,47,16287,18787,"it","Diploma"],
[15,"Diploma in Security and Automation of Multi-cloud Containerized Workloads",960,48,16128,18628,"it","Diploma"],
[16,"Advanced Diploma in Cisco & Red Hat Engineering",755,37,12690,15440,"it","Advanced Diploma"],
[17,"Advanced Diploma in AI, Deep Learning & Natural Language Processing",740,37,14948,17448,"ai","Advanced Diploma"],
[18,"Post-Graduate Diploma in ERP Information Systems Technical Consultant",1662,83,25800,29750,"business","Post-Graduate Diploma"],
[19,"Post-Graduate Diploma in Enterprise Cybersecurity & Governance Automation",1570,78,28260,31060,"it","Post-Graduate Diploma"],
[20,"Diploma in Prompt Engineering and Generative AI for Office Professionals",400,22,7400,8800,"ai","Diploma"],
[21,"Diploma in Cyber Security with Artificial Intelligence",990,45,14962,18862,"it","Diploma"],
[22,"Diploma in Internet of Things (IoT) Technology",993,47,16833,20733,"it","Diploma"],
[23,"Post-Graduate Diploma in Machine Learning & Artificial Intelligence",900,43,17820,21720,"ai","Post-Graduate Diploma"],
[24,"Certificate in NACC Personal Support Worker DE 2022",700,22,7800,11000,"health","Certificate"],
[25,"Diploma in NACC Early Childhood Assistant 2021",1000,52,10199,13199,"health","Diploma"]
].map(([n,name,h,w,loc,intl,field,cred])=>({n,name,h,w,loc,intl,field,cred,id:name.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}));
const FIELDS={it:"IT, Cloud & Cybersecurity",ai:"AI & Data",business:"Business & Office",health:"Healthcare & Community"};
const FEATURED=[20,24];
const money=v=>'$'+v.toLocaleString('en-CA');
