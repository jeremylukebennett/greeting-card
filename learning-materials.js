const CardMaker = {
    makeFrontMessage: function(string) {
      return `<h2>${string}</h2>`
    },

  }
  
  //Refactor this to link this object to cardMaker
  const BirthdayCard = Object.create(CardMaker);

  BirthdayCard.makeFrontMessage("Happy Birthday!");


  console.log(BirthdayCard.makeFrontMessage);
  