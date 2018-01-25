
  //Refactor this to link this object to cardMaker
  
  const CardMaker = {
    makeFrontMessage: function(string) {
      return `<h2>${string}</h2>`
    },
    makeInsideMessage: function(string) {
      return `<h2>${string}</h2>`
    }
    
  }
  
  //Refactor this to link this object to cardMaker
  const BirthdayCard = Object.create(CardMaker);
  const NewYearsCard = Object.create(CardMaker);
  const XmasCard = Object.create(CardMaker);


  console.log(BirthdayCard.makeFrontMessage("Happy Birthday...."), BirthdayCard.makeInsideMessage("..to you!"));
  console.log(NewYearsCard.makeFrontMessage("Happy New Year!"), NewYearsCard.makeInsideMessage("¯\\\_(ツ)_/¯"));
  console.log(XmasCard.makeFrontMessage("Merry Xmas"), XmasCard.makeInsideMessage("BLAH BLAH BLAH"));





const AdultBday = Object.create(BirthdayCard);

console.log(AdultBday.makeFrontMessage("Happy Birthday, Adult!"), AdultBday.makeInsideMessage("You're an adult and its your birthday!"));


let greeting = document.getElementsByClassName("holiday-greeting")[0];
greeting.innerHTML = AdultBday.makeFrontMessage("Happy Birthday, Adult!") + AdultBday.makeInsideMessage("¯\\\_(ツ)_/¯");

