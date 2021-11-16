const instructorsSection = document.querySelector('#instructors-list');

const data = [
{
  insctructor:'The Net Ninja',
  role:'Full stack developer',
  description:'Hey gang, my name\'\s Shaun and since a young age I\'\ ve had an obsession for nearly anything tech-related. I\'\ ve been coding since about the age of 15 (half of my life, now...phew!) and work as a full-stack web developer and online instructor.',
  img:'/media/Shaun.jpg',
},
{
  insctructor:'Traversi Media',
  role:'Full stack developer',
  description:'rad Traversy has been programming for around 12 years and teaching for almost 5 years. He is the owner of Traversy Media which is a successful web development YouTube channel',
  img:'/media/Brad.jpg',
},
{
  insctructor:'Dr. Angela Yu',
  role:'Developer and Lead Instructor',
  description:'I\'\ m Angela, I\'\ m a developer with a passion for teaching. I\'\ m the lead instructor at the London App Brewery, London\'\ s leading Programming Bootcamp. I\'\ ve helped hundreds of thousands of students learn to code and change their lives by becoming a developer.',
  img:'/media/Angela.jpg',
},
{
  insctructor:'Maximilian Schwarzmüller',
  role:'Professional Web Developer and Instructor',
  description:'Starting out at the age of 12 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development',
  img:'/media/Maximilian.jpg',
},
{
  insctructor:'Julia Leda',
  role:'Best Selling Instructor, Kafka Guru, 9x AWS Certified',
  description:'Stephane is a solutions architect, consultant and software developer that has a particular interest in all things related to Big Data, Cloud & API. He\'\ s also a many-times best seller instructor on Udemy for his courses in Apache Kafka and AWS.',
  img:'/media/Stephane.jpg',
},
{
      insctructor:'Jose Portilla',
  role:'Head of Data Science, Pierian Data Inc.',
  description:'Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science and programming.',
  img:'/media/Jose.jpg',
},
];

data.forEach((item) => {
  const card = `
    <div class="instructors-card">
        <div class="instructors-img">
        <img id="inst-img" src=".${item.img}" alt="">
        </div>
            <div class="instructors-items">
                <h3 class="instructors-name">
                ${item.insctructor}
                </h3>
                <h5 class="instructors-role">
                ${item.role}
                </h5>
                <hr>
                <p class="instructors-description">
                ${item.description}
                </p>
            </div>
    </div>
    `;
  instructorsSection.insertAdjacentHTML('afterbegin', card);
});