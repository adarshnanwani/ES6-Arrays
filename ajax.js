fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10`)
  .then((data) => data.json())
  .then((data) => {
    const facts = data.map((catData) => catData.text);
    console.log(facts);
  });
