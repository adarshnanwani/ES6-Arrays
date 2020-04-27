fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10`)
  .then((data) => data.json())
  .then((data) => {
    const facts = data.map((catData) => catData.text);
    console.log(facts);
    fillData(facts);
  });

function fillData(arr) {
  const list = document.querySelector('#list');

  let htmlString = arr.map((fact) => '<li>' + fact + '</li>');
  htmlString = htmlString.join('');
  console.log(htmlString);
  list.innerHTML = htmlString;
}

const arr = ['a', 'd', 'a', 'r', 's', 'h'];
console.log(arr.join(''));
