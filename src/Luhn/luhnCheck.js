
function luhnCheck(card) {

    const arr = []
    for (let i = 0; i < card.length; i++) {
      if (i % 2 === 0) {
        if (card[i] * 2 < 10) {
          arr.push(card[i] * 2);
        } else {
          arr.push(card[i] * 2 - 9);
        }
      } else {
        arr.push(parseInt(card[i],10))
      }
    }
    return arr.reduce( (prv, cur) => prv + cur) % 10 === 0;
  };

  export default luhnCheck;