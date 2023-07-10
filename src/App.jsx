import { useEffect, useState } from "react";

function App() {
  // ------------всі жарти----------
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    const j = localStorage.getItem("jokes");
    if(j) {
      setJokes(JSON.parse(j));
    }
  
  }, []);
  console.log(jokes);
  //-----------вподобали жарт-----------
  // const liked = (id) => {
  //   let likedJoke = jokes.filter((joke) => joke.id !== id);
  //   setJokes(likedJoke);
  //   localStorage.setItem("jokes", JSON.stringify(likedJoke));
  // }

  //--------------додали жарт--------------
// const getJoke = () => {
//   let newGetJoke = [
//     ...jokes,
//     {
//       id: jokes.length + 1,
//       createAdd: getDate(),
//       category: jokes.category,
//     }
//   ]
//   setJokes(newGetJoke);
//   localStorage.setItem("jokes", JSON.stringify(newGetJoke));
// }

// useEffect(() => {
//   const localJokes = JSON.parse(localStorage.getItem("jokes"));
//   setJokes(localJokes);
// }, [])
  // ------------показувати категорії-----------
  const [categoryIsOn, setCategoryIsOn] = useState("random"); //тут по дефолту буде вибрано рандом
  
  // --------дата------
  
  // const getDate = () => {
  //   let d = new Date();
  //   let date = d.getDate();
  //   let month = d.getMonth();
  //   let year = d.getFullYear();
  //   let zeroFormatMonth;

  //   if (String(month).length === 1) {
  //     zeroFormatMonth = "0" + (month + 1);
  //   } else {
  //     zeroFormatMonth = month + 1;
  //   }
  //   return `${date}.${zeroFormatMonth}.${year}`;
  // };
  // getDate();

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="main">
          <h1 className="logo">MSI 2020</h1>
          <div className="greeting">
            <h2 className="greeting__title">Hey!</h2>
            <p className="greeting__content">
              Let’s try to find a joke for you:
            </p>
          </div>
          <form className="radio-buttons">
            <label
              className="radio-button"
              onClick={() => setCategoryIsOn("random")}
            >
              <input
                defaultValue="Random"
                name="option"
                type="radio"
                id="random-option"
                checked={categoryIsOn === "random"} //тут відмічено що буде ввімкнено при завантаженні
              />
              <div className="radio-circle" />
              <span className="radio-label">Random</span>
            </label>

            <label
              className="radio-button"
              onClick={() => setCategoryIsOn("category")}
            >
              <input
                defaultValue="Category"
                name="option"
                type="radio"
                id="category-option"
              />
              <div className="radio-circle" />
              <span className="radio-label">From categories</span>
            </label>
            {categoryIsOn === "category" && (
              /* const categories = () => {
                    const category =[
                      {name: "animal", id: 1}
                      {name: "career", id: 2}
                      {name: "celebrity", id: 3}
                      ...
                    ];
                    return (
                       <div className="items-category block">
                         {categories.map(category => (
              <button className="cat-btn">{category.name}</button>
                    )}
            ))}*/
              <div className="items-category block">
                <button className="cat-btn">animal</button>
                <button className="cat-btn">career</button>
                <button className="cat-btn">celebrity</button>
                <button className="cat-btn">dev</button>
                <button className="cat-btn">explicit</button>
                <button className="cat-btn">fashion</button>
                <button className="cat-btn">food</button>
                <button className="cat-btn">history</button>
                <button className="cat-btn">money</button>
                <button className="cat-btn">movie</button>
                <button className="cat-btn">music</button>
                <button className="cat-btn">political</button>
                <button className="cat-btn">religion</button>
                <button className="cat-btn">science</button>
                <button className="cat-btn">sport</button>
                <button className="cat-btn">travel</button>
              </div>
            )}
            <label
              className="radio-button"
              onClick={() => setCategoryIsOn("search")}
            >
              <input
                defaultValue="Search"
                name="option"
                type="radio"
                id="search-option"
              />
              <div className="radio-circle" />
              <span className="radio-label">Search</span>
            </label>
          </form>
          {categoryIsOn === "search" && (
            <input
              className="search-input"
              type="text"
              placeholder="Free text search..."
            />
          )}
          <button className="options-button">Get a joke</button>

          <div className="jokes-container">
            {jokes.map((joke) => {
              return (
                <div className="jokes-box" key={joke.id}>
                  <img src="./img/heart.svg" alt="Like" className="like" />
                  <div className="mess">
                    <img
                      src="./img/message.svg"
                      alt="Message"
                      className="message"
                    />
                  </div>

                  <div className="jokes-content">
                    <span>
                      ID: &nbsp;
                      <a href={joke.url}> {joke.id}</a>
                      <img src="./img/link.svg" alt="Link" />
                    </span>
                    <p>
                      {joke.value}
                    </p>
                    <div className="joke-footer">
                      <span>Last update: {joke.createAdd}</span>
                      <button className="joke-btn">celebrity</button>
                    </div>
                  </div>
                </div>
             );
             })} 
          </div>
        </div>
        <div className="aside">
          <div className="aside-title">Favourite</div>
          <div className="aside-container">

            <div className="favourite-box">
              <img src="./img/heart.svg" alt="Like" className="fav-like" />
              <div className="fav-mess" >
                <img
                  src="./img/message.svg"
                  alt="Message"
                  className="fav-message"
                />
              </div>
              <div className="fav-content">
                <span>
                  ID: &nbsp;
                  <a href=""> XNaAxUduSw6zANDaIEab7A</a>
                  <img src="./img/link.svg" alt="Link" />
                </span>
                <p>
                  No one truly knows who's Chuck Norris' real father. No one is
                  biologically strong enough for this. He must've conceived
                  himself.
                </p>
                <span>Last update:</span>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
