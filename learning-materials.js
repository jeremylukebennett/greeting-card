
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


  console.log(BirthdayCard.makeFrontMessage("birthday front"), BirthdayCard.makeInsideMessage("birthday inside"));
  console.log(NewYearsCard.makeFrontMessage("new years front"), NewYearsCard.makeInsideMessage("new years inside"));
  console.log(XmasCard.makeFrontMessage("xmas front"), XmasCard.makeInsideMessage("xmas inside"));


  