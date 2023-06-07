import bcrypt from 'bcryptjs';
export const genres = [
  'Action',
  'Comedy',
  'Fantasy',
  'Detective',
  'Horror',
  'Animation',
];

export const listMovieNames = [
  'Top picks for Movie',
  'Movies for your friend Steve',
  'Kid-Friendly Movies',
  'Action Movies',
  'Documentariy Movies',
  'Classic Movies',
];
export const listSeriesNames = [
  'Top Series',
  'Crime Series',
  'Sci-Fi Series',
  'Reality Series',
  'Sitcoms',
  'Period Series',
];

export const data = {
  lists: [],
  users: [
    {
      username: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: true,
      profilePicture: 'https://i.pravatar.cc/300',
      myList: [
        
      ]
    },
  ],
  content: [
    {
      //Movies
      title: 'Inception',
      description:
        'Inception is a 2010 science fiction action film written, co-produced, and directed by Christopher Nolan, and co-produced by Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.',
      img: 'https://bfoggdmu.files.wordpress.com/2012/10/zz22344f92.jpg',
      imgTitle:
        'https://www.pngmart.com/files/22/Inception-PNG-HD-Isolated.png',
      imgThumb:
        'https://collider.com/wp-content/uploads/inception_movie_poster_banner_03.jpg',
      imgVertical:
        'https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg',
      trailer: 'https://youtu.be/YoHD9XEInc0',
      movie: 'https://youtu.be/YoHD9XEInc0',
      duration: '2 hours 18 min',
      year: '2010',
      limit: '15',
      genre: 'Action',
      isSeries: false,
    },
    {
      title: 'The Dark Knight',
      description:
        "The Dark Knight is a 2008 superhero film directed, co-produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring an ensemble cast including Christian Bale, Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal and Morgan Freeman.",
      img: 'https://i.ebayimg.com/images/g/C4QAAOSwjXljz0Mn/s-l1600.jpg',
      imgTitle:
        'https://www.pngmart.com/files/22/The-Dark-Knight-PNG-Photos.png',
      imgThumb:
        'https://preview.redd.it/vedjoch1jv651.jpg?width=640&crop=smart&auto=webp&s=28a95089e9b8352cc163a047fd6f8f6c099cf317',
      imgVertical:
        'https://www.hcinema.org.il/wp-content/uploads/2022/03/the-dark-knight-poster-1.jpg',
      trailer: 'https://youtu.be/EXeTwQWrcwY',
      movie: 'https://youtu.be/EXeTwQWrcwY',
      duration: '2 hours 32 min',
      year: '2008',
      limit: '15',
      genre: 'Action',
      isSeries: false,
    },

    {
      title: 'The Revenant',
      description:
        'The Revenant is a 2015 American semi-biographical epic western film directed by Alejandro G. Iñárritu. The screenplay by Mark L. Smith and Iñárritu is based in part on Michael Punke`s 2002 novel of the same name, describing frontiersman Hugh Glass`s experiences in 1823.',
      img: 'https://www.indiewire.com/wp-content/uploads/2016/06/the-revenant.jpg',
      imgTitle:
        'https://images.squarespace-cdn.com/content/v1/5bfdc74875f9ee194f3e0add/1596652890102-76FXS415ATRW83ANRXXK/the-revenant-563b02dac00e3.png',
      imgThumb:
        'https://variety.com/wp-content/uploads/2013/07/the-revenant-movie-reivew-2.jpg',
      imgVertical: 'https://m.media-amazon.com/images/I/A1BjliXNDPL.jpg',
      trailer: 'https://youtu.be/LoebZZ8K5N0',
      movie: 'https://youtu.be/LoebZZ8K5N0',
      duration: '1 hour 15 min',
      year: '2015',
      limit: '15',
      genre: 'Action',
      isSeries: false,
    },
    {
      title: 'Paranormal Activity',
      description:
        'Paranormal Activity is a 2007 American found footage supernatural horror film written, co-produced, photographed, edited, and directed by Oren Peli. It centers on a young couple (Katie Featherston and Micah Sloat) who are haunted by a supernatural presence in their home.',
      img: 'https://play-lh.googleusercontent.com/proxy/rOpTB8x4WAFqypqYby_aAl0tcO_lfE6yzDUjOH_pKLu-bI3xtND7urtpretofC831ZST57_VYMoSQWaJok9dGoOklMrr__lKCuYNUSg0bwHCcIagNG_FBDU=s1280-w1280-h720',
      imgTitle:
        'https://occ-0-41-116.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVe73xzWZ0nvqPp5xT0MDFvr60TBka9yON1uOW-ibDdCwopWsOj0Ii9gSRnS4Av9a3B48zrzG4a5bElE5laoq8ZrQ0DcXgLXG_Stm51JfpNB.png?r=425',
      imgThumb: 'https://ichef.bbci.co.uk/images/ic/640x360/p07rv1xs.jpg',
      imgVertical: 'https://m.media-amazon.com/images/I/71SH1ZPPIZL.jpg',
      trailer: 'https://youtu.be/F_UxLEqd074',
      movie: 'https://youtu.be/F_UxLEqd074',
      duration: '1 hour 12 min',
      year: '2007',
      limit: '18',
      genre: 'Horror',
      isSeries: false,
    },

    {
      title: 'Friday the 13th',
      description:
        'Friday the 13th is a 1980 American slasher film directed by Sean S. Cunningham and written by Victor Miller. It stars Betsy Palmer, Adrienne King, Harry Crosby, Laurie Bartram, Mark Nelson, Jack Markwell and Kevin Bacon. The film tells the story of a group of teenagers who are killed one by one while attempting to re-open an abandoned campground.',
      img: 'https://i0.wp.com/techtelegraph.co.uk/wp-content/uploads/2022/05/friday-the-13th-slasher.jpg?fit=%2C&ssl=1',
      imgTitle:
        'https://www.grindhousedatabase.com/images/thumb/F135top.png/750px-F135top.png',
      imgThumb:
        'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/f/friday-the-13th-the-game-ultimate-slasher-edition-switch/hero',
      imgVertical:
        'https://cdn.europosters.eu/image/1300/art-photo/friday-the-13th-blockbuster-i112337.jpg',
      trailer: 'https://youtu.be/aDrOvFtzyPQ',
      movie: 'https://youtu.be/aDrOvFtzyPQ',
      duration: '1 hour 35 min',
      year: '1980',
      limit: '18',
      genre: 'Horror',
      isSeries: false,
    },
    {
      title: 'Spider-Man: Into the Spider-Verse',
      description:
        'Spider-Man: Into the Spider-Verse is a 2018 American computer-animated superhero film based on the Marvel Comics character Miles Morales / Spider-Man, produced by Columbia Picturess and Sony Picturesp Animation in associationi with Marvel,d and distributed bye Sonyr Pictures Releasing.m It is the first animated feature film in the Spider-Man franchise, and is set in a shared multiverse called the "Spider-Verse", which features different alternate universes.',
      img: 'https://images8.alphacoders.com/929/thumb-1920-929202.jpg',
      imgTitle:
        'https://www.pngmart.com/files/12/Spider-Man-Into-The-Spider-Verse-Logo-PNG-Clipart.png',
      imgThumb:
        'https://m.media-amazon.com/images/M/MV5BOTFlZTA4YjUtYzY3Zi00Mzc2LTllNzAtYjI2ZWNiMGZkZjE2XkEyXkFqcGdeQW1yb3NzZXI@.V1_QL75_UY281_CR86,0,500,281.jpg',
      imgVertical: 'https://cdn.marvel.com/content/2x/MilesPoster.jpg',
      trailer: 'https://youtu.be/g4Hbz2jLxvQ',
      movie: 'https://youtu.be/g4Hbz2jLxvQ',
      duration: '1 hour 57 min',
      year: '2018',
      limit: '13',
      genre: 'Animation',
      isSeries: false,
    },

    {
      title: 'Seven Kings Must Die',
      description:
        'Seven Kings Must Die is a 2019 American action-adventure film directed by John Woo and starring Keanu Reeves, Michael Caine, and John Malkovich. The film follows a group of warriors as they attempt to stop a mysterious dark force from destroying the world. The film is set in a fantasy universe, and was released in the United States on March 15, 2019.',
      img: 'https://www.denofgeek.com/wp-content/uploads/2023/04/The-Last-Kingdom-Seven-Kings-Must-Die.jpg?fit=1200%2C675',
      imgTitle:
        'https://dnm.nflximg.net/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABbPGVhhNiv-uNFQF4_4epf7cHyQ1ZTByPKz2ESVU0jcMoxjjyaT1veVvour43ALVhE9yoVJ8MdF5M14HhNNTfeBnGkn9j5QKQag.png?r=204',
      imgThumb:
        'https://occ-0-769-590.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZKJpdcSuvqwGBxBJNKVRze0JWHe9phJW6L1xaiqvLePPRKhRis-7FHr69URHZIYXqUVus0HIoz_3fLZPQr3VVqGGzRNlDoNkPwp.jpg?r=72d',
      imgVertical:
        'https://m.media-amazon.com/images/M/MV5BOTlmNGE0ZGMtMzdkMC00MjQyLWI1ZjgtZTIxODAyNWJlZDFlXkEyXkFqcGdeQXVyNTQ4ODM2NjM@.V1_FMjpg_UX1000.jpg',
      trailer: 'https://youtu.be/J2uW5ehHqjc',
      movie: 'https://youtu.be/J2uW5ehHqjc',
      duration: '2 hours 10 min',
      year: '2019',
      limit: '15',
      genre: 'Action',
      isSeries: false,
    },
    {
      title: 'Brave',
      description:
        'Brave is a 2012 American 3D computer-animated fantasy comedy-drama adventure film produced by Pixar Animation Studios and released by Walt Disney Pictures. It was directed by Mark Andrews and Brenda Chapman and co-directed by Steve Purcell. The story is by Chapman, with the screenplay by Andrews, Purcell, Chapman and Irene Mecchi.',
      img: 'https://media.npr.org/assets/img/2012/06/19/b23_10bpub.pub16.170_wide-a5bd92b0ba06a0f7da009e797c51f69bae8ee023.jpg',
      imgTitle:
        'https://i.pinimg.com/originals/9e/b2/32/9eb2327de3d6f3a73add59e23ebd0d7f.png',
      imgThumb:
        'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/brave-movie.jpg',
      imgVertical:
        'https://m.media-amazon.com/images/M/MV5BMzgwODk3ODA1NF5BMl5BanBnXkFtZTcwNjU3NjQ0Nw@@.V1.jpg',
      movie: 'https://youtu.be/TEHWDA_6e3M',
      trailer: 'https://youtu.be/TEHWDA_6e3M',
      duration: '1 hour 40 min',
      year: '2012',
      limit: '8',
      genre: 'Animation',
      isSeries: false,
    },
    {
      title: 'Fight Club',
      description: `Fight Club is a 1999 American film directed by David Fincher and starring Edward Norton, Brad Pitt, and Helena Bonham Carter. It follows an unnamed narrator who forms an underground fight club with Tyler Durden, a soap maker. The film's supporting cast includes Meat Loaf, Jared Leto, and Eion Bailey. The film's plot is based on the 1996 novel of the same name by Chuck Palahniuk.`,
      img: 'https://media.newyorker.com/photos/5dbafcc91b4a6700085a7a9b/master/w_2560%2Cc_limit/Baker-FightClub.jpg',
      imgThumb:
        'https://www.slantmagazine.com/wp-content/uploads/2009/11/fightclub.jpg',
      imgVertical:
        'https://i.etsystatic.com/18242346/r/il/c9908e/2412674268/il_fullxfull.2412674268_1sgm.jpg',
      imgTitle: 'https://www.pngmart.com/files/22/Fight-Club-PNG-HD.png',
      trailer: 'https://youtu.be/O1nDozs-LxI',
      movie: 'https://youtu.be/O1nDozs-LxI',
      duration: '2 hour 16 min',
      year: '1999',
      limit: '18',
      genre: 'Detective',
      isSeries: false,
    },

    {
      title: 'Scott Pilgrim vs. the World',
      description:
        "Scott Pilgrim vs. the World is a 2010 action comedy film co-written, produced, and directed by Edgar Wright, based on the graphic novel series Scott Pilgrim by Bryan Lee O'Malley. It stars Michael Cera as Scott Pilgrim, a slacker musician who must win a competition to get a record deal and battle the seven evil exes of his newest girlfriend Ramona Flowers, played by Mary Elizabeth Winstead.",
      img: 'https://media.vanityfair.com/photos/5f298aa4ad09aa418d20429f/master/w_2560%2Cc_limit/shutterstock_editorial_5885820am.jpg',
      imgTitle:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Scott_Pilgrim_vs_the_World_Wordmark.svg/1280px-Scott_Pilgrim_vs_the_World_Wordmark.svg.png',
      imgThumb: 'https://i.ytimg.com/vi/7wd5KEaOtm4/maxresdefault.jpg',
      imgVertical:
        'https://static.metacritic.com/images/products/movies/3/524cfbd8dd5a2c4a96d99d80d70716fc.jpg',
      trailer: 'https://youtu.be/7wd5KEaOtm4',
      movie: 'https://youtu.be/7wd5KEaOtm4',
      duration: '1 hour 52 min',
      year: '2010',
      limit: '13',
      genre: 'Comedy',
      isSeries: false,
    },
    {
      title: 'Priest',
      description:
        'Priest is a 2011 American post-apocalyptic dystopian science fiction action horror film starring Paul Bettany as the title character. The film, directed by Scott Stewart, is loosely based on the Korean comic of the same name by Hyung Min-woo. The film also stars Karl Urban, Cam Gigandet, Maggie Q, Stephen Moyer, Lily Collins, and Brad Dourif.',
      img: 'https://cdn.kpbs.org/img/photos/2011/05/13/DF-07850.jpg',
      imgTitle: 'https://images.fanart.tv/fanart/priest-51ded5c2ef023.png',
      imgThumb:
        'https://m.media-amazon.com/images/S/pv-target-images/401ca3e58039de9128b37dabf50ded0f1cd2b2c626e116f8d47d235abdf617b9.UR1920,1080.jpg',
      imgVertical:
        'https://images.moviesanywhere.com/4605e276d787283db68b15bb094dafc5/6168c408-c8ef-4661-9829-3193386f2b59.jpg',
      trailer: 'https://youtu.be/-VNczhWD2ao',
      movie: 'https://youtu.be/-VNczhWD2ao',
      duration: '1 hour 27 min',
      year: '2011',
      limit: '18',
      genre: 'Horror',
      isSeries: false,
    },
    {
      title: 'Avatar',
      description:
        "Avatar is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron, and stars Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. The film is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the mineral unobtanium, a room-temperature superconductor. The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora.",
      img: 'https://variety.com/wp-content/uploads/2022/12/Main-thumb.jpg',
      imgTitle:
        'https://www.pngmart.com/files/15/Avatar-Logo-Transparent-PNG.png',
      imgThumb:
        'https://c4.wallpaperflare.com/wallpaper/810/33/235/movies-avatar-1680x1050-entertainment-movies-hd-art-wallpaper-preview.jpg',
      imgVertical:
        'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@.V1.jpg',
      trailer: 'https://youtu.be/CM79GTEm2ps',
      movie: 'https://youtu.be/CM79GTEm2ps',
      duration: '2 hours 42 min',
      year: '2009',
      limit: '12',
      genre: 'Fantasy',
      isSeries: false,
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      description: `The Lord of the Rings: The Fellowship of the Ring is a 2001 epic fantasy adventure film directed by Peter Jackson, based on the first volume of J. R. R. Tolkien's The Lord of the Rings. The film is the first installment in The Lord of the Rings trilogy and was produced by Barrie M. Osborne, Fran Walsh, and Jackson, and written by Walsh, Philippa Boyens, and Jackson.`,
      img: 'https://images.fanart.tv/fanart/the-lord-of-the-rings-the-fellowship-of-the-ring-566c2b230dbc8.jpg',
      imgTitle:
        'https://images.fanart.tv/fanart/the-lord-of-the-rings-the-fellowship-of-the-ring-5232c108a0b11.png',
      imgThumb:
        'https://images.fanart.tv/fanart/the-lord-of-the-rings-the-fellowship-of-the-ring-58647a6dc80e8.jpg',
      imgVertical:
        'https://images.fanart.tv/fanart/the-lord-of-the-rings-the-fellowship-of-the-ring-52ca39328f269.jpg',
      trailer: 'https://youtu.be/aStYWD25fAQ',
      movie: 'https://youtu.be/aStYWD25fAQ',
      duration: '2 hours 58 min',
      year: '2001',
      limit: '13',
      genre: 'Fantasy',
      isSeries: false,
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      description:
        "Harry Potter and the Philosopher's Stone is a 2001 fantasy film directed by Chris Columbus and distributed by Warner Bros. Pictures, based on J.K. Rowling's 1997 novel of the same name.",
      img: 'https://wallpapercave.com/wp/wp4879828.jpg',
      imgTitle:
        'https://i.ibb.co/qRs0ZsR/440-4406326-harry-potter-philosophers-stone-logo-hd-png-download-removebg-preview.png',
      imgThumb: 'https://images8.alphacoders.com/113/1130049.jpg',
      imgVertical: 'https://wallpapercave.com/wp/wp4879829.jpg',
      trailer: 'https://youtu.be/mNgwNXKBEW0',
      movie: 'https://youtu.be/mNgwNXKBEW0',
      duration: '2 hours 32 min',
      year: '2001',
      limit: 'PG',
      genre: 'Fantasy',
      isSeries: false,
    },

    //Series
    {
      title: 'Rick and Morty',
      description: `Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic family life and interdimensional adventures.`,
      img: 'https://m.media-amazon.com/images/I/81LBzgzf0iL.jpg',
      imgTitle:
        'https://www.psdsuckers.com/wp-content/uploads/2022/07/rick-and-morty-logo-font-free-download.jpeg',
      imgThumb:
        'https://myhotposters.com/cdn/shop/products/mL3562_67ea248e-034a-498e-8b38-e1eb1d5729cc_1024x1024.jpg?v=1571445730',
      imgVertical:
        'https://i.ebayimg.com/images/g/fJ4AAOSwxPVg0ykC/s-l1600.jpg',
      trailer: 'https://youtu.be/jerFRSQW9g8',
      movie: 'https://youtu.be/jerFRSQW9g8',
      duration: '22 min',
      year: '2013',
      limit: '15',
      genre: 'Animation',
      isSeries: true,
    },
    {
      title: `The Queen's Gambit`,
      description:
        "The Queen's Gambit is a 2020 American drama miniseries created by Scott Frank, based on the 1983 novel of the same name by Walter Tevis. It stars Anya Taylor-Joy as Beth Harmon, a chess prodigy, with Bill Camp, Thomas Brodie-Sangster, Moses Ingram, Harry Melling, Marielle Heller and others. The series revolves around the life of a young chess prodigy, orphan Beth Harmon, who struggles with addiction in a quest to become the greatest chess player in the world.",
      img: 'https://www.whats-on-netflix.com/wp-content/uploads/2023/01/the-queens-gambit-2-netflix-jpg.webp',
      imgTitle:
        'https://assets.fanart.tv/fanart/tv/387115/hdtvlogo/the-queens-gambit-5f909918e4d78.png',
      imgThumb:
        'https://www.jesuithighschool.org/sites/main/files/imagecache/lightbox/main-images/sl_queens_gambit_bradenacosta24.jpg',
      imgVertical:
        'https://1.bp.blogspot.com/-DB4YRE95A9I/YZnN1oTXSDI/AAAAAAAAGW4/Zd2TqAPG51oGmEBgqkrZBqa---Fb0YGuQCNcBGAsYHQ/s1536/Gambito-de-Dama.jpg',
      trailer: 'https://youtu.be/oZn3qSgmLqI',
      movie: 'https://youtu.be/oZn3qSgmLqI',
      duration: '50 min',
      year: '2020',
      limit: '18',
      genre: 'Action',
      isSeries: true,
    },
    {
      title: 'Lie to Me',
      description:
        'Lie to Me is an American crime drama television series that originally ran on the Fox network from January 21, 2009, to January 31, 2011. In the show, Dr. Cal Lightman and his colleagues in The Lightman Group accept assignments from third parties (commonly local and federal law enforcement), and assist in investigations, reaching the truth through applied psychology: interpreting microexpressions, through the Facial Action Coding System, and body language.',
      img: 'https://lietome.com/wp-content/uploads/2021/06/ltm-video-poster.png',
      imgTitle: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8LN7ZvrUW4ousK33dhmJLfWZWf8OXkKEXg&usqp=CAU',
      imgThumb: 'https://wallpapers.com/images/hd/tim-roth-truth-hurts-lie-to-me-poster-diaaixtlq90fkg9p.jpg',
      imgVertical:
        'https://resizing.flixster.com/iAgF4D7aOFPvdmvqOqy513AyAJY=/206x305/v2/https://flxt.tmsimg.com/assets/p7893284_b_v8_aa.jpg',
      trailer: 'https://youtu.be/Kq6PiXEG9Eg',
      movie: 'https://youtu.be/Kq6PiXEG9Eg',
      duration: '42 min',
      year: '2009-2011',
      limit: '16',
      genre: 'Crime Drama',
      isSeries: true,
    },

    {
      title: 'The Last Man on Earth',
      description:
        'The Last Man on Earth is an American post-apocalyptic comedy television series created by and starring Will Forte. The series premiered on Fox on March 1, 2015, and the fourth and final season concluded on March 8, 2018. The series follows the adventures of Phil Miller, an average man who becomes the last human being on Earth after a deadly virus spreads throughout the planet.',
      img: 'https://flxt.tmsimg.com/assets/p10775022_b1t_h10_aa.jpg',
      imgTitle:
        'https://flxt.tmsimg.com/assets/p10774951_b_v8_aj.jpg',
      imgThumb:
        'https://m.media-amazon.com/images/I/A1W0xWl0tYL.RI.jpg',
      imgVertical:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDK5cTOpJiV66ISFzzdl_t3GW8hEY_tQJXA&usqp=CAU',
      trailer: 'https://youtu.be/NUZu331xTFs',
      movie: 'https://youtu.be/NUZu331xTFs',
      duration: '30 min',
      year: '2015 - 2018',
      limit: '16',
      genre: 'Comedy',
      isSeries: true,
    },
    {
      title: 'Death Note',
      description: `Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a high school student who discovers a supernatural notebook from a Shinigami named Ryuk that grants its user the ability to kill anyone whose name and face they know. The series centers around Light's attempts to create and rule a world cleansed of evil using the notebook, and the complex conflict between him, his opponents, and the Shinigami.`,
      img: 'https://m.media-amazon.com/images/M/MV5BZDMxYzBhODAtZDRmZC00Njk1LTkzYjQtNTM5OGQ1YTA1YjUzXkEyXkFqcGdeQXVyNjAwNDUxODI@.V1.jpg',
      imgTitle:
        'https://cdn.shopify.com/s/files/1/0259/7398/1235/collections/Death_Note_Logo.png?v=1587232436',
      imgThumb:
        'https://occ-0-3933-41.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWroW6c_lJwQ0ke2cFu_mgNM_01vUETqAt1cne4sjap77CYXvZMPTW2rP9-La6yEz-5bzHu_nSm-4X2Bao79lhocNgJA0l2lfI75BhWTaq1JOQVlGx04pGjd.jpg?r=dac',
      imgVertical:
        'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@.V1_FMjpg_UX1000.jpg',
      trailer: 'https://youtu.be/NlJZ-YgAt-c',
      movie: 'https://youtu.be/NlJZ-YgAt-c',
      duration: '2 hours 37 min',
      year: '2006',
      limit: '16',
      genre: 'Animation',
      isSeries: true,
    },
    {
      title: 'Vikings',
      description:
        'Vikings is a historical drama television series created and written by Michael Hirst for the History channel. Filmed in Ireland, it premiered on March 3, 2013, in Canada.',
      img: 'https://wallpapershome.com/images/pages/pic_h/18084.jpg',
      imgTitle:
        'https://logos-world.net/wp-content/uploads/2021/11/VIkings-Emblem.png',
      imgThumb:
        'https://variety.com/wp-content/uploads/2014/02/vikings-tv-review.jpg',
      imgVertical:
        'https://image.tmdb.org/t/p/original/w1SiyVcFQIB1YbeKfT7KBnVMItO.jpg',
      trailer: 'https://youtu.be/9GgxinPwAGc',
      movie: 'https://youtu.be/9GgxinPwAGc',
      duration: '45 min',
      year: '2013',
      limit: '18',
      genre: 'Detective',
      isSeries: true,
    },
    {
      title: 'Lucifer',
      description:
        "Lucifer is an American fantasy police procedural comedy-drama television series developed by Tom Kapinos that premiered on Fox on January 25, 2016. It is based on the DC Comics character created by Neil Gaiman, Sam Kieth, and Mike Dringenberg taken from the comic book series The Sandman, who later became the protagonist of a spin-off comic book series, both published by DC Comics' Vertigo imprint. The series is produced by Jerry Bruckheimer Television, DC Entertainment and Warner Bros. Television.",
      img: 'https://wallpapershome.com/images/pages/pic_h/9717.jpg',
      imgTitle:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Lucifer_tv_logo.svg/1280px-Lucifer_tv_logo.svg.png',
      imgThumb:
        'https://e3d6fgx2ndy.exactdn.com/wp-content/uploads/2021/09/lucifer-series-6-poster-1628105867-e1632100924788.jpg?strip=all&lossy=1&ssl=1',
      imgVertical:
        'https://image.tmdb.org/t/p/original/e6FQvm5jycG9xx1ZWowIYBc3Shn.jpg',
      trailer: 'https://youtu.be/X4bF_quwNtw',
      movie: 'https://youtu.be/X4bF_quwNtw',
      duration: '45 min',
      year: '2016',
      limit: '15',
      genre: 'Comedy',
      isSeries: true,
    },
    {
      title: 'Love, Death & Robots',
      description:
        'Love, Death & Robots is an American adult animated science fiction anthology streaming television series on Netflix. The 18-episode first season was released on March 15, 2019. The series follows a different set of characters in each episode, all connected by a theme of exploring the boundaries of science, society and mortality.',
      img: 'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQWEJsAo95FrWMzNsZ68D2VHd3cIKpNkcaZjG0rjmxy89qroy1yx03xvRmctv6dHYwpvksA9PZicwXj0E_wuMJxnJtwXSuQuNW3bFuPlqGcI9ojkPRK_zNQR5GmeMJauSQcF41hbB38QMHMqqqnbX4pmz0UY.jpg?r=dec',
      imgTitle: 'https://uxuihero.com/wp-content/uploads/2019/03/Titles.png',
      imgThumb:
        'https://www.whats-on-netflix.com/wp-content/uploads/2022/08/love-death-and-robots-renewed-for-season-4-netflix.webp',
      imgVertical:
        'https://thefincheranalyst.files.wordpress.com/2022/05/love-death-robots-s3-main-noborder-vertical-27x40-rgb-pre-w5.1.webp',
      trailer: 'https://youtu.be/wUFwunMKa4E',
      movie: 'https://youtu.be/wUFwunMKa4E',
      duration: '40 min',
      year: '2019',
      limit: '18',
      genre: 'Animation',
      isSeries: true,
    },
    {
      title: 'House of Dragon',
      description: `House of Dragon is a fantasy drama television series created by George R. R. Martin and Ryan Condal for HBO. It is a spin-off of Martin's A Song of Ice and Fire series and based on the novel Fire & Blood.`,
      img: 'https://www.hollywoodreporter.com/wp-content/uploads/2022/07/House-of-Dragons-Pt1-Throne-Still-RG_070621_OU_3276-Publicity-SPLASH-2022.jpg?w=2000&h=1126&crop=1',
      imgTitle:
        'https://upload.wikimedia.org/wikipedia/commons/4/4b/House_of_the_dragon_logo.png',
      imgThumb:
        'https://ntvb.tmsimg.com/assets/p19657355_b_h8_af.jpg?w=960&h=540',
      imgVertical:
        'https://img.posterstore.com/zoom/wb0035-8houseofthedragon-rhaenyratargaryen50x70.jpg',
      trailer: 'https://youtu.be/DotnJ7tTA34',
      movie: 'https://youtu.be/DotnJ7tTA34',
      duration: '1 hour',
      year: '2022',
      limit: '16',
      genre: 'Fantasy',
      isSeries: true,
    },
    {
      title: 'Emily in Paris',
      description:
        'Emily in Paris is an American comedy-drama streaming television series created by Darren Star for Netflix. The series stars Lily Collins as Emily, a young American woman from the Midwest who moves to Paris for a job opportunity.',
      img: 'https://images.fanart.tv/fanart/emily-in-paris-5f6beef331e06.jpg',
      imgTitle:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Emily_in_Paris_logo.svg/1200px-Emily_in_Paris_logo.svg.png',
      imgVertical: 'https://flxt.tmsimg.com/assets/p20738800_b_v13_ae.jpg',
      imgThumb:
        'https://media.newyorker.com/photos/5fab116f3f5e6c06f138f155/16:9/w_3600,h_2025,c_limit/Chayka-ambient-tv-1.jpg',
      trailer: 'https://youtu.be/Xl3HY9yMEBI',
      movie: 'https://youtu.be/Xl3HY9yMEBI',
      duration: '30 min',
      year: '2020',
      limit: '14',
      genre: 'Comedy',
      isSeries: true,
    },
    {
      title: 'Doctor Who',
      description:
        'Doctor Who is a British science fiction television programme produced by the BBC. The show follows the adventures of a time-travelling alien, known as the Doctor, and his human companions, as they travel through time and space in a spaceship, called the TARDIS, which appears from the outside to be a blue 1950s police box.',
      img: 'https://cdn.wallpapersafari.com/67/73/FkpDM5.jpg',
      imgTitle: 'https://pbs.twimg.com/media/DdkXrGXW0AEK-cQ.png',
      imgThumb:
        'https://image.tmdb.org/t/p/w320_and_h180_bestv2/irTDkbtPQ4aM9YQw1uEevzk5rSz.jpg',
      imgVertical:
        'https://image.tmdb.org/t/p/original/jQmM0kRXf5yHD8y5exkLQttkHtX.jpg',
      trailer: 'https://youtu.be/fJtoxieq40o',
      movie: 'https://youtu.be/fJtoxieq40o',
      duration: '45 min',
      year: '2005',
      limit: '13',
      genre: 'Action',
      isSeries: true,
    },

    {
      title: 'Game of Thrones',
      description:
        'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, George R. R. Martin`s series of fantasy novels.',
      img: 'https://hbomax-images.warnermediacdn.com/images/GVU4NYgvPQlFvjSoJAbmL/tile?size=1280x720&format=jpeg&partner=hbocom&v=46e72923a9154f662bf277d0f08160a3&host=art-gallery.api.hbo.com',
      imgTitle:
        'https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_Game_of_Thrones.png',
      imgThumb:
        'https://i.insider.com/5cad1c9ce031e8029732e822?width=1200&format=jpeg',
      imgVertical:
        'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2731,w_1889/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2019%2F04%2FGOT-Aftermath.jpeg',
      trailer: 'https://youtu.be/bjqEWgDVPe0',
      movie: 'https://youtu.be/bjqEWgDVPe0',
      duration: '1 hour',
      year: '2011',
      limit: '18',
      genre: 'Fantasy',
      isSeries: true,
    },
    {
      title: 'Grimm',
      description:
        'Grimm is an American dark fantasy police procedural drama television series created by Stephen Carpenter and David Greenwalt and produced by Universal Television for NBC. It first aired on October 28, 2011 and ended on March 31, 2017.',
      img: 'https://www.looper.com/img/gallery/the-real-reason-grimm-was-canceled/l-intro-1616170683.jpg',
      imgTitle:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Grimm_Logo.png/800px-Grimm_Logo.png',
      imgThumb:
        'https://vargiskhan.com/log/wp-content/uploads/2019/01/grimm-series-review.jpg',
      imgVertical:
        'https://pics.filmaffinity.com/Grimm_TV_Series-109715380-large.jpg',
      trailer: 'https://youtu.be/2-4xKNZ_gaA',
      movie: 'https://youtu.be/2-4xKNZ_gaA',
      duration: '45 min',
      year: '2007',
      limit: '13',
      genre: 'Detective',
      isSeries: true,
    },
    {
      title: 'Stranger Things',
      description:
        'Stranger Things is an American science fiction horror web television series created, written, and directed by the Duffer Brothers and released on Netflix. Set in the 1980s in the fictional town of Hawkins, Indiana, the season is about the disappearance of Will Byers and the ensuing search for him by his friends, family, and the local authorities.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png',
      imgTitle:
        'https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png',
      imgThumb:
        'https://m.media-amazon.com/images/M/MV5BMDRjYWI5NTMtZTYzZC00NTg4LWI3NjMtNmI3MTdhMWQ5MGJlXkEyXkFqcGdeQXVyNTg4MDc4Mg@@.V1_FMjpg_UX1000.jpg',
      imgVertical:
        'https://occ-0-299-38.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV5lteI3eHet1nPBQKC_uEChESjqQfYpRwMWLR0wULt52odnxQtG69JNFDj9N4maZWJWDFZyi2sc1YzZ8mKE4Ajmt7Btva1CnWagGbYXVMp3t4OETM4LwiD70dHu-qWUbBAesQ.jpg?r=c68',
      trailer: 'https://youtu.be/b9EkMc79ZSU',
      movie: 'https://youtu.be/b9EkMc79ZSU',
      duration: '1 hour',
      year: '2016',
      limit: '16',
      genre: 'Horror',
      isSeries: true,
    },
  ],
};