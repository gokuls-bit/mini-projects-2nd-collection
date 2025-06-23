// src/services/api.jsx
// src/App.jsx
import React from 'react';
import MovieButtonList from './components/ButtonRenderer';
import './css/App.css'; // Import your custom styles
function App() {
  return (
    <div>
      <h2>🎬 Clickable Movie Buttons</h2>
      <MovieButtonList />
    </div>
  );
}

export default App;

const movies =[
  {
    id: 1,
    title: "Avengers: Endgame",
    year: "2019",
    release_date: "2019-04-26",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Avengers:_Endgame"
  },
  {
    id: 2,
    title: "Spider-Man: No Way Home",
    year: "2021",
    release_date: "2021-12-17",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/0/0f/Spider-Man_No_Way_Home_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home"
  },
  {
    id: 3,
    title: "Black Panther",
    year: "2018",
    release_date: "2018-02-16",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Black_Panther_(film)"
  },
  {
    id: 4,
    title: "The Batman",
    year: "2022",
    release_date: "2022-03-04",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/6/6e/The_Batman_%282022_film%29_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Batman"
  },
  {
    id: 5,
    title: "Joker",
    year: "2019",
    release_date: "2019-10-04",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Joker_(2019_film)"
  },
  {
    id: 6,
    title: "Star Wars: The Rise of Skywalker",
    year: "2019",
    release_date: "2019-12-20",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/0/0b/Star_Wars_The_Rise_of_Skywalker_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Star_Wars:_The_Rise_of_Skywalker"
  },
  {
    id: 7,
    title: "Mission: Impossible – Fallout",
    year: "2018",
    release_date: "2018-07-27",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/f/ff/Mission_Impossible_-_Fallout_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Mission:_Impossible_%E2%80%93_Fallout"
  },
  {
    id: 8,
    title: "Top Gun: Maverick",
    year: "2022",
    release_date: "2022-05-27",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/1/16/Top_Gun_Maverick_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Top_Gun:_Maverick"
  },
  {
    id: 9,
    title: "Red Notice",
    year: "2021",
    release_date: "2021-11-12",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/f/f2/Red_Notice_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Red_Notice_(film)"
  },
  {
    id: 10,
    title: "Black Adam",
    year: "2022",
    release_date: "2022-10-21",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/a/a1/Black_Adam_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Black_Adam"
  },
  {
    id: 11,
    title: "Jumanji: Welcome to the Jungle",
    year: "2017",
    release_date: "2017-12-20",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/2/2e/Jumanji_Welcome_to_the_Jungle.png",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Jumanji:_Welcome_to_the_Jungle"
  },
  {
    id: 12,
    title: "F9",
    year: "2021",
    release_date: "2021-06-25",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/3/30/F9_film_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/F9_(film)"
  },
  {
    id: 13,
    title: "Pathaan",
    year: "2023",
    release_date: "2023-01-25",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/f/fb/Pathaan_film_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Pathaan"
  },
  {
    id: 14,
    title: "RRR",
    year: "2022",
    release_date: "2022-03-25",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpeg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/RRR_(film)"
  },
  {
    id: 15,
    title: "Dangal",
    year: "2016",
    release_date: "2016-12-23",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Dangal"
  },
  {
    id: 16,
    title: "Jawan",
    year: "2023",
    release_date: "2023-09-07",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/3/30/Jawan_poster.jpeg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Jawan"
  },
  {
    id: 17,
    title: "The Kashmir Files",
    year: "2022",
    release_date: "2022-03-11",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/d/d6/The_Kashmir_Files_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Kashmir_Files"
  },
  {
    id: 18,
    title: "Carry on Jatta 2",
    year: "2018",
    release_date: "2018-06-01",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/6/6b/Carry_On_Jatta_2.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Carry_On_Jatta_2"
  },
  {
    id: 19,
    title: "Qismat 2",
    year: "2021",
    release_date: "2021-09-23",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/6/6c/Qismat_2.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Qismat_2"
  },
  {
    id: 20,
    title: "Sardar Udham",
    year: "2021",
    release_date: "2021-10-16",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/e/e8/Sardar_Udham.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Sardar_Udham"
  },
  {
    id: 21,
    title: "The Gray Man",
    year: "2022",
    release_date: "2022-07-22",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/e/e3/The_Gray_Man_film_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Gray_Man_(film)"
  },
  {
    id: 22,
    title: "Avengers: Infinity War",
    year: "2018",
    release_date: "2018-04-27",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Avengers:_Infinity_War"
  },
  {
    id: 23,
    title: "The Avengers",
    year: "2012",
    release_date: "2012-05-04",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/f/f9/Marvel%27s_The_Avengers_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Avengers_(2012_film)"
  },
  {
    id: 24,
    title: "Iron Man 3",
    year: "2013",
    release_date: "2013-05-03",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/d/d4/Iron_Man_3_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Iron_Man_3"
  },
  {
    id: 25,
    title: "Captain America: Civil War",
    year: "2016",
    release_date: "2016-05-06",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Captain_America:_Civil_War"
  },
  {
    id: 26,
    title: "Aquaman",
    year: "2018",
    release_date: "2018-12-21",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/8/8a/Aquaman_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Aquaman_(film)"
  },
  {
    id: 27,
    title: "The Dark Knight",
    year: "2008",
    release_date: "2008-07-18",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/8/81/Dark_Knight_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Dark_Knight"
  },
  {
    id: 28,
    title: "Justice League",
    year: "2017",
    release_date: "2017-11-17",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/3/31/Justice_League_film_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Justice_League_(film)"
  },
  {
    id: 29,
    title: "Star Wars: Episode IV – A New Hope",
    year: "1977",
    release_date: "1977-05-25",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Star_Wars:_Episode_IV_%E2%80%93_A_New_Hope"
  },
  {
    id: 30,
    title: "The Empire Strikes Back",
    year: "1980",
    release_date: "1980-05-21",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/3/3c/The_Empire_Strikes_Back_%281980_film%29.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Empire_Strikes_Back"
  },
  {
    id: 31,
    title: "Top Gun",
    year: "1986",
    release_date: "1986-05-16",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/4/49/Top_Gun_Poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Top_Gun"
  },
  {
    id: 32,
    title: "Mission: Impossible",
    year: "1996",
    release_date: "1996-05-22",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/e/e1/Mission_Impossible_Poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Mission:_Impossible"
  },
  {
    id: 33,
    title: "Mission: Impossible 2",
    year: "2000",
    release_date: "2000-05-24",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/b/bd/Mission_Impossible_II_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Mission:_Impossible_2"
  },
  {
    id: 34,
    title: "The Farewell",
    year: "2019",
    release_date: "2019-07-12",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/f/f4/The_Farewell_%282019_film%29_poster.png",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Farewell_(2019_film)"
  },
  {
    id: 35,
    title: "Parasite",
    year: "2019",
    release_date: "2019-05-30",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29_poster.png",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Parasite_(2019_film)"
  },
  {
    id: 36,
    title: "Amelie",
    year: "2001",
    release_date: "2001-04-25",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/5/53/Amelie_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Am%C3%A9lie"
  },
  {
    id: 37,
    title: "Spirited Away",
    year: "2001",
    release_date: "2001-07-20",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/3/30/Spirited_Away_poster.jpeg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Spirited_Away"
  },
  {
    id: 38,
    title: "Inception",
    year: "2010",
    release_date: "2010-07-16",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Inception"
  },
  {
    id: 39,
    title: "Interstellar",
    year: "2014",
    release_date: "2014-11-07",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Interstellar"
  },
  {
    id: 40,
    title: "Forrest Gump",
    year: "1994",
    release_date: "1994-07-06",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Forrest_Gump"
  },
  {
    id: 41,
    title: "The Shawshank Redemption",
    year: "1994",
    release_date: "1994-09-23",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Shawshank_Redemption"
  },
  {
    id: 42,
    title: "Pulp Fiction",
    year: "1994",
    release_date: "1994-10-14",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Pulp_Fiction"
  },
  {
    id: 43,
    title: "The Lion King",
    year: "1994",
    release_date: "1994-06-24",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/3/30/The_Lion_King_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Lion_King"
  },
  {
    id: 44,
    title: "Titanic",
    year: "1997",
    release_date: "1997-12-19",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Titanic_(1997_film)"
  },
  {
    id: 45,
    title: "Avatar",
    year: "2009",
    release_date: "2009-12-18",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Avatar_(2009_film)"
  },
  {
    id: 46,
    title: "Avatar: The Way of Water",
    year: "2022",
    release_date: "2022-12-16",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/5/59/Avatar_The_Way_of_Water_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water"
  },
  {
    id: 47,
    title: "The Godfather",
    year: "1972",
    release_date: "1972-03-24",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Godfather"
  },
  {
    id: 48,
    title: "The Dark Knight Rises",
    year: "2012",
    release_date: "2012-07-20",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Dark_Knight_Rises"
  },
  {
    id: 49,
    title: "Gladiator",
    year: "2000",
    release_date: "2000-05-05",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/8/8d/Gladiator_Standard_Poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Gladiator"
  },
  {
    id: 50,
    title: "Dune: Part Two",
    year: "2024",
    release_date: "2024-03-01",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/d/d4/Dune_Part_Two_poster.jpeg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Dune:_Part_Two"
  },
  {
    id: 51,
    title: "Oppenheimer",
    year: "2023",
    release_date: "2023-07-21",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/4/4b/Oppenheimer_%28film%29.png",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Oppenheimer_(film)"
  },
  {
    id: 52,
    title: "Barbie",
    year: "2023",
    release_date: "2023-07-21",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Barbie_(film)"
  },
  {
    id: 53,
    title: "The Super Mario Bros. Movie",
    year: "2023",
    release_date: "2023-04-05",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/5/54/The_Super_Mario_Bros._Movie_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Super_Mario_Bros._Movie"
  },
  {
    id: 54,
    title: "Guardians of the Galaxy Vol. 3",
    year: "2023",
    release_date: "2023-05-05",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/7/7b/Guardians_of_the_Galaxy_Vol._3_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Guardians_of_the_Galaxy_Vol._3"
  },
  {
    id: 55,
    title: "Doctor Strange in the Multiverse of Madness",
    year: "2022",
    release_date: "2022-05-06",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/9/90/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpeg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Doctor_Strange_in_the_Multiverse_of_Madness"
  },
  {
    id: 56,
    title: "Jurassic World",
    year: "2015",
    release_date: "2015-06-12",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/6/6e/Jurassic_World_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Jurassic_World"
  },
  {
    id: 57,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: "2001",
    release_date: "2001-12-19",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/8/87/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Fellowship_of_the_Ring"
  },
  {
    id: 58,
    title: "The Lord of the Rings: The Two Towers",
    year: "2002",
    release_date: "2002-12-18",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/a/ad/The_Lord_of_the_Rings_The_Two_Towers_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Two_Towers"
  },
  {
    id: 59,
    title: "The Lord of the Rings: The Return of the King",
    year: "2003",
    release_date: "2003-12-17",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/b/b3/Lord_of_the_Rings_The_Return_of_the_King.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Return_of_the_King"
  },
  {
    id: 60,
    title: "Baahubali 2: The Conclusion",
    year: "2017",
    release_date: "2017-04-28",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/f/f9/Baahubali_2_The_Conclusion.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Baahubali_2:_The_Conclusion"
  },
  {
    id: 61,
    title: "K.G.F: Chapter 2",
    year: "2022",
    release_date: "2022-04-14",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/K.G.F:_Chapter_2"
  },
  {
    id: 62,
    title: "Pushpa: The Rise",
    year: "2021",
    release_date: "2021-12-17",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/7/7b/Pushpa_The_Rise_movie_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Pushpa:_The_Rise"
  },
  {
    id: 63,
    title: "Kabir Singh",
    year: "2019",
    release_date: "2019-06-21",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/f/f0/Kabir_Singh_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Kabir_Singh"
  },
  {
    id: 64,
    title: "War",
    year: "2019",
    release_date: "2019-10-02",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/b/b6/War_official_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/War_(2019_film)"
  },
  {
    id: 65,
    title: "Gadar 2",
    year: "2023",
    release_date: "2023-08-11",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/c/c2/Gadar_2_film_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Gadar_2"
  },
  {
    id: 66,
    title: "PK",
    year: "2014",
    release_date: "2014-12-19",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/PK_(film)"
  },
  {
    id: 67,
    title: "Bajrangi Bhaijaan",
    year: "2015",
    release_date: "2015-07-17",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/d/dc/Bajrangi_Bhaijaan_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Bajrangi_Bhaijaan"
  },
  {
    id: 68,
    title: "Sultan",
    year: "2016",
    release_date: "2016-07-06",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/8/87/Sultan_film_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Sultan_(2016_film)"
  },
  {
    id: 69,
    title: "Tiger Zinda Hai",
    year: "2017",
    release_date: "2017-12-22",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/b/b8/Tiger_Zinda_Hai_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Tiger_Zinda_Hai"
  },
  {
    id: 70,
    title: "Sanju",
    year: "2018",
    release_date: "2018-06-29",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/c/c7/Sanju_Poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Sanju"
  },
  {
    id: 71,
    title: "Chhichhore",
    year: "2019",
    release_date: "2019-09-06",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/b/bd/Chhichhore_film_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Chhichhore"
  },
  {
    id: 72,
    title: "Uri: The Surgical Strike",
    year: "2019",
    release_date: "2019-01-11",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/3/36/Uri_The_Surgical_Strike_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Uri:_The_Surgical_Strike"
  },
  {
    id: 73,
    title: "Tanhaji",
    year: "2020",
    release_date: "2020-01-10",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/1/14/Tanhaji_film_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Tanhaji"
  },
  {
    id: 74,
    title: "The Good, the Bad and the Ugly",
    year: "1966",
    release_date: "1966-12-23",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/4/45/Good_the_Bad_and_the_Ugly_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Good,_the_Bad_and_the_Ugly"
  },
  {
    id: 75,
    title: "Seven Samurai",
    year: "1954",
    release_date: "1954-04-26",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/8/8c/Seven_Samurai_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Seven_Samurai"
  },
  {
    id: 76,
    title: "Psycho",
    year: "1960",
    release_date: "1960-09-08",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/b/b4/Psycho_%281960%29_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Psycho"
  },
  {
    id: 77,
    title: "2001: A Space Odyssey",
    year: "1968",
    release_date: "1968-04-03",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/2/2c/2001_A_Space_Odyssey_%281968%29.png",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey"
  },
  {
    id: 78,
    title: "Schindler's List",
    year: "1993",
    release_date: "1993-12-15",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Schindler%27s_List"
  },
  {
    id: 79,
    title: "The Green Mile",
    year: "1999",
    release_date: "1999-12-10",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/f/fe/The_Green_Mile_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Green_Mile_(film)"
  },
  {
    id: 80,
    title: "Goodfellas",
    year: "1990",
    release_date: "1990-09-21",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Goodfellas"
  },
  {
    id: 81,
    title: "The Silence of the Lambs",
    year: "1991",
    release_date: "1991-02-14",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Silence_of_the_Lambs_(film)"
  },
  {
    id: 82,
    title: "Saving Private Ryan",
    year: "1998",
    release_date: "1998-07-24",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Saving_Private_Ryan"
  },
  {
    id: 83,
    title: "Fight Club",
    year: "1999",
    release_date: "1999-10-15",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/f/f8/Fight_Club_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Fight_Club"
  },
  {
    id: 84,
    title: "The Lord of the Rings: The Fellowship of the Ring (Extended Edition)",
    year: "2001",
    release_date: "2001-12-19",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/8/87/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Fellowship_of_the_Ring#Extended_editions"
  },
  {
    id: 85,
    title: "Matrix Reloaded",
    year: "2003",
    release_date: "2003-05-15",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/b/ba/The_Matrix_Reloaded_theatrical_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Matrix_Reloaded"
  },
  {
    id: 86,
    title: "The Departed",
    year: "2006",
    release_date: "2006-10-06",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/5/52/The_Departed_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Departed"
  },
  {
    id: 87,
    title: "Whiplash",
    year: "2014",
    release_date: "2014-10-10",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/0/07/Whiplash_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Whiplash_(2014_film)"
  },
  {
    id: 88,
    title: "La La Land",
    year: "2016",
    release_date: "2016-12-09",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/a/a7/La_La_Land_%28poster%29.png",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/La_La_Land"
  },
  {
    id: 89,
    title: "A Separation",
    year: "2011",
    release_date: "2011-03-16",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/f/f6/A_Separation_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/A_Separation"
  },
  {
    id: 90,
    title: "The Intouchables",
    year: "2011",
    release_date: "2011-11-02",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/9/91/The_Intouchables_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Intouchables"
  },
  {
    id: 91,
    title: "The Grand Budapest Hotel",
    year: "2014",
    release_date: "2014-03-07",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/a/a6/The_Grand_Budapest_Hotel_Poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/The_Grand_Budapest_Hotel"
  },
  {
    id: 92,
    title: "Eternal Sunshine of the Spotless Mind",
    year: "2004",
    release_date: "2004-03-19",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/6/62/Eternal_Sunshine_of_the_Spotless_Mind_poster.png",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind"
  },
  {
    id: 93,
    title: "Blade Runner 2049",
    year: "2017",
    release_date: "2017-10-06",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Blade_Runner_2049"
  },
  {
    id: 94,
    title: "Arrival",
    year: "2016",
    release_date: "2016-11-11",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/d/df/Arrival_Poster.png",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Arrival_(film)"
  },
  {
    id: 95,
    title: "Coco",
    year: "2017",
    release_date: "2017-10-27",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_(2017_film)_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Coco_(2017_film)"
  },
  {
    id: 96,
    title: "Toy Story 4",
    year: "2019",
    release_date: "2019-06-21",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/4/4c/Toy_Story_4_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Toy_Story_4"
  },
  {
    id: 97,
    title: "How to Train Your Dragon",
    year: "2010",
    release_date: "2010-03-26",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/9/91/How_to_Train_Your_Dragon_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/How_to_Train_Your_Dragon"
  },
  {
    id: 98,
    title: "Spider-Man: Into the Spider-Verse",
    year: "2018",
    release_date: "2018-12-14",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/e/e0/Spider-Man_Into_the_Spider-Verse_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Spider-Man:_Into_the_Spider-Verse"
  },
  {
    id: 99,
    title: "Your Name.",
    year: "2016",
    release_date: "2016-08-26",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Your_Name."
  },
  {
    id: 100,
    title: "Demon Slayer: Mugen Train",
    year: "2020",
    release_date: "2020-10-16",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Demon_Slayer_The_Movie-_Mugen_Train_poster.jpg/330px-Demon_Slayer_The_Movie-_Mugen_Train_poster.jpg",
    download: null,
    website_url: "https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba_%E2%80%93_The_Movie:_Mugen_Train"
  }
];
  // truncated for brevity, use your full movie list here

// --- Mock API Functions ---
// api.jsx — Only data logic (no buttons here)
export const getPopularMovies = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(movies), 200);
  });
};

export const searchMovies = async (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, 200);
  });
};

