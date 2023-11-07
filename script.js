const employeelist = [
  {id : 1 , name : "Ko Kyaw Thet Khine Lin"},
  {id : 2 , name : "Ko Kaung Mon"},
  {id : 3 , name : "Ko Wai Lin Oo"},
  {id : 4 , name : "Ko Htet Myat Aung"},
  {id : 5 , name : "Ma Hnin Thawtar"},
  {id : 6 , name : "Ma Bar Gay Wa Thi"},
  {id : 7 , name : "Ma Hmu Eainsoe"},
  {id : 8 , name : "Ma Nodim Par"},
  {id : 9 , name : "Ma Thet Hnin Myo"},
  {id : 10 , name : "Ma Thet Htar"},
  {id : 11 , name : "Ma Thet Htar Oo"},
  {id : 12 , name : "Ma Win Win Ei"},
  {id : 13 , name : "Ma Wai Wai Aung"},
]


function search() {
  const filter = document.getElementById('myinput').value.toUpperCase();
  const cards = document.querySelectorAll('.card');

  employeelist.forEach((employee, index) => {
    const name = employee.name.toUpperCase();
    const card = cards[index];

    if (name.includes(filter)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}


const button = document.getElementById('button')

button.addEventListener('click', () => {
  search()
})

document.onkeydown=function(){
  if(window.event.keyCode=='13'){
    search()
  }
}

const titles = document.querySelectorAll('.titleName')
titles.forEach((title,index) => {
  title.append(employeelist[index].name)
})


const idlists = ['.getID', '.getName', '.getPosition', '.getNRC', '.getPhone'];

for (const getClass of idlists) {
  const elements = document.querySelectorAll(getClass);
  const index = idlists.indexOf(getClass);

  elements.forEach((element, indexNumber) => {
    switch (index) {
      case 0:
        element.textContent ="Employee ID : " + employeelist.length + "00" + employeelist[indexNumber].id;
        break;
      case 1:
        element.textContent ="Name : " +employeelist[indexNumber].name;
        break;
      case 2:
        element.textContent = "Position : "+"...........";
        break;
      case 3:
        element.textContent ="NRC Number : "+"10/ " +employeelist.length+"0000"
        break;
      case 4:
        element.textContent ="Phone Numbe : " + "09-898813" + employeelist.length + employeelist[indexNumber].id;
        break;
      default:
        break;
    }
  });
}



