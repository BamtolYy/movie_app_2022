import React from 'react';


function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  )
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC_0831-e1645400234347.jpg"

  },
  {
    id: 2,
    name: "bap",
    image:"https://w.namu.la/s/899581697d8d6c1e7c47c26a6148adea182a445f97f7436fee613b72a1bde2a11ee2931af82ec4663129ff1f33a73e68163581c3aa758639a5a96ef148ec1fdc41eef19c2536e92659cb6f7ed398f4597c6e658b1dd1b8e5a84d1244c2337ff7"

  },
  {
    id: 3,
    name: "ice cream",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg/220px-Strawberry_ice_cream_cone_%285076899310%29.jpg"

  }
]


function App() {
  return (
    <div>
      <h1>Hello</h1>
      {
        foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image}/>))
      }
    </div>
  );
}

export default App;
