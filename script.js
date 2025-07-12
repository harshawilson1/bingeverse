 const shows = [
      {
        title: "The Office",
        platform: "Prime Video",
        rating: 4,
        genre: "Comedy",
        review: "Ridiculous, awkward, hilarious. Perfect background binge.",
        image: "theo.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
      },
      {
        title: "Stranger Things",
        platform: "Netflix",
        rating: 4,
        genre: "Sci-Fi",
        review: "Nostalgic, thrilling, and a bit spooky. A must-watch.",
        image: "st.jpg",
        wiki: "https://en.wikipedia.org/wiki/Stranger_Things",
      },
      {
        title: "The Crown",
        platform: "Netflix",
        rating: 4,
        genre: "Drama",
        review: "A beautifully crafted portrayal of the British monarchy.",
        image: "tc.jpeg",
        wiki: "https://en.wikipedia.org/wiki/The_Crown_(TV_series)"
      },

      {
        title: "Black Mirror",
        platform: "Netflix",
        rating: 5,
        genre: "Sci-Fi",
        review: "A thought-provoking anthology that explores the dark side of technology.",
        image: "bm.jpg",
        wiki: "https://en.wikipedia.org/wiki/Black_Mirror"
      },
      {
        title:"FRIENDS",
        platform:"Netflix",
        rating: 5,
        genre: "Comedy",
        review: "The ultimate comfort show with timeless humor and heart.",
        image: "friends.jpg",
        wiki: "https://en.wikipedia.org/wiki/Friends",
      },
      {
        title:"sense8",
        platform:"Netflix",
        rating: 5,
        genre: "Sci-Fi",
        review: "A groundbreaking series that explores human connection across the globe.",
        image: "sense8.jpg",
        wiki: "https://en.wikipedia.org/wiki/Sense8",
      },
      {
        title:"A discovery of witches",
        platform:"Prime Video",
        rating: 5,
        genre: "Drama",
        review: "A captivating blend of history, magic, and romance.",
        image: "discovery.jpg",
        wiki: "https://en.wikipedia.org/wiki/A_Discovery_of_Witches_(TV_series)",
      },
      {

        title:"the 100",
        platform:"Netflix",
        rating: 4,
        genre: "Action",
        review: "A thrilling post-apocalyptic saga with intense character arcs.",
        image: "the100.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_100_(TV_series)",
      },
      {
        title:"The Morning Show",
        platform:"Apple TV+",
        rating: 4,
        genre: "Drama",
        review: "A gripping look at the cutthroat world of morning news.",
       image: "morning.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Morning_Show_(American_TV_series)", 
      },
      {
        title:"911",
        platform:"Disney+ Hotstar",
        rating: 5,
        genre: "Action",
        review: "A heart-pounding series that dives into the lives of first responders.",
        image: "911.jpg",
        wiki: "https://en.wikipedia.org/wiki/9-1-1_(TV_series)",
      },
      {
        title:"supernatural",
        platform:"Prime Video",
        rating: 5,
        genre: "Drama",
        review: "A cult classic that blends horror, humor, and brotherly love.",
        image: "supernatural.jpg",
        wiki: "https://en.wikipedia.org/wiki/Supernatural_(American_TV_series)",
      },
      {
        title:"the magicians",
        platform:"Netflix",
        rating: 5,
        genre: "Fantasy",
        review: "A dark, twisted take on magic and its consequences.",
        image: "magicians.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Magicians_(American_TV_series)",
      },
      {
        title:"shameless",
        platform:"Netflix",
        rating: 5,
        genre: "Comedy",
        review: "A raw, unfiltered look at a dysfunctional family that’s both hilarious and heartbreaking.",
        image: "shameless.jpg",
        wiki: "https://en.wikipedia.org/wiki/Shameless_(American_TV_series)",
      },
      {
        title:"tell me lies",
        platform:"Disney+ Hotstar",
        rating: 5,
        genre: "Drama",
        review: "A gripping tale of love, betrayal, and the lies we tell ourselves.",
        image: "tellmelies.jpg",
        wiki: "https://en.wikipedia.org/wiki/Tell_Me_Lies_(American_TV_series)",
      },
      {
        title:"the summer I turned pretty",
        platform:"Amazon Prime Video",
        rating: 5,
        genre: "Romance",
        review: "A heartwarming coming-of-age story filled with summer romance and nostalgia.",
        image: "summer.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Summer_I_Turned_Pretty_(TV_series)",
      },
      {
        title:"maxton hall",
        platform:"Prime Video",
        rating: 3,
        genre: "Drama",
        review: "A gripping drama that explores the complexities of love and ambition.",
        image: "maxton.jpg",
        wiki: "https://en.wikipedia.org/wiki/Maxton_Hall_(TV_series)",
      },
      {
        title:"bridgerton",
        platform:"Netflix",
        rating: 5,
        genre: "Drama",
        review: "A lavish period drama filled with romance, intrigue, and scandal.",
        image: "bridgerton.jpg",
        wiki: "https://en.wikipedia.org/wiki/Bridgerton_(TV_series)",
      },
      {
        title:"3 body problem",
        platform:"Netflix",
        rating: 4,
        genre: "Sci-Fi",
        review: "A mind-bending adaptation of the acclaimed sci-fi novel, exploring humanity's first contact with an alien civilization.",
        image: "3body.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Three-Body_Problem_(TV_series)",
      },
      {
        title:"the vampire diaries",
        platform:"Netflix",
        rating: 5,
        genre: "Fantasy",
        review: "A supernatural drama that blends romance, mystery, and the eternal struggle between good and evil.",
        image:"tvd.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Vampire_Diaries_(TV_series)", 
      },
      {
        title:"the originals",
        platform:"Netflix",
        rating: 5,
        genre: "Fantasy",
        review: "A dark, thrilling spin-off from The Vampire Diaries, focusing on the original vampire family.",
        image:"theoriginals.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Originals_(TV_series)",
      },
      {
        title:"the legacies",
        platform:"Netflix",
        rating: 4,
        genre: "Fantasy",
        review: "A captivating continuation of The Vampire Diaries universe, exploring the next generation of supernatural beings.",
        image:"leagcies.jpg",
        wiki: "https://en.wikipedia.org/wiki/Legacies_(TV_series)",
      },
      {
        title:"the flash",
        platform:"Netflix",
        rating: 4,
        genre: "Action",
        review: "A fast-paced superhero series that brings the DC Comics character to life with thrilling action and heartfelt moments.",
        image: "theflash.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Flash_(2014_TV_series)",
      },
      {
        title:"smallville",
        platform: "Prime Video",
        rating: 4,
        genre: "Action",
        review: "A nostalgic journey through the early years of Superman, blending teen drama with superhero action.",
        image: "sv.jpg",
        wiki: "https://en.wikipedia.org/wiki/Smallville",
      },
      {
        title:"wandavision",
        platform: "Disney+ Hotstar",
        rating: 5,
        genre: "Sci-Fi",
        review: "A groundbreaking series that blends classic sitcoms with a deep, emotional narrative about grief and love.",
        image: "wandavision.jpg",
        wiki: "https://en.wikipedia.org/wiki/WandaVision",
      },
      {
        title:"what if?",
        platform: "Disney+ Hotstar",
        rating: 4,
        genre: "Sci-Fi",
        review: "An imaginative exploration of alternate realities in the Marvel universe, filled with intriguing 'what if' scenarios.",
        image: "whatif.jpg",
        wiki: "https://en.wikipedia.org/wiki/What_If%3F_(TV_series)",

      },
      {
        title:"loki",
        platform: "Disney+ Hotstar",
        rating: 5,
        genre: "Sci-Fi",
        review: "A thrilling dive into the mind of the God of Mischief, blending humor, action, and time-bending adventures.",
        image: "loki.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Loki_(TV_series)",
      },
      {
        title:"severance",
        platform: "Apple TV+",
        rating: 5,
        genre: "Drama",
        review: "A mind-bending thriller that explores the boundaries of work and personal life in a dystopian setting.",
        image: "severance.jpg",
        wiki: "https://en.wikipedia.org/wiki/Severance_(TV_series)",
      },
      {
        title:"the bear",
        platform: "Disney+ Hotstar",
        rating: 5,
        genre: "Drama",
        review: "A gripping tale of survival and resilience in the face of overwhelming odds.",
        image: "thebear.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Bear_(TV_series)",
      },
      {
        title:"motorheads",
        platform:"Prime Video",
        rating: 4,
        genre: "Action",
        review: "A high-octane series that dives into the world of motorsports, filled with adrenaline and drama.",
        image: "motorheads.jpg",
        wiki: "https://en.wikipedia.org/wiki/Motorheads_(TV_series)",
      },
      {
        title:"my lady jane",
        platform:"Prime Video",
        rating: 5,
        genre: "Drama",
        review: "A captivating historical drama that blends romance, intrigue, and the complexities of royal life.",
        image: "myladyjane.jpg",
      },
      {
        title:"leftovers",
        platform:"Prime Video",
        rating: 5,
        genre: "Drama",
        review: "A haunting exploration of grief and loss in a world where 2% of the population mysteriously disappears.",
        image: "leftovers.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Leftovers_(TV_series)",
      },
      {
        title:"nine perfect strangers",
        platform:"Prime Video",
        rating: 4,
        genre: "Drama",
        review: "A psychological thriller that delves into the lives of nine individuals seeking healing at a mysterious wellness retreat.",
        image: "nineperfect.jpg",
        wiki: "https://en.wikipedia.org/wiki/Nine_Perfect_Strangers_(TV_series)",
      },
      {
        title:"riverdale",
        platform:"Netflix",
        rating: 4,
        genre: "Drama",

        review: "A dark, twisted take on the Archie Comics universe, blending mystery, romance, and high school drama.",
        image: "riverdale.jpg",
        wiki: "https://en.wikipedia.org/wiki/Riverdale_(TV_series)",
      },
      {
        title:"ginny and georgia",
        platform:"Netflix",
        rating: 4,
        genre: "Comedy",
        review: "A witty, heartwarming series about a mother-daughter duo navigating life’s challenges with humor and resilience.",
        image: "gg.jpg",
        wiki: "https://en.wikipedia.org/wiki/Ginny_%26_Georgia",

      },
      {
        title:"the good place",
        platform:"Netflix",
        rating: 5,
        genre: "Comedy",
        review: "A clever, philosophical comedy that explores the afterlife with humor and heart.",
        image: "goodplace.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Good_Place",
      },
      {
        title:"gossip girl",
        platform:"Netflix",
        rating: 5,
        genre: "Drama",
        review: "A glamorous, scandalous look at the lives of Manhattan’s elite, filled with drama and intrigue.",
        image: "gossipgirl.jpg",
        wiki: "https://en.wikipedia.org/wiki/Gossipe_girl_(TV_series)",
      },
      {
        title:"gilmore girls",
        platform:"Netflix",
        rating: 5,
        genre: "Drama",
        review: "A heartwarming series about the close relationship between a mother and daughter, filled with witty dialogue and small-town charm.",
        image: "gilmoregirls.jpg",

        wiki: "https://en.wikipedia.org/wiki/Gilmore_girls",
      },
      {
        title:"the good doctor",
        platform:"Prime Video",
        rating: 4,
        genre: "Drama",
        review: "A touching, inspiring series about a young surgical resident with autism and savant syndrome.",
        image: "gooddoctor.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Good_Doctor_(American_TV_series)",
      },
      {
        title:"the good wife",
        platform:"Prime Video",
        rating: 5,
        genre: "Drama",
        review: "A smart, engaging legal drama that explores the complexities of law, politics, and personal relationships.",
        image: "tgw.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Good_Wife_(American_TV_series)",
      },
      {
        title:"its always sunny in philadelphia",
        platform:"Hulu",
        rating: 5,
        genre: "Comedy",

        review: "A dark, irreverent comedy that follows a group of friends running a bar in Philadelphia, filled with outrageous humor.",
        image: "sunny.jpg",
        wiki: "https://en.wikipedia.org/wiki/It%27s_Always_Sunny_in_Philadelphia",
      },
      {
        title:"goosebumps",
        platform:"Disney+ Hotstar",
        rating: 4,
        genre: "Horror",
        review: "A nostalgic horror anthology series that brings R.L. Stine's classic stories to life.",
        image: "goosebumps.jpg",
        wiki: "https://en.wikipedia.org/wiki/Goosebumps_(TV_series)",
      },
      {
        title:"the haunting of hill house",
        platform:"Netflix",
        rating: 5,
        genre: "Horror",
        review: "A chilling, emotional horror series that explores family trauma and the supernatural.",
        image: "hillhouse.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Haunting_of_Hill_House_(TV_series)",
      },
      {
        title:"the haunting of bly manor",
        platform:"Netflix",
        rating: 4,
        genre: "Horror",
        review: "A beautifully crafted ghost story that blends romance and tragedy with supernatural elements.",
        image: "blymanor.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Haunting_of_Bly_Manor"
      },
      {
        title:"lucifer",
        platform:"Netflix",
        rating: 5,
        genre: "Fantasy",
        review: "A devilishly charming series that blends crime-solving with supernatural elements and witty humor.",
        image: "lucifer.jpg",
        wiki: "https://en.wikipedia.org/wiki/Lucifer_(TV_series)"
      },
      {
        title:"russian doll",
        platform:"Netflix",
        rating: 5,
        genre: "Comedy",
        review: "A mind-bending, darkly comedic series about time loops and self-discovery.",
        image: "russiandoll.jpg",
        wiki: "https://en.wikipedia.org/wiki/Russian_Doll_(TV_series)",
      },
      {
        title:"the OA",
        platform:"Netflix",

        rating: 5,
        genre: "Sci-Fi",
        review: "A mysterious, thought-provoking series that blends science fiction with spiritual themes.",
        image: "theoa.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_OA",
      },
      {
        title:"jane the virgin",
        platform:"Netflix",
        rating: 5,
        genre: "Comedy",
        review: "A hilarious, heartfelt telenovela-inspired series about love, family, and unexpected twists.",
        image: "jane.jpg",
        wiki: "https://en.wikipedia.org/wiki/Jane_the_Virgin",
      },
      {
        title:"the time traveler's wife",
        platform:"HBO Max",
        rating: 4,
        genre: "Romance",
        review: "A poignant, time-bending love story that explores the complexities of relationships across time.",
        image: "ttw.jpg",
      },
      {
        title:"the affair",
        platform:"Showtime",
        rating: 4,
        genre: "Drama",
        review: "A gripping exploration of infidelity and its consequences, told from multiple perspectives.",
        image: "theaffair.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Affair_(TV_series)",
      },
      {
        title:"and just like that",
        platform:"HBO Max",
        rating: 4,
        genre: "Comedy",
        review: "A modern continuation of the iconic",
        image: "andjustlikethat.jpg",
        wiki: "https://en.wikipedia.org/wiki/And_Just_Like_That...",
      },
      {
        title:"sex and the city",
        platform:"HBO Max",
        rating: 5,
        genre: "Comedy",
        review: "A groundbreaking series that explores friendship, love, and the complexities of modern relationships in New York City.",
        image: "satc.jpg",
        wiki: "https://en.wikipedia.org/wiki/Sex_and_the_City",
      },
      {
        title:"the big bang theory",  
        platform:"HBO Max", 
        rating: 5,
        genre: "Comedy",
        review: "A hilarious sitcom that blends nerd culture with everyday life, filled with memorable characters and quotable moments.",
        image: "tbbt.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
      },
      {
        title:"superstore",
        platform:"Peacock",
        rating: 5,
        genre: "Comedy",
        review: "A smart, satirical comedy that takes a hilarious look at the lives of employees working in a big-box store.",
        image: "superstore.jpg",
        wiki: "https://en.wikipedia.org/wiki/Superstore_(American_TV_series)",
      },
      {
        title:"greys anatomy",
        platform:"Netflix",
        rating: 5,
        genre: "Drama", 
        review: "A long-running medical drama that combines romance, drama, and the challenges of life in a hospital.",
        image: "greys.jpg",
        wiki: "https://en.wikipedia.org/wiki/Greys_Anatomy",
      },
      {
        title:"the resident",
        platform:"Hulu",
        rating: 4,
        genre: "Drama",
        review: "A gripping medical drama that delves into the lives of doctors and the ethical dilemmas they face.",
        image: "theresident.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Resident_(American_TV_series)",
      },
      {
        title:"the prodigal son",
        platform:"Hulu",
        rating: 4,
        genre: "Drama",
        review: "A psychological thriller that follows a criminal psychologist who uses his father's serial killer expertise to solve crimes.",
        image: "prodigalson.jpg",
        wiki: "https://en.wikipedia.org/wiki/Prodigal_Son_(American_TV_series)",  
      },
      {
        title:"the goldbergs",
        platform:"Hulu",
        rating: 4,
        genre: "Comedy",
        review: "A nostalgic, family-friendly comedy that captures the essence of growing up in the '80s.",
        image: "thegoldbergs.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Goldbergs_(2013_TV_series)",
      },
      {
        title:"that 70s show",
        platform:"Netflix",
        rating: 5,
        genre: "Comedy",
        review: "A hilarious, nostalgic look at teenage life in the '70s, filled with memorable characters and quotable moments.",
        image: "that70sshow.jpg",
        wiki: "https://en.wikipedia.org/wiki/That_%27%2770s_Show",
      },
      {
        title:"that 90s show",
        platform:"Netflix",
        rating: 4,
        genre: "Comedy",
        review: "A nostalgic revival that brings back the beloved characters of That '70s Show in a new decade.",
        image: "that90sshow.jpg",
        wiki: "https://en.wikipedia.org/wiki/That_%27%2790s_Show",
      },
      {
        title:"how i met your father",
        platform:"Hulu",
        rating: 4,
        genre: "Comedy",
        review: "A modern take on the classic sitcom formula, following a group of friends navigating love and life in New York City.",
        image: "himyf.jpg",
        wiki: "https://en.wikipedia.org/wiki/How_I_Met_Your_Father",
      },
      {
        title:"how i met your mother",
        platform:"Hulu",
        rating: 5,
        genre: "Comedy",
        review: "A beloved sitcom that combines humor, romance, and friendship in a unique storytelling format.",
        image: "himym.jpg",
        wiki: "https://en.wikipedia.org/wiki/How_I_Met_Your_Mother",
      },
      {
        title:"high potential",
        platform:"Netflix",
        rating: 4,
        genre: "Comedy",
        review: "A quirky, heartwarming comedy that follows an underdog's journey to success in a corporate world.",
        image: "highpotential.jpg",
        wiki: "https://en.wikipedia.org/wiki/High_Potential_(TV_series)",

      },
      {
        title:"young sheldon",
        platform:"HBO Max",
        rating: 4,
        genre: "Comedy",
        review: "A charming prequel to The Big Bang Theory, exploring the childhood of genius Sheldon Cooper.",
        image: "young sheldon.jpg",
        wiki: "https://en.wikipedia.org/wiki/Young_Sheldon",

      },
      {
        title:"new girl",
        platform:"Hulu",
        rating: 5,
        genre: "Comedy",
        review: "A quirky, heartwarming sitcom about friendship, love, and the ups and downs of living with roommates.",
        image: "newgirl.jpg",
        wiki: "https://en.wikipedia.org/wiki/New _girl_(TV_series)",
      },
      {
        title:"the coummunity",
        platform:"Hulu",
        rating: 5,
        genre: "Comedy",
        review: "A clever, meta-comedy that follows a diverse group of community college students as they navigate life and friendship.",
        image: "community.jpg",
        wiki: "https://en.wikipedia.org/wiki/Community_(TV_series)",
      },
      {
        title:"heroes",
        platform:"Hulu",
        rating: 4,
        genre: "Sci-Fi",
        review: "A thrilling sci-fi series that follows ordinary people discovering extraordinary abilities and their impact on the world.",
        image: "heroes.jpg",
        wiki: "https://en.wikipedia.org/wiki/Heroes_(TV_series)",
      },
      {
        title:"castle",
        platform:"Hulu",
        rating: 4,
        genre: "Drama", 
        review: "A witty, engaging crime drama that follows a mystery novelist who teams up with a detective to solve crimes.",
        image: "castle.jpg",
        wiki: "https://en.wikipedia.org/wiki/Castle_(TV_series)",

      },
      {
        title:"the rookie",
        platform:"Hulu",
        rating: 4,
        genre: "Drama",
        review: "A gripping police procedural that follows a middle-aged rookie cop as he navigates the challenges of law enforcement.",
        image: "therookie.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Rookie_(American_TV_series)",
      },
      {
        title:"rick and morty",
        platform:"Hulu",
        rating: 5,
        genre: "Animation",
        review: "A wildly imaginative, darkly comedic animated series that follows the misadventures of a mad scientist and his good-hearted but fretful grandson.",
        image: "rickandmorty.jpg",
        wiki: "https://en.wikipedia.org/wiki/Rick_and_Morty",
      },
      {
        title:"the simpsons",
        platform:"Hulu",
        rating: 5,
        genre: "Animation",
        review: "A cultural phenomenon, this long-running animated series satirizes American life through the misadventures of the Simpson family.",
        image: "simpsons.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Simpsons",
      },
      {
        title:"family guy",
        platform:"Hulu",
        rating: 5,
        genre: "Animation",
        review: "A satirical animated series that follows the Griffin family and their outrageous adventures in the fictional town of Quahog.",
        image: "familyguy.jpg",
        wiki: "https://en.wikipedia.org/wiki/Family_Guy",
      },
      {
        title:"american dad",
        platform:"Hulu",
        rating: 5,
        genre: "Animation",
        review: "A satirical animated series that follows the life of Stan Smith, a conservative CIA agent, and his eccentric family.",
        image: "americandad.jpg",
        wiki: "https://en.wikipedia.org/wiki/American_Dad!",
      },
      {
        title:"daredevil",
        platform:"Netflix",
        rating: 5,
        genre: "Action",
        review: "A gritty, intense superhero series that follows blind lawyer Matt Murdock as he fights crime in Hell's Kitchen.",
        image: "daredevil.jpg",
        wiki: "https://en.wikipedia.org/wiki/Daredevil_(TV_series)",
      },
      {
        title:"dexter",
        platform:"Showtime",
        rating: 5,
        genre: "Drama",
        review: "A dark, gripping series that follows a forensic blood spatter analyst who moonlights as a vigilante serial killer.",
        image: "dexter.jpg",
        wiki: "https://en.wikipedia.org/wiki/Dexter_(TV_series)",
      },
      {
        title:"dexter: new blood",
        platform:"Showtime",
        rating: 5,
        genre: "Drama",
        review: "A thrilling revival of the iconic series, exploring Dexter's life in a new setting with fresh challenges.",
        image: "dexternewblood.jpg",
        wiki: "https://en.wikipedia.org/wiki/Dexter:_New_Blood",
      },
      {
        title:"dexter:original sin",
        platform:"Showtime",  
        rating: 5,
        genre: "Drama",
        review: "The original series that introduced audiences to the complex world of Dexter Morgan, a forensic expert with a dark secret.",
        image: "dexteroriginal.jpg",
        wiki: "https://en.wikipedia.org/wiki/Dexter_(TV_series)",
      },
     
      {
        title:"the bastard son & the devil himself",
        platform:"Netflix",
        rating: 4,
        genre: "Fantasy",
        review: "A dark, thrilling fantasy series that follows the son of the world's most dangerous witch as he navigates a world of magic and danger.",
        image: "bastardson.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Bastard_Son_%26_the_Devil_Himself",

      },
      {
        title:"the sandman",
        platform:"Netflix",
        rating: 5,
        genre: "Fantasy",
        review: "A visually stunning adaptation of Neil Gaiman's acclaimed comic series, blending fantasy, horror, and mythology.",
        image: "sandman.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Sandman_(TV_series)",

      },
      {
        title:"wednesday",
        platform:"Netflix",
        rating: 5,
        genre: "Comedy",
        review: "A quirky, darkly comedic series that follows Wednesday Addams as she navigates life at Nevermore Academy.",
        image: "wednesday.jpg",
        wiki: "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
      },
      {
        title:"travelers",
        platform:"Netflix",
        rating: 5,
        genre: "Sci-Fi",
        review: "A mind-bending sci-fi series that follows a team of time travelers sent back to prevent a global catastrophe.",
        image: "travelers.jpg",
        wiki: "https://en.wikipedia.org/wiki/Travelers_(TV_series)",
      },
      {
        title:"murderville",
        platform:"Netflix",
        rating: 4,
        genre: "Comedy",
        review: "A hilarious, improvised crime comedy that follows a detective and his celebrity guest stars as they solve bizarre cases.",
        image: "murderville.jpg",
        wiki: "https://en.wikipedia.org/wiki/Murderville_(TV_series)",
      },
      {
        title:"a series of unfortunate events",
        platform:"Netflix",
        rating: 5,
        genre: "Drama",
        review: "A darkly whimsical adaptation of Lemony Snicket's beloved book series, following the Baudelaire orphans as they outsmart the evil Count Olaf.",
        image: "unfortunateevents.jpg",
        wiki: "https://en.wikipedia.org/wiki/A_Series_of_Unfortunate_Events_(TV_series)",
      },
      {
        title:"the umbrella academy",
        platform:"Netflix",
        rating: 5,
        genre: "Action",
        review: "A quirky, action-packed series about a dysfunctional family of superheroes who reunite to solve the mystery of their father's death.",
        image: "umbrellaacademy.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Umbrella_Academy_(TV_series)",
      },
      {
        title:"shadowhunters",
        platform:"Netflix",
        rating: 5,
        genre: "Fantasy",
        review: "A thrilling fantasy series based on Cassandra Clare's bestselling novels, following a group of young demon hunters as they navigate a world of magic and danger.",
        image: "shadowhunters.jpg",
        wiki: "https://en.wikipedia.org/wiki/Shadowhunters_(TV_series)",
      },
      {
        title:"shadow and bone",
        platform:"Netflix",
        rating: 5,
        genre: "Fantasy",
        review: "A visually stunning adaptation of Leigh Bardugo's Grishaverse novels, blending magic, adventure, and romance.",
        image: "shawdowandbone.jpg",
        wiki: "https://en.wikipedia.org/wiki/Shadow_and_Bone_(TV_series)",
      },
      {
        title:"succession",
        platform:"HBO Max",
        rating: 5,
        genre: "Drama",
        review: "A gripping, darkly comedic drama that follows the power struggles within a wealthy media family.",
        image: "succession.jpg",
        wiki: "https://en.wikipedia.org/wiki/Succession_(TV_series)",
      },
      {
        title:"suits",
        platform:"Netflix",
        rating: 5,
        genre: "Drama",
        review: "A smart, engaging legal drama that follows a college dropout who lands a job at a prestigious law firm despite never attending law school.",
        image: "suits.jpg",
        wiki: "https://en.wikipedia.org/wiki/Suits_(TV_series)",
      },
      {
        title:"the four seasons",
        platform:"Netflix",
        rating: 4,
        genre: "Drama",
        review: "A heartwarming series that explores the lives of four friends as they navigate the ups and downs of life, love, and friendship.",
        image: "fourseasons.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Four_Seasons_(TV_series)",
      },
      {
        title:"crashing",
        platform:"Netflix",
        rating: 4,
        genre: "Comedy",
        review: "A quirky, heartwarming comedy that follows a group of friends living in a disused hospital, navigating life and love in London.",
        image: "crashing.png",
        wiki: "https://en.wikipedia.org/wiki/Crashing_(British_TV_series)",
      },
      {
        title:"you",
        platform:"Netflix",
        rating: 5,
        genre: "Thriller",
        review: "A chilling psychological thriller that follows a charming but dangerous bookstore manager who becomes obsessed ",
        image: "you.jpg",
        wiki: "https://en.wikipedia.org/wiki/You_(TV_series)",
        
      },
      {
        title:"firefly lane",
        platform:"Netflix",
        rating: 4,
        genre: "Drama",
        review: "A heartwarming series that follows the lifelong friendship between two friends as they navigate life's challenges and triumphs.",
        image: "fireflylane.jpg", 
        wiki: "https://en.wikipedia.org/wiki/Firefly_Lane_(TV_series)" ,
      },
      {
        title: "girls5eva",
        platform: "Peacock",
        rating: 4,
        genre: "Comedy",
        review: "A hilarious comedy about a one-hit-wonder band from the '90s that reunites to try and make a comeback.",
        image: "girls5eva.jpg", 
        wiki: "https://en.wikipedia.org/wiki/Girls5eva",
      },
      {
        title:"insatiable",
        platform:"Netflix",
        rating: 4,
        genre: "Comedy",
        review: "A darkly comedic series that follows a high school student who seeks revenge on her bullies after losing weight.",
        image: "insatiable.jpg",
        wiki: "https://en.wikipedia.org/wiki/Insatiable_(TV_series)",
      },
      {
        title:"good omens",
       platform:"Prime Video",
       rating: 5,
       genre: "Fantasy",
      review: "A whimsical, darkly comedic adaptation of Neil Gaiman and Terry Pratchett's novel about an angel and a demon teaming up to prevent the apocalypse.",
      image: "goodomens.jpg",
      wiki: "https://en.wikipedia.org/wiki/Good_Omens_(TV_series)",           
      },
      {
        title:"doctor who",
        platform:"bbc",
        rating: 5,
        genre: "Sci-Fi",
        review: "A beloved British sci-fi series that follows the adventures of the Doctor, a time-traveling alien with the ability to regenerate.",
        image: "doctorwho.jpg",
        wiki: "https://en.wikipedia.org/wiki/Doctor_Who",

      },
      {
        title:"rivals",
        platform:"Hulu",
        rating: 4,
        genre: "Drama",
        review: "A gripping drama that explores the intense rivalries and personal conflicts within a high-stakes environment.",
        image: "rivals.jpg",
        wiki: "https://en.wikipedia.org/wiki/Rivals_(TV_series)",

      },
      {
        title:"the wilds",
        platform:"Prime Video",
        rating: 4,
        genre: "Drama",
        review: "A thrilling survival drama that follows a group of teenagers stranded on a deserted island after a plane crash, exploring their backstories and the challenges they face.",
        image: "thewilds.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Wilds_(TV_series)",

      },
      {
        title:"outer banks",
        platform:"Netflix",
        rating: 5,
        genre: "Adventure",
        review: "A thrilling adventure series that follows a group of teenagers in the Outer Banks of North Carolina as they search for a legendary treasure.",
        image: "outerbanks.jpg",
        wiki: "https://en.wikipedia.org/wiki/Outer_Banks_(TV_series)",

      },
      {
        title:"the other two",
        platform:"HBO Max",
        rating: 4,
        genre: "Comedy",
        review: "A hilarious comedy that follows the struggles of two siblings trying to find their own success while their younger brother becomes a pop sensation.",
        image: "theothertwo.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Other_Two_(TV_series)",
      },
      {
        title:"locke and key",
        platform:"Netflix",
        rating: 5,
        genre: "Fantasy",
        review: "A thrilling fantasy series based on the comic book series, following the Locke siblings as they discover magical keys that unlock different powers and secrets.",
        image: "lockeandkey.jpg",
        wiki: "https://en.wikipedia.org/wiki/Locke_%26_Key_(TV_series)",

      },
      {
        title:"dark",
        platform:"Netflix",
        rating: 5,
        genre: "Sci-Fi",
        review: "A mind-bending German sci-fi thriller that explores time travel, family secrets, and the interconnectedness of four estranged families.",
        image: "dark.jpg",
        wiki: "https://en.wikipedia.org/wiki/Dark_(TV_series)",

      },
      {
        title:"money heist",
        platform:"Netflix",
        rating: 5,
        genre: "Thriller",
        review: "A gripping Spanish heist thriller that follows a group of robbers as they plan and execute the perfect heist on the Royal Mint of Spain.",
        image: "moneyheist.jpg",
        wiki: "https://en.wikipedia.org/wiki/Money_Heist_(TV_series)",
      },
      {
        title:"the end of the fucking world",
        platform:"Netflix",
        rating: 5,
        genre: "Comedy",
        review: "A darkly comedic series that follows two misfit teenagers on a road trip that takes unexpected turns.",
        image: "teotfw.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_End_of_the_Fucking_World_(TV_series)",
      },
      {
        title:"sex education",
        platform:"Netflix",
        rating: 5,
        genre: "Comedy",
        review: "A hilarious and heartwarming series that follows a socially awkward high school student who starts an underground sex therapy clinic with his classmate.",
        image: "se.jpg",
        wiki: "https://en.wikipedia.org/wiki/Sex_Education_(TV_series)",

      },
      {
        title:"jessica jones",
        platform:"Netflix",
        rating: 5,
        genre: "Action",
        review: "A gritty, intense superhero series that follows a former superhero turned private investigator as she battles her demons and a dangerous villain.",
        image: "jessicajones.jpg",
        wiki: "https://en.wikipedia.org/wiki/Jessica_Jones_(TV_series)",
      },
      {
        title:"modern family",
        platform:"Hulu",
        rating: 5,
        genre: "Comedy",
        review: "A hilarious mockumentary-style sitcom that follows the lives of an extended family, blending humor and heart.",
        image: "mordernfamily.jpg",
        wiki: "https://en.wikipedia.org/wiki/Modern_Family",
      },
      {
        title:"brookly nine nine",
        platform:"Hulu",
        rating: 5,
        genre: "Comedy",
        review: "A smart, hilarious comedy that follows a diverse group of detectives in a Brooklyn precinct as they solve crimes and navigate their personal lives.",
        image: "brookly99.jpg",
        wiki: "https://en.wikipedia.org/wiki/Brooklyn_Nine-Nine",
      },
      {
        title:"chilling adventures of sabrina",
        platform:"Netflix",
        rating: 5,
        genre: "Fantasy",
        review: "A dark, thrilling reimagining of the classic Sabrina the Teenage Witch story, blending horror, magic, and teen drama.",
        image: "sabrina.jpg",
        wiki: "https://en.wikipedia.org/wiki/Chilling_Adventures_of_Sabrina_(TV_series)",
      },
      {
        title:"charmed",
        platform:"Hulu",
        rating: 4,
        genre: "Fantasy",
        review: "A reboot of the classic series that follows three sisters who discover they are powerful witches and must protect their world from dark forces.",
        image: "charmed.jpg",
        wiki: "https://en.wikipedia.org/wiki/Charmed_(2018_TV_series)",
      },
      {
        title:"2 broke girls",
        platform:"Hulu",
        rating: 4,
        genre: "Comedy",
        review: "A hilarious sitcom that follows two waitresses from different backgrounds who team up to start a cupcake business.",
        image: "2brokegirls.jpg",
        wiki: "https://en.wikipedia.org/wiki/2_broke_girls",
      },
      {
        title:"fate the wixn saga",
        platform:"Netflix",
        rating: 4,
        genre: "Fantasy",
        review: "A magical series that follows a group of young fairies as they navigate their powers, friendships, and the challenges of their world.",
        image: "fate.jpg",
        wiki: "https://en.wikipedia.org/wiki/Fate:_The_Winx_Saga",
      },
      {
        title:"the only murderers in the building",
        platform:"Hulu",
        rating:5,
        genre:"thriller",
        review:"A clever and suspenseful series that follows a group of true crime enthusiasts as they investigate a murder in their apartment building.",
        image: "tomitb.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Only_Murderers_in_the_Building",
      },
      {
        title:"the society",
        platform:"Netflix",
        rating:4,
        genre:"drama",
        review:"A group of teenagers must learn to survive in a facsimile of their wealthy New England town after all the adults mysteriously disappear.",
        image: "thesociety.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Society_(TV_series)",
      },
      {
        title:"the better sister",
        platform:"Prime Video",
        rating:4,
        genre:"drama",
        review:"A gripping drama that follows the complicated relationship between two sisters as they navigate love, betrayal, and family secrets.",
        image: "thebettersister.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Better_Sister",
      },
      {
        title:"bad sisters",
        platform:"hulu",
        rating:4,
        genre:"comedy",
        review:"A darkly comedic series that follows a group of sisters who will stop at nothing to protect each other.",
        image: "bad_sisters.jpg",
        wiki: "https://en.wikipedia.org/wiki/Bad_Sisters_(TV_series)",
      },
      {
        title:"alex rider",
        platform:"Prime Video",
        rating:4,
        genre:"action",
        review:"A thrilling series that follows a teenage spy as he navigates a dangerous world of espionage and betrayal.",
        image: "alexrider.jpg",
        wiki: "https://en.wikipedia.org/wiki/Alex_Rider_(TV_series)",
      },
      {
        title:"yellowjackets",
        platform:"showtime",
        rating:4,
        genre:"drama",
        review:"A gripping psychological horror series that follows a high school girls' soccer team whose plane crashes in the remote wilderness.",
        image: "yellowjackets.jpg",
        wiki: "https://en.wikipedia.org/wiki/Yellowjackets",
      },
      {
        title:"the flight attendant",
        platform:"hbo max",
        rating:4,
        genre:"thriller",
        review:"A suspenseful series that follows a flight attendant who wakes up next to a dead man.",
        image: "tfa.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Flight_Attendant",
      },
      {
        title:"based on a true story",
        platform:"peacock",
        rating:4,
        genre:"comedy",
        review:"A darkly comedic series that follows a couple who start a true crime podcast to solve a murder.",
        image: "boats.jpg",
        wiki: "https://en.wikipedia.org/wiki/Based_on_a_True_Story",
      },
      {
        title:"bondsman",
        platform:"Hulu",
        rating:4,
        genre:"drama",
        review:"A gripping drama that follows a group of bounty hunters as they navigate the dangerous world of fugitives and the law.",
        image: "bondsman.jpg",
        wiki: "https://en.wikipedia.org/wiki/Bondsmen",
      },
      {
        title:"continuum",
        platform:"Hulu",
        rating:4,
        genre:"sci-fi",
        review:"A gripping sci-fi series that follows a group of time-traveling law enforcement officers as they battle a terrorist organization.",
        image: "continuum.jpg",
        wiki: "https://en.wikipedia.org/wiki/Continuum_(TV_series)",
      },
      {
        title:"how to get away with murder",
        platform:"Netflix",
        rating:5,
        genre:"drama",
        review:"A brilliant and complex series that follows a group of law students as they become entangled in a murder plot.",
        image: "htgawm.jpg",
        wiki: "https://en.wikipedia.org/wiki/How_to_Get_Away_with_Murder",
      },
      {
        title:"the neighborhood",
        platform:"CBS",
        rating:4,
        genre:"comedy",
        review:"A lighthearted sitcom that follows a friendly white family as they adjust to their new African-American neighbors.",
        image: "theneighborhood.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Neighborhood",
      },
      {
        title:"wizards of waverly place",
        platform:"Disney Channel",
        rating:4,
        genre:"comedy",
        review:"A young wizard must learn to control his powers while dealing with everyday challenges.",
        image: "wowp.jpg",
        wiki: "https://en.wikipedia.org/wiki/Wizards_of_Waverly_Place",
      },
      {
        title:"suite life of zack and cody",
        platform:"Disney Channel",
        rating:4,
        genre:"comedy",
        review:"The misadventures of twin brothers living in a luxury hotel with their single mother.",
        image: "slozac.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Suite_Life_of_Zack_and_Cody"
      },
      {
        title:"degrassi: the next generation",
        platform:"Netflix",
        rating: 4,
        genre: "Drama",
        review:"A groundbreaking series that follows a group of teenagers as they navigate the challenges of adolescence.",
        image: "dtng.jpg",
        wiki: "https://en.wikipedia.org/wiki/Degrassi:_The_Next_Generation"
      },
      {
        title:"dynasty",
        platform:"Netflix",
        rating: 4,
        genre: "Drama",
        review:"A modern reboot of the classic soap opera that follows the lives of the wealthy Carrington family.",
        image: "dynasty.jpg",
        wiki: "https://en.wikipedia.org/wiki/Dynasty_(2017_TV_series)"
      },
      {
        title:"the chosen",
        platform:"Netflix",
        rating: 4,
        genre: "Drama",
        review:"A powerful and moving series that tells the story of the early followers of Jesus.",
        image: "thechosen.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Chosen_(TV_series)"
      },
      {
        title:"good girls",
        platform:"Netflix",
        rating: 4,
        genre: "Comedy",
        review:"A darkly comedic series that follows three suburban mothers who find themselves in over their heads after a botched robbery.",
        image: "goodgirls.jpg",
        wiki: "https://en.wikipedia.org/wiki/Good_Girls"
      },
      {
        title:"fringe",
        platform:"Hulu",
        rating: 5, 
        genre: "Sci-Fi",
        review: "A mind-bending sci-fi series that follows an FBI agent and a team of scientists as they investigate unexplained phenomena.",
        image: "fringe.jpg",
        wiki: "https://en.wikipedia.org/wiki/Fringe_(TV_series)"
      },
      {
        title:"the bold type",
        platform: "Hulu",
        rating: 4,
        genre: "Drama",
        review: "A bold and empowering series that follows a group of young women as they navigate their careers and personal lives.",
        image: "tbt.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Bold_Type"
      },
      {
        title:"the OC",
        platform: "Hulu",
        rating: 5,
        genre: "Drama",
        review: "A groundbreaking series that follows a group of teenagers in Orange County as they navigate love, friendship, and family drama.",
        image: "theoc.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_OC"
      },
      {
        title:"90210",
        platform: "Hulu",
        rating: 4,
        genre: "Drama",
        review: "A modern reboot of the classic series that follows a group of teenagers in Beverly Hills as they navigate the challenges of adolescence.",
        image: "90210.jpg",
        wiki: "https://en.wikipedia.org/wiki/90210_(TV_series)",
      },
      {
        title:"evil",
        platform: "Paramount+",
        rating: 5,
        genre: "Thriller",
        review: "A chilling psychological thriller that follows a team of investigators as they examine supernatural occurrences and the nature of evil.",
        image: "evil.jpg",
        wiki: "https://en.wikipedia.org/wiki/Evil_(TV_series)"
      },
      {
        title:"from",
        platform: "Paramount+",
        rating: 4,
        genre: "Thriller",  
        review: "A suspenseful series that follows a group of people trapped in a mysterious town where they are hunted by supernatural creatures.",
        image: "from.jpg",
        wiki: "https://en.wikipedia.org/wiki/From_(TV_series)"

      },
      {
        title:"why women kill",
        platform: "Paramount+",
        rating: 4,
        genre: "Comedy",
        review: "A darkly comedic anthology series that explores the lives of women across different time periods and their relationship with murder.",
        image: "wwk.jpg",
        wiki: "https://en.wikipedia.org/wiki/Why_Women_Kill"
      },
      {
        title:"big sky",
        platform: "ABC",
        rating: 4,
        genre: "Thriller",
        review: "A gripping thriller that follows a group of detectives as they investigate a series of kidnappings in a remote Montana town.",
        image: "bigsky.jpg",
        wiki: "https://en.wikipedia.org/wiki/Big_Sky_(TV_series)"
      },
      {
        title:"his dark materials",
        platform: "HBO",
        rating: 5,
        genre: "Fantasy",
        review: "A visually stunning adaptation of Philip Pullman's beloved trilogy that follows a young girl as she journeys through parallel universes.",
        image: "hdm.jpg",
        wiki: "https://en.wikipedia.org/wiki/His_Dark_Materials_(TV_series)"
      },
      {
        title:"cruel summer",
        platform: "Hulu",
        rating: 4,
        genre: "Thriller",
        review: "A suspenseful series that follows a young woman as she becomes entangled in a mysterious love triangle and a shocking crime.",
        image: "cs.jpg",
        wiki: "https://en.wikipedia.org/wiki/Cruel_Summer_(TV_series)"
      },
      {
        title:"kevin can fuck himself",
        platform: "AMC",
        rating: 4,
        genre: "Comedy",
        review: "A darkly comedic series that follows a woman who struggles to find her identity while navigating the challenges of her marriage.",
        image: "kcfh.jpg",
        wiki: "https://en.wikipedia.org/wiki/Kevin_Can_F***_Himself"
      },
      {
        title:"teen wolf",
        platform: "MTV",
        rating: 4,
        genre: "Fantasy",
        review: "A thrilling series that follows a teenager who becomes a werewolf and must navigate the challenges of high school while dealing with supernatural threats.",
        image: "teenwolf.jpg",
        wiki: "https://en.wikipedia.org/wiki/Teen_Wolf_(TV_series)"
      },
      {
        title:"buffy the vampire slayer",
        platform: "The WB",
        rating: 5,
        genre: "Fantasy",
        review: "A groundbreaking series that follows a young woman chosen to battle against vampires and other supernatural foes.",
        image: "btvs.jpg",
        wiki: "https://en.wikipedia.org/wiki/Buffy_the_Vampire_Slayer"
      },
      {
        title:"american horror story",
        platform: "FX",
        rating: 5,
        genre: "Horror",
        review: "An anthology horror series that explores different themes and settings each season, blending psychological horror with supernatural elements.",
        image: "ahs.jpg",
        wiki: "https://en.wikipedia.org/wiki/American_Horror_Story"
      },
      {
        title:"american gods",
        platform: "Starz",
        rating: 4,
        genre: "Fantasy",
        review: "A visually stunning adaptation of Neil Gaiman's novel that follows a young man as he navigates a world where gods exist and clash with modern society.",
        image: "ag.jpg",
        wiki: "https://en.wikipedia.org/wiki/American_Gods_(TV_series)"
      },
      {
        title:"superman and lois",
        platform: "The CW",
        rating: 4,
        genre: "Action",
        review: "A fresh take on the iconic superhero, following Clark Kent and Lois Lane as they navigate the challenges of parenthood while saving the world.",
        image: "sal.jpg",
        wiki: "https://en.wikipedia.org/wiki/Superman_%26_Lois"
      },
      {
        title:"xo kitty",
        platform: "Netflix",
        rating: 4,
        genre: "Romance",
        review: "A charming romantic comedy that follows Kitty, the younger sister of Lara Jean from the To All the Boys series, as she navigates her own love life.",
        image: "xokitty.jpg",
        wiki: "https://en.wikipedia.org/wiki/XO_Kitty"
      },
      {
        title:"wolf like me",
        platform: "Peacock",
        rating: 4,
        genre: "Romance",
        review: "A unique romantic drama that follows a man who discovers a werewolf in his life and the challenges they face together.",
        image: "wlm.jpg",
        wiki: "https://en.wikipedia.org/wiki/Wolf_Like_Me"
      },
      {
        title:"12 monkeys",
        platform: "Hulu",
        rating: 5,
        genre: "Sci-Fi",
        review: "A mind-bending sci-fi thriller that follows a time traveler sent back to prevent a deadly virus from wiping out humanity.",
        image: "12monkeys.jpg",
        wiki: "https://en.wikipedia.org/wiki/12_Monkeys_(TV_series)"
      },
      {
        title:"13 reasons why",
        platform: "Netflix",  
        rating: 4,
        genre: "Drama",
        review: "A powerful and emotional series that explores the impact of bullying and mental health through the story of a high school student who takes her own life.",
        image: "13reasonswhy.jpg",
        wiki: "https://en.wikipedia.org/wiki/13_Reasons_Why_(TV_series)",
      },
      {
        title:"what we do in the shadows",
        platform: "FX",
        rating: 5,
        genre: "Comedy",
        review: "A hilarious mockumentary-style comedy that follows a group of vampire roommates as they navigate modern life in Staten Island.",
        image: "whatwedointheshadows.jpg",
        wiki: "https://en.wikipedia.org/wiki/What_We_Do_in_the_Shadows_(TV_series)",
      },
      {
        title:"veronica mars",
        platform: "Hulu",
        rating: 5,
        genre: "Mystery",
        review: "A clever and engaging series that follows a young woman who moonlights as a private investigator while navigating the challenges of high school.",
        image: "vm.jpg",
        wiki: "https://en.wikipedia.org/wiki/Veronica_Mars"
      },
      {
        title:"v wars",
        platform: "Netflix",
        rating: 4,
        genre: "Fantasy",
        review: "A thrilling series that follows a doctor who discovers a vampire epidemic and must navigate the challenges of a world on the brink of chaos.",
        image: "vw.jpg",
        wiki: "https://en.wikipedia.org/wiki/V_Wars"
      },
      {
        title:"walker",
        platform: "The CW",
        rating: 4,
        genre: "Action",
        review: "A modern reboot of the classic series that follows a Texas Ranger as he fights crime and seeks justice in his own way.",
        image: "walker.jpg",
        wiki: "https://en.wikipedia.org/wiki/Walker_(TV_series)"
      },
      {
        title:"under the dome",
        platform: "CBS",
        rating: 4,
        genre: "Sci-Fi",
        review: "A suspenseful sci-fi series that follows a small town cut off from the outside world by a mysterious dome, exploring the challenges and secrets that arise.",
        image: "utd.jpg",
        wiki: "https://en.wikipedia.org/wiki/Under_the_Dome_(TV_series)"
      },
      {
        title:"titans",
        platform: "HBO Max",
        rating: 4,
        genre: "Action",
        review: "A gritty, action-packed series that follows a group of young superheroes as they come together to fight evil and protect the world.",
        image: "titans.jpg",
        wiki: "https://en.wikipedia.org/wiki/Titans_(TV_series)"
      },
      {
        title:"desparate housewives",
        platform: "ABC",
        rating: 5,
        genre: "Drama",
        review: "A darkly comedic drama that follows the lives of a group of women living on the same street, each with their own secrets and struggles.",
        image: "dh.jpg",
        wiki: "https://en.wikipedia.org/wiki/Desperate_Housewives"
      },
      {
        title:"the women in the house across the street from the girl in the window",
        platform: "Netflix",
        rating: 4,
        genre: "Mystery",
        review: "A darkly comedic mystery that follows a woman who believes she witnesses a murder in her neighborhood, leading her to investigate the truth.",
        image: "kristen.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Women_in_the_House_Across_the_Street"

      },
      {
        title:"the white lotus",
        platform:"HBO Max",
        rating: 5,
        genre: "Drama",
        review: "A social satire set in a tropical resort that follows the lives of the guests and staff over the course of a week.",
        image: "twl.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_White_Lotus"
      },
      {
        title:"the winchesters",
        platform: "The CW",
        rating: 4,
        genre: "Fantasy",
        review: "A prequel to Supernatural that follows the Winchester brothers as they hunt monsters and uncover family secrets.",
        image: "tw.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Winchester"
      },
      {
        title:"the sex lives of college girls",
        platform: "HBO Max",
        rating: 4,
        genre: "Comedy",
        review: "A coming-of-age comedy series that follows four college roommates as they navigate friendships, relationships, and their sexual experiences.",
        image: "tslocg.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Sex_Lives_of_College_Girls"
      },
      {
        title:"the righteous gemstones",
        platform: "HBO Max",
        rating: 4,
        genre: "Comedy",
        review: "A satirical comedy that follows a wealthy, dysfunctional family of televangelists as they navigate their personal and professional lives.",
        image: "trg.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Righteous_Gemstones"
      },
      {
        title:"the orange is the new black",
        platform: "Netflix",
        rating: 5,
        genre: "Drama",
        review: "A groundbreaking series that follows the lives of women in prison, exploring their backstories and the challenges they face.",
        image: "oitnb.jpg",
        wiki: "https://en.wikipedia.org/wiki/Orange_Is_the_New_Black"
      },
      {
        title:"the marvelous mrs. maisel",
        platform: "Prime Video",
        rating: 5,
        genre: "Comedy",
        review: "A witty and stylish comedy-drama that follows a housewife who pursues a career in stand-up comedy in the 1950s.",
        image: "tmmm.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Marvelous_Mrs._Maisel"
      },
      {
        title:"the after party",
        platform: "Apple TV+",
        rating: 4,
        genre: "Comedy",
        review: "A comedic murder mystery that unfolds during a lavish after-party, where everyone is a suspect.",
        image: "tap.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Afterparty"
      },
      {
        title:"the artful dodger",
        platform: "Disney+",
        rating: 4,
        genre: "Drama",
        review: "A reimagining of the classic Oliver Twist story, focusing on the character of the Artful Dodger and his adventures in Victorian London.",
        image: "tad.jpeg",
        wiki: "https://en.wikipedia.org/wiki/The_Artful_Dodger_(TV_series)"
      },
      {
        title:"switched at birth",
        platform: "Freeform",
        rating: 4,
        genre: "Drama",
        review: "A family drama that explores the lives of two teenage girls who discover they were switched at birth.",
        image: "sab.jpg",
        wiki: "https://en.wikipedia.org/wiki/Switched_at_Birth"
      },
      {
        title:"ted lasso",
        platform: "Apple TV+",
        rating: 5,
        genre: "Comedy",
        review: "A heartwarming comedy that follows an American football coach who is hired to manage a struggling English soccer team, despite having no experience in the sport.",
        image: "tedlasso.jpg",
        wiki: "https://en.wikipedia.org/wiki/Ted_Lasso"
      },
      {
        title:"lost",
        platform: "ABC",
        rating: 5,
        genre: "Mystery",
        review: "A groundbreaking series that follows the survivors of a plane crash on a mysterious island, exploring their backstories and the island's secrets.",
        image: "lost.jpg",
        wiki: "https://en.wikipedia.org/wiki/Lost_(TV_series)"
      },
      {
        title:"dare me",
        platform: "USA Network",
        rating: 4,
        genre: "Drama",
        review: "A psychological drama that explores the lives of a group of high school cheerleaders and their intense rivalries.",
        image: "dareme.jpg",
        wiki: "https://en.wikipedia.org/wiki/Dare_Me"
      },
      {
        title:"squid game",
        platform: "Netflix",
        rating: 5,
        genre: "Thriller",
        review: "A gripping South Korean thriller that follows a group of people who are invited to participate in a deadly game for a chance to win a massive cash prize.",
        image: "squidgame.jpg",
        wiki: "https://en.wikipedia.org/wiki/Squid_Game"
      },
      {
        title:"shining vale",
        platform: "Starz",
        rating: 4,
        genre: "Comedy",
        review: "A darkly comedic series that follows a family who moves into a haunted house, exploring the challenges of marriage, motherhood, and the supernatural.",  
        image: "shiningvale.jpg",
        wiki: "https://en.wikipedia.org/wiki/Shining_Vale"

       },
       {
        title:"she hulk",
        platform: "Disney+",
        rating: 4,
        genre: "Action",
        review: "A fun and action-packed series that follows Jennifer Walters, a lawyer who gains superpowers and must balance her career with her new abilities.",
        image: "shehulk.jpg",
        wiki: "https://en.wikipedia.org/wiki/She-Hulk"

       },
     
       {
        title:"school spirits",
        platform: "Paramount+",
        rating: 4,
        genre: "Mystery",
        review: "A supernatural mystery series that follows a high school student who finds herself trapped in the afterlife and must solve the mystery of her own death.",
        image: "ss.jpg",
        wiki: "https://en.wikipedia.org/wiki/School_Spirits"
       },
       {
        title:"pretty little liars: original sin",
        platform: "HBO Max",
        rating: 4,
        genre: "Mystery",
        review: "A dark and twisted reimagining of the original series, exploring new characters and storylines.",
        image: "pllos.jpg",
        wiki: "https://en.wikipedia.org/wiki/Pretty_Little_Liars:_Original_Sin"
       },
       {
        title:"pretty little liars",
        platform: "HBO Max",
        rating: 5,
        genre: "Mystery",
        review: "A thrilling mystery series that follows a group of high school students as they navigate love, friendship, and the secrets that bind them.",
        image: "pll.jpg",
        wiki: "https://en.wikipedia.org/wiki/Pretty_Little_Liars"
       },
       {
        title:"preacher",
        platform: "AMC",
        rating: 4,
        genre: "Fantasy",
        review: "A darkly comedic fantasy series that follows a preacher who gains the power to compel people to do his bidding, leading him on a journey to find God.",
        image: "preacher.jpg",
        wiki: "https://en.wikipedia.org/wiki/Preacher_(TV_series)"
       },
       {
        title:"peacemaker",
        platform: "HBO Max",
        rating: 5,
        genre: "Action",
        review: "A spin-off from The Suicide Squad, this series follows Peacemaker, a man who believes in peace at any cost, no matter how many people he has to kill to get it.",
        image: "peacemaker.jpg",
        wiki: "https://en.wikipedia.org/wiki/Peacemaker_(TV_series)"
       },
       {
        title:"the boys",
        platform: "Amazon Prime Video",
        rating: 5,
        genre: "Action",
        review: "A gritty and darkly comedic take on the superhero genre, following a group of vigilantes as they take on corrupt superheroes.",
        image: "theboys.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Boys_(TV_series)"
       },
       {
        title:"gen v",
        platform: "Amazon Prime Video",
        rating: 4,
        genre: "Action",
        review: "A gritty and darkly comedic take on the superhero genre, following a group of young superheroes as they navigate their powers and the challenges of adolescence.",
        image: "gennv.jpg",
        wiki: "https://en.wikipedia.org/wiki/Gen_V"
       },
       {
        title:"peaky blinders",
        platform: "Netflix",
        rating: 5,
        genre: "Crime",
        review: "A gripping crime drama set in post-World War I Birmingham, following the exploits of the Shelby crime family.",
        image: "peakyblinders.jpg",
        wiki: "https://en.wikipedia.org/wiki/Peaky_Blinders"
       },
       {
        title:"orphan black",
        platform: "BBC America",
        rating: 5,
        genre: "Sci-Fi",
        review: "A thought-provoking sci-fi series that follows a group of clones as they navigate their identities and fight for their rights.",
        image: "orphanblack.jpg",
        wiki: "https://en.wikipedia.org/wiki/Orphan_Black"
       },
       {
        title:"once upon a time",
        platform: "ABC",
        rating: 4,
        genre: "Fantasy",
        review: "A magical series that reimagines classic fairy tales, blending fantasy and drama as characters from different stories come together in a modern setting.",
        image: "ouat.jpg",
        wiki: "https://en.wikipedia.org/wiki/Once_Upon_a_Time_(TV_series)"
       },
       {
        title:"one day",
        platform: "Netflix",
        rating: 4,
        genre: "Romance",
        review: "A romantic drama that follows the lives of two people who meet on the same day each year, exploring their evolving relationship over time.",
        image: "one day.jpg",
        wiki: "https://en.wikipedia.org/wiki/One_Day_(TV_series)"
      },
      {
        title:"not dead yet",
        platform: "ABC",
        rating: 4,
        genre: "Comedy",
        review: "A lighthearted comedy that follows a group of friends as they navigate the ups and downs of life, love, and friendship.",
        image: "notdeadyet.jpg",
        wiki: "https://en.wikipedia.org/wiki/Not_Dead_Yet_(TV_series)"
      },
      {
        title:"never have i ever",
        platform: "Netflix",
        rating: 5,
        genre: "Comedy",
        review: "A coming-of-age comedy that follows an Indian-American teenager as she navigates the ups and downs of high school life.",
        image: "neverhaveiever.jpg",
        wiki: "https://en.wikipedia.org/wiki/Never_Have_I_Ever"
      },
      {
        title:"mom",
        platform: "CBS",
        rating: 4,
        genre: "Comedy",
        review: "A heartwarming and hilarious sitcom that follows a single mother and her estranged mother as they navigate the challenges of sobriety and family life.",
        image: "mom.jpg",
        wiki: "https://en.wikipedia.org/wiki/Mom_(TV_series)"
      },
      {
        title:"misfits",
        platform: "E4",
        rating: 5,
        genre: "Sci-Fi",
        review: "A gritty and darkly comedic series that follows a group of young offenders who gain superpowers after a freak storm, exploring their struggles with their new abilities.",
        image: "misfits.jpg",
        wiki: "https://en.wikipedia.org/wiki/Misfits_(TV_series)"
      },
      {
        title:"lockwood & co.",
        platform: "Netflix",
        rating: 4,
        genre: "Fantasy",
        review: "A thrilling adaptation of the popular book series, following a group of young ghost hunters as they battle supernatural forces in a haunted London.",
        image: "lc.jpg",
        wiki: "https://en.wikipedia.org/wiki/Lockwood_%26_Co."
      },
      {
        title:"killing eve",
        platform: "BBC America",
        rating: 5,
        genre: "Thriller",
        review: "A gripping thriller that follows an intelligence investigator as she becomes obsessed with a talented assassin.",
        image: "ke.jpg",
        wiki: "https://en.wikipedia.org/wiki/Killing_Eve"
      },
      {
        title:"grimm",
        platform: "NBC",
        rating: 4,
        genre: "Fantasy",
        review: "A dark fantasy series that follows a homicide detective who discovers he is a 'Grimm,' a guardian tasked with keeping the balance between humanity and mythological creatures.",
        image: "grimm.jpg",
        wiki: "https://en.wikipedia.org/wiki/Grimm_(TV_series)"
      },
      {
        title:"gotham knights",
        platform: "The CW",
        rating: 4,
        genre: "Action",
        review: "A fresh take on the Batman mythos, following a group of young vigilantes as they fight crime in Gotham City.",
        image: "gk.jpg",
        wiki: "https://en.wikipedia.org/wiki/Gotham_Knights_(TV_series)"
      },
      {
        title:"griselda",
        platform: "Netflix",
        rating: 4,
        genre: "Crime",
        review: "A gripping crime drama that follows the rise and fall of a powerful drug lord, exploring the complexities of her life and the world of organized crime.",
        image: "griselda.jpg",
        wiki: "https://en.wikipedia.org/wiki/Griselda"

      },
      {
        title:"greenhouse academy",
        platform: "Netflix",
        rating: 4,
        genre: "Drama",
        review: "A coming-of-age drama that follows a group of teenagers at an elite boarding school as they navigate friendships, rivalries, and personal challenges.",
        image: "gha.jpg",
        wiki: "https://en.wikipedia.org/wiki/Greenhouse_Academy"
      },
      {
        title:"glee",
        platform: "Fox",
        rating: 5,
        genre: "Musical",
        review: "A musical comedy-drama that follows a high school glee club as they navigate the challenges of adolescence, friendship, and the power of music.",
        image: "glee.jpg",
        wiki: "https://en.wikipedia.org/wiki/Glee_(TV_series)"
      },
      {
        title:"ghost whisperer",
        platform: "CBS",
        rating: 4,
        genre: "Fantasy",
        review: "A supernatural drama that follows a young woman who can see and communicate with ghosts, helping them resolve their unfinished business.",
        image: "gw.jpg",
        wiki: "https://en.wikipedia.org/wiki/Ghost_Whisperer"
      },
      {
        title:"ghosts",
        platform: "CBS",
        rating: 4,
        genre: "Comedy",
        review: "A hilarious comedy that follows a young couple who inherit a haunted mansion and must navigate the challenges of living with a group of quirky ghosts.",
        image: "ghosts.jpg",
        wiki: "https://en.wikipedia.org/wiki/Ghosts_(American_TV_series)"
      },
      {
        title:"fresh off the boat",
        platform: "ABC",
        rating: 4,
        genre: "Comedy",
        review: "A heartwarming and hilarious sitcom that follows a Taiwanese-American family as they navigate life in Florida during the 1990s.",
        image: "fotb.jpg",
        wiki: "https://en.wikipedia.org/wiki/Fresh_Off_the_Boat"
      },
      {
        title:"euphoria",
        platform:"HBO Max",
        rating: 5,
        genre:"Drama",
        review:"A raw and unflinching look at the lives of a group of high school students as they navigate love, friendship, and addiction.",
        image:"euphoria.jpg",
        wiki:"https://en.wikipedia.org/wiki/Euphoria_(American_TV_series)",
      },
      {
        title:"dollface",
        platform:"Hulu",
        rating: 4,
        genre:"Comedy",
        review:"A quirky comedy that follows a young woman navigating the ups and downs of modern life and friendships.",
        image:"dollface.jpg",
        wiki:"https://en.wikipedia.org/wiki/Dollface"
      },
      {
        title:"elite",
        platform:"Netflix",
        rating: 5,
        genre:"Drama",
        review:"A Spanish thriller that follows the lives of three working-class teens who enroll in an exclusive private school and become embroiled in its dark secrets.",
        image:"elite.jpg",
        wiki:"https://en.wikipedia.org/wiki/Elite_(TV_series)"
      },
      {
        title:"downton abbey",
        platform:"PBS",
        rating: 5,
        genre:"Drama",
        review:"A British historical drama that follows the lives of the aristocratic Crawley family and their servants in the post-Edwardian era.",
        image:"downtonabbey.jpg",
        wiki:"https://en.wikipedia.org/wiki/Downton_Abbey"
      },
      {
        title:"dr.death",
        platform:"Peacock",
        rating: 4,
        genre:"Drama",
        review:"A chilling true crime drama that follows the story of a neurosurgeon who becomes a serial killer, exploring the dark side of the medical profession.",
        image: "drdeath.jpg",
        wiki: "https://en.wikipedia.org/wiki/Dr._Death_(TV_series)"
      },
      {
        title:"devious maids",
        platform:"Lifetime",
        rating: 4,
        genre:"Drama",
        review:"A glamorous and suspenseful drama that follows a group of Latina maids working in the homes of wealthy families in Beverly Hills.",
        image: "deviousmaids.jpg",
        wiki: "https://en.wikipedia.org/wiki/Devious_Maids"
      },
      {
        title:"death and other details",
        platform:"Netflix",
        rating: 4,
        genre:"Drama",
        review:"A thought-provoking drama that explores the complexities of life, death, and the human experience through a series of interconnected stories.",
        image: "daod.jpg",
        wiki: "https://en.wikipedia.org/wiki/Death_and_Other_Details"
      },
      {
        title:"dawson's creek",
        platform:"The WB",
        rating: 5,
        genre:"Drama",
        review:"A classic coming-of-age drama that follows a group of friends as they navigate the challenges of adolescence in a small town.",
        image: "dawsonscreek.jpg",
        wiki: "https://en.wikipedia.org/wiki/Dawson%27s_Creek"

      },
      {
        title:"cobra kai",
        platform:"Netflix",
        rating: 5,
        genre:"Action",
        review:"A continuation of the Karate Kid saga, following Johnny Lawrence and Daniel LaRusso as they navigate their rivalry and the challenges of parenthood.",
        image: "cobrakai.jpg",
        wiki: "https://en.wikipedia.org/wiki/Cobra_Kai"
      },
      {
        title:"boo bitch",  
        platform:"Netflix",
        rating: 4,
        genre:"Comedy",
        review:"A supernatural comedy that follows a high school student who discovers she is a ghost and must navigate the challenges of her new existence.",
        image: "boobitch.jpg",
        wiki: "https://en.wikipedia.org/wiki/Boo_Bitch"
      },
      {
        title:"big little lies",
        platform:"HBO Max",
        rating: 5,
        genre:"Drama",
        review:"A gripping drama that follows a group of women in Monterey, California, whose lives become intertwined after a murder.",
        image: "biglittlelies.jpg",
        wiki: "https://en.wikipedia.org/wiki/Big_Little_Lies"
      },
      {
        title:"beef",
        platform:"Netflix",
        rating: 4,
        genre:"Comedy",
        review:"A darkly comedic series that explores the lives of two strangers who become embroiled in a road rage incident.",
        image: "beef.jpg",
        wiki: "https://en.wikipedia.org/wiki/Beef_(TV_series)"
      },
      {
        title:"american pie",
        platform:"HBO Max",
        rating: 4,
        genre:"Comedy",
        review:"A hilarious coming-of-age film that follows a group of friends as they navigate the challenges of adolescence and relationships.",
        image: "americanpie.jpg",
        wiki: "https://en.wikipedia.org/wiki/American_Pie"
      },
      {
        title:"american housewife",
        platform:"ABC",
        rating: 4,
        genre:"Comedy",
        review:"A humorous look at the life of a housewife in a wealthy suburb, balancing family, friendships, and her own identity.",
        image: "americanhousewife.jpg",
        wiki: "https://en.wikipedia.org/wiki/American_Housewife"
      },
      {
        title:"mythic quest",
        platform: "Apple TV+",
        rating: 5,
        genre: "Comedy",
        review: "A workplace comedy set in a video game development studio, exploring the challenges and absurdities of the gaming industry.",
        image: "mythicquest.jpg",
        wiki: "https://en.wikipedia.org/wiki/Mythic_Quest"
      },
      {
        title:"scream queens",
        platform: "Fox",
        rating: 4,
        genre: "Comedy",
        review: "A horror-comedy series that follows a group of sorority girls who become embroiled in a series of murders on their campus.",
        image: "screamqueens.jpg",
        wiki: "https://en.wikipedia.org/wiki/Scream_Queens"
      },
      {
        title:"dead to me",
        platform: "Netflix",
        rating: 5,
        genre: "Comedy", 
        review: "A dark comedy that follows the unlikely friendship between two women as they navigate grief and loss.",
        image: "dtm.jpg",
        wiki: "https://en.wikipedia.org/wiki/Dead_to_Me"
      },
      {
        title:"santa clarita diet",
        platform: "Netflix",
        rating: 4,
        genre: "Comedy",
        review: "A suburban couple discovers that the wife is a zombie, leading to a series of darkly comedic adventures.",
        image: "scd.jpg",
        wiki: "https://en.wikipedia.org/wiki/Santa_Clarita_Diet"
      },
      {
        title:"derry girls",
        platform: "Channel 4",
        rating: 5,
        genre: "Comedy",
        review: "A coming-of-age sitcom set in 1990s Northern Ireland, following a group of teenage girls as they navigate the challenges of adolescence amidst the Troubles.",
        image: "derrygirls.jpg",
        wiki: "https://en.wikipedia.org/wiki/Derry_Girls"
      },
      {
        title:"emily in paris",
        platform: "Netflix",
        rating: 4,
        genre: "Comedy",
        review: "A young American woman navigates life and love in Paris while working for a marketing firm.",
        image: "eip.jpg",
        wiki: "https://en.wikipedia.org/wiki/Emily_in_Paris"
      },
      {
        title:"virgin river",
        platform: "Netflix",
        rating: 4,
        genre: "Drama",
        review: "A romantic drama series that follows a nurse practitioner as she moves to a remote California town and starts a new life.",
        image: "virginriver.jpg",
        wiki: "https://en.wikipedia.org/wiki/Virgin_River_(TV_series)"
      },
      {
        title:"hart of dixie",
        platform: "The CW",
        rating: 4,
        genre: "Comedy",
        review: "A charming dramedy about a New York City doctor who inherits a small medical practice in Alabama.",
        image: "hartofdixie.jpg",
        wiki: "https://en.wikipedia.org/wiki/Hart_of_Dixie"
      },
      {
        title:"911 lone star",
        platform: "Fox",
        rating: 4,
        genre: "Drama",
        review: "A procedural drama series that follows a group of firefighters in Austin, Texas, as they respond to emergencies and navigate their personal lives.",
        image: "911lonestar.jpg",
        wiki: "https://en.wikipedia.org/wiki/9-1-1:_Lone_Star"
      },
      {
        title:"good cop/ bad cop",
        platform: "Netflix",
        rating: 4,
        genre: "Comedy",
        review: "A comedic series that follows two mismatched police officers as they navigate the challenges of law enforcement and their personal lives.",
        image: "goodcopbadcop.jpg",
        wiki: "https://en.wikipedia.org/wiki/Good_Cop_(TV_series)"
      },
      {
        title:"one tree hill",
        platform: "The WB",
        rating: 5,
        genre: "Drama",
        review: "A coming-of-age drama series that follows a group of high school students in the fictional town of Tree Hill, North Carolina.",
        image: "oth.jpg",
        wiki: "https://en.wikipedia.org/wiki/One_Tree_Hill"
      },
      {
       title:"cougar town",
        platform: "ABC",
        rating: 4,
        genre: "Comedy",
        review: "A comedic series that follows a recently divorced woman as she navigates life and relationships in her 40s.",
        image: "cougartown.jpg",
        wiki: "https://en.wikipedia.org/wiki/Cougar_Town"
      },
      {
        title:"surviving summer",
        platform: "Netflix",
        rating: 4,
        genre: "Drama",
        review: "A coming-of-age drama series that follows a group of teenagers as they navigate love, friendship, and self-discovery during a summer in a beach town.",
        image: "survivingsummer.jpg",
        wiki: "https://en.wikipedia.org/wiki/Surviving_Summer"
      },
      {
        title:"running point",
        platform: "Netflix",
        rating: 4,
        genre: "drama",
        review: "a women becoming a ceo of a basketball company and running it more succesfully then her father and brothers.",
        image: "runningpoint.jpg",
        wiki: "https://en.wikipedia.org/wiki/Running_Point"
      },
      {
        title:"the brother sun",
        platform: "Netflix",
        rating: 4,
        genre: "Drama",
        review: "A heartwarming drama that follows the journey of a young boy as he navigates the challenges of growing up in a single-parent household.",
        image: "thebrothersun.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Brother_Sun"
      },
      {
        title:"i know what you did last summer",
        platform: "Amazon Prime Video",
        rating: 4,
        genre: "Thriller",
        review: "A group of teenagers is haunted by a mysterious figure from their past as they try to uncover the truth behind a summer of secrets.",
        image: "ikwydls.jpg",
        wiki: "https://en.wikipedia.org/wiki/I_Know_What_You_Did_Last_Summer_(TV_series)"
      },
      {
        title:"one of us is lying",
        platform: "Peacock",
        rating: 4,
        genre: "Mystery",
        review: "A group of high school students becomes suspects in a murder investigation after one of their classmates dies during detention.",
        image: "oneofusislying.jpg",
        wiki: "https://en.wikipedia.org/wiki/One_of_Us_Is_Lying"

      },
      {
        title:"nobody wants this",
        platform: "Hulu",
        rating: 4,
        genre: "Drama",
        review: "A thought-provoking drama that explores the complexities of modern relationships and the impact of social media.",
        image: "nobodywantsthis.jpg",
        wiki: "https://en.wikipedia.org/wiki/Nobody_Wants_This"

      },
      {
        title:"ozark",
        platform: "Netflix",
        rating: 4,
        genre: "Drama",
        review: "A financial planner relocates his family to the Ozarks after a money-laundering scheme goes wrong.",
        image: "ozark.jpg",
        wiki: "https://en.wikipedia.org/wiki/Ozark_(TV_series)"
      },
      {
        title:"nancy drew",
        platform: "The CW",
        rating: 4,
        genre: "Mystery",
        review: "A modern take on the classic detective stories, following Nancy Drew as she solves crimes in her hometown.",
        image: "nancydrew.jpg",
        wiki: "https://en.wikipedia.org/wiki/Nancy_Drew_(2019_TV_series)"
      },
      {
        title:"my name is earl",
        platform: "NBC",
        rating: 4,
        genre: "Comedy",
        review: "A comedic series that follows the life of Earl, a man who tries to make amends for his past mistakes after winning the lottery.",
        image: "mynameisearl.jpg",
        wiki: "https://en.wikipedia.org/wiki/My_Name_Is_Earl"
      },
      {
        title:"no good deed",
        platform: "Hulu",
        rating: 4,
        genre: "Drama",
        review: "A gripping drama that follows a woman's quest for justice after a violent crime shatters her life.",
        image: "nogooddeed.jpg",
        wiki: "https://en.wikipedia.org/wiki/No_Good_Deed_(TV_series)"
      },
      {
        title:"loudermilk",
        platform: "Amazon Prime Video",
        rating: 4,
        genre: "Comedy",
        review: "A comedy-drama series that follows a recovering alcoholic and substance abuse counselor as he navigates the challenges of sobriety and helping others.",
        image: "loudermilk.jpg",
        wiki: "https://en.wikipedia.org/wiki/Loudermilk"
      },
      {
        title:"friends from college",
        platform: "Netflix",
        rating: 4,
        genre: "Comedy",
        review: "A comedic series that follows a group of friends as they navigate the ups and downs of their relationships and careers in New York City.",
        image: "ffc.jpg",
        wiki: "https://en.wikipedia.org/wiki/Friends_from_College"
      },
      {
        title:"tiny beautiful things",
        platform: "Hulu",
        rating: 4,
        genre: "Drama",
        review: "A heartfelt series that explores the complexities of life, love, and loss through the lens of a young woman's experiences.",
        image: "tiny.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Tiny_Beautiful_Things_(TV_series)"
      },
      {
        title:"the shrink next door",
        platform: "Apple TV+",
        rating: 4,
        genre: "Comedy",
        review: "A dark comedy series that explores the relationship between a therapist and his patient, who becomes increasingly involved in his life.",
        image: "theshrinknextdoor.jpeg",
        wiki: "https://en.wikipedia.org/wiki/The_Shrink_Next_Door"

      },
      {
        title:"future man",
        platform: "Hulu",
        rating: 4,
        genre: "Comedy",
        review: "A sci-fi comedy series that follows a janitor who is recruited by a group of rebels to travel through time and save the world.",
        image: "futureman.jpg",
        wiki: "https://en.wikipedia.org/wiki/Future_Man"

      },
      {
      title:"the recruit",
      platform:"Netflix",
      rating:4,
      genre:"thriller",
      review:"A gripping thriller that follows a young CIA recruit as he navigates the dangerous world of espionage and betrayal.",
      image:"therecruit.jpeg",
      wiki:"https://en.wikipedia.org/wiki/The_Recruit_(TV_series)"
      },      
      {
        title:"the great",
        platform:"Prime Video",
        rating:5,
        genre:"Drama",
        review:"its a show about how caterine the great came to power in russia and how she was a great ruler.",
        image:"thegreat.jpg",
        wiki:"https://en.wikipedia.org/wiki/The_Great_(TV_series)"
      },
      {
        title:"game of thrones",
        platform:"HBO Max",
        rating:5,
        genre:"Fantasy",
        review:"An epic fantasy series based on the novels by George R.R. Martin, featuring noble families vying for control of the Iron Throne in the Seven Kingdoms.",
        image:"gameofthrones.jpg",
        wiki:"https://en.wikipedia.org/wiki/Game_of_Thrones"
      },
      {
        title:"resident alien",
        platform:"Syfy",
        rating:4,
        genre:"Comedy",
        review:"A comedy-drama series about an alien who crash-lands on Earth and takes on the identity of a small-town doctor while hiding from the government.",
        image:"ra.jpg",
        wiki:"https://en.wikipedia.org/wiki/Resident_Alien_(TV_series)"
      },
      {
        title:"we were liars",
        platform:"Netflix",
        rating: 4,
        genre: "Drama",
        review: "A suspenseful drama series that follows a group of wealthy friends whose lives are turned upside down by a tragic accident.",
        image: "wwl.jpeg",
        wiki: "https://en.wikipedia.org/wiki/We_Were_Liars"
      },
      {
        title:"the last of us",
        platform: "HBO Max",
        rating: 5,
        genre: "Drama",
        review: "Based on the video game, this series follows a smuggler tasked with transporting a young girl across a post-apocalyptic America.",
        image: "tlos.jpeg",
        wiki: "https://en.wikipedia.org/wiki/The_Last_of_Us_(TV_series)"
      },
      {
        title:"poker face",
        platform: "Peacock",
        rating: 4,
        genre: "Mystery",
        review: "A mystery series centered around a woman with an uncanny ability to detect lies, who becomes embroiled in a murder investigation.",
        image: "pokerface.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Poker_Face_(TV_series)"
      },
      {
        title:"alice in borderland",
        platform: "Netflix",
        rating: 4,
        genre: "Thriller",
        review: "A thrilling series about a group of people trapped in a mysterious game where they must compete in deadly challenges to survive.",
        image: "aib.jpg",
        wiki: "https://en.wikipedia.org/wiki/Alice_in_Borderland"
      },
      {
        title:"agatha all along",
        platform: "Hulu",
        rating: 4,
        genre: "Mystery",
        review: "A comedic mystery series that follows a group of friends who become amateur detectives to solve a murder in their small town.",
        image: "agatha.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Agatha_All_Along"
      },
      {
        title:"the studio",
        platform: "HBO Max",
        rating: 4,
        genre: "Drama",
        review: "A behind-the-scenes look at the making of a fictional television series, exploring the challenges and triumphs of the creative process.",
        image: "thestudio.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Studio"
      },
      {
        title:"man with a plan",
        platform: "CBS",
        rating: 4,
        genre: "Comedy",
        review: "A family sitcom about a contractor who becomes a stay-at-home dad and navigates the challenges of parenting.",
        image: "manwithaplan.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Man_with_a_Plan"
      },
      {
        title:"episodes",
        platform: "Showtime",
        rating: 4,
        genre: "Comedy",
        review: "A meta-comedy series that follows the making of a fictional television show, blending behind-the-scenes footage with the scripted narrative.",
        image: "episodes.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Episodes_(TV_series)"
      },
      {
        title:"30 rock",
        platform: "NBC",
        rating: 4,
        genre: "Comedy",
        review: "A satirical sitcom that takes a behind-the-scenes look at a fictional live sketch comedy show.",
        image: "30rock.jpeg",
        wiki: "https://en.wikipedia.org/wiki/30_Rock"
      },
      {
        title:"gravity falls",
        platform: "Disney Channel",
        rating: 5,
        genre: "Animation",
        review: "A clever animated series that follows the adventures of twin siblings spending the summer with their great-uncle in a mysterious town.",
        image: "gravityfalls.jpg",
        wiki: "https://en.wikipedia.org/wiki/Gravity_Falls"
      },
      {
        title:"love and death",
        platform: "HBO Max",
        rating: 4,
        genre: "Drama",
        review: "A true crime drama that explores the shocking murder of a suburban housewife and the media frenzy that follows.",
        image: "lod.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Love_and_Death_(miniseries)"
      },
      {
        title:"maniac",
        platform: "Netflix",
        rating: 4,
        genre: "Thriller",
        review: "A mind-bending thriller that follows two strangers who find themselves in a mysterious pharmaceutical trial.",
        image: "maniac.jpg",
        wiki: "https://en.wikipedia.org/wiki/Maniac_(miniseries)"
      },
      {
        title:"apple cider vinegar",
        platform: "Hulu",
        rating: 4,
        genre: "Comedy",
        review: "A lighthearted series that follows the misadventures of a group of friends who start a cider business in their small town.",
        image: "applecidervineger.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Apple_Cider_Vinegar_(TV_series)"
      },
      {
        title:"adults",
        platform: "HBO Max",
        rating: 4,
        genre: "Drama",
        review: "A darkly comedic series that follows a group of adults navigating the challenges of modern life.",
        image: "adults.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Adults_(TV_series)"
      },
      {
        title:"monsters:jeffrey dahmer",
        platform: "Netflix",
        rating: 4,
        genre: "Drama",
        review: "A chilling limited series that delves into the life and crimes of the infamous serial killer Jeffrey Dahmer.",
        image: "jeffreydahmar.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Dahmer_-_Monster:_The_Jeffrey_Dahmer_Story"
      },
      {
        title:"monsters:the menedez brothers ",
        platform: "Netflix",
        rating: 4,
        genre: "Drama",
        review: "A gripping limited series that explores the infamous case of the Menendez brothers, who were convicted of murdering their parents.",
        image: "menedezbrothers.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Menendez_Brothers"

      },
      {
        title:"hannah montana",
        platform: "Disney Channel",
        rating: 4,
        genre: "Comedy",
        review: "A teenage girl navigates the challenges of adolescence while secretly living a double life as a pop star.",
        image: "hannahmontana.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Hannah_Montana"
      },
      {
        title:"looking for alaska",
        platform: "Hulu",
        rating: 4,
        genre: "Drama",
        review: "Based on the novel by John Green, this series follows a group of friends at a boarding school as they navigate love, loss, and the search for meaning.",
        image: "lookingforalaska.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Looking_for_Alaska_(miniseries)"
      },
      {
        title:"tagged",
        platform: "Facebook Watch",
        rating: 4,
        genre: "Drama",
        review: "A gripping series that explores the complexities of modern relationships through the lens of social media.",
        image: "tagged.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Tagged_(TV_series)"
      },
      {
        title:"victorious",
        platform: "Nickelodeon",
        rating: 4,
        genre: "Comedy",
        review: "A group of students at a performing arts high school navigates the challenges of adolescence while pursuing their dreams.",
        image: "victorious.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Victorious"
      },
      {
        title:"the order",
        platform: "Netflix",
        rating: 4,
        genre: "Fantasy",
        review: "A secret society at a prestigious university is tasked with protecting the world from dark forces.",
        image: "theorder.jpeg",
        wiki: "https://en.wikipedia.org/wiki/The_Order_(TV_series)"
      },
      {
        title:"upload",
        platform: "Amazon Prime Video",
        rating: 4,
        genre: "Comedy",
        review: "In a future where technology allows people to upload their consciousness into a virtual afterlife, a young man must navigate the challenges of his new digital existence.",
        image: "upload.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Upload_(TV_series)"
      },
      {
        title:"ratched",
        platform: "Netflix",
        rating: 4,
        genre: "Drama",
        review: "A suspenseful series that follows a nurse as she becomes entangled in the dark side of the mental health care system.",
        image: "ratched.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Ratched_(TV_series)"
      },
      {
        title:"1899",
        platform: "Netflix",
        rating: 4,
        genre: "Mystery",
        review: "A group of European immigrants traveling to America on a ship encounter a series of mysterious events.",
        image: "1899.jpeg",
        wiki: "https://en.wikipedia.org/wiki/1899_(TV_series)"
      },
      {
        title:"the midnight club",
        platform: "Netflix",
        rating: 4,
        genre: "Horror",
        review: "A group of terminally ill teenagers at a hospice share scary stories with each other, leading to supernatural occurrences.",
        image: "tmc.jpeg",
        wiki: "https://en.wikipedia.org/wiki/The_Midnight_Club_(TV_series)"
      },
      {
        title:"two and a half men",
        platform: "CBS",
        rating: 4,
        genre: "Comedy",
        review: "A sitcom about a jingle writer, his brother, and his brother's son living together in Malibu.",
        image: "twoandahalfmen.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Two_and_a_Half_Men"
      },
      {
        title:"the peripheral",
        platform: "Amazon Prime Video",
        rating: 4,
        genre: "Sci-Fi",
        review: "Set in a future where technology has blurred the lines between reality and the digital world, a woman discovers a secret that could change everything.",
        image: "theperipheral.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Peripheral_(TV_series)"
      },
      {
        title:"bump",
        platform: "Stan",
        rating: 4,
        genre: "Comedy",
        review: "A teenage girl navigates the ups and downs of unexpected pregnancy while juggling school and relationships.",
        image: "bump.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Bump_(TV_series)"
      },
      {
        title:"class of '07",
        platform: "Stan",
        rating: 4,
        genre: "Comedy",
        review: "A group of high school friends reunite 15 years after graduation to navigate life, love, and the challenges of adulthood.",
        image: "classof07.jpg",
        wiki: "https://en.wikipedia.org/wiki/Class_of_%2707"
      },
      {
        title:"baby daddy",
        platform: "Freeform",
        rating: 4,
        genre: "Comedy",
        review: "A young man becomes a surprise dad when his ex-girlfriend leaves their baby with him.",
        image: "babydaddy.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Baby_Daddy"
      },
      {
        title:"love me",
        platform: "HBO Max",
        rating: 4,
        genre: "Romance",
        review: "A heartfelt series that explores the complexities of love and relationships in the modern world.",
        image: "loveme.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Love_Me_(TV_series)"
      },
      {
        title:"the power",
        platform: "Netflix",
        rating: 4,
        genre: "Drama",
        review: "A gripping series that explores the lives of women who discover they have the power to emit electric shocks.",
        image: "thepower.jpeg",
        wiki: "https://en.wikipedia.org/wiki/The_Power_(TV_series)"
      },
      {
        title:"chloe",
        platform: "BBC One",
        rating: 4,
        genre: "Drama",
        review: "A psychological thriller that follows a woman who becomes obsessed with a social media influencer.",
        image: "chloe.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Chloe_(TV_series)" 
      },
      {
        title:"fleabag",
        platform: "Amazon Prime Video",
        rating: 4,
        genre: "Comedy",
        review: "A witty and poignant series that follows a young woman navigating life and love in London.",
        image: "fleabag.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Fleabag_(TV_series)"
      },
      {
        title:"haven",
        platform: "Syfy",
        rating: 4,
        genre: "Drama",
        review: "A small town in Maine is home to a variety of supernatural occurrences, and a woman with a troubled past must confront her own demons.",
        image: "haven.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Haven_(TV_series)"
      },
      {
        title:"i zombie",
        platform: "The CW",
        rating: 4,
        genre: "Drama",
        review: "A medical student becomes a zombie and uses her new abilities to help solve crimes.",
        image: "izombie.jpeg",
        wiki: "https://en.wikipedia.org/wiki/iZombie"
      },
      {
        title:"sherlock",
        platform: "BBC One",
        rating: 4,
        genre: "Drama",
        review: "A modern update to the classic detective story, following Sherlock Holmes and Dr. John Watson as they solve crimes in contemporary London.",
        image: "sherlock.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Sherlock_(TV_series)"
      },
      {
        title:"around the world in 80 days",
        platform: "BBC One",
        rating: 4,
        genre: "Adventure",
        review: "A modern adaptation of Jules Verne's classic novel, following Phileas Fogg as he attempts to circumnavigate the globe in 80 days.",
        image: "aroundtheworldin80days.jpg",
        wiki: "https://en.wikipedia.org/wiki/Around_the_World_in_80_Days_(TV_series)"
      },
      {
        title:"glitch",
        platform: "Netflix",
        rating: 4,
        genre: "Sci-Fi",
        review: "A mind-bending series that explores the nature of reality and the impact of technology on human relationships.",
        image: "glitch.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Glitch_(TV_series)"
      },
      {
        title:"young and hungry",
        platform: "Freeform",
        rating: 4,
        genre: "Comedy",
        review: "A young woman navigates the challenges of life and love while trying to achieve her culinary dreams.",
        image: "youngandhungry.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Young_%26_Hungry"
      },
      {
        title:"manifest",
        platform: "NBC",
        rating: 4,
        genre: "Drama",
        review: "A group of passengers on a flight mysteriously reappear after being missing for five years, and their return has profound effects on their lives and the lives of their loved ones.",
        image: "manifest.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Manifest_(TV_series)"
      },
      {
        title:"tomorrow people",
        platform: "The CW",
        rating: 4,
        genre: "Sci-Fi",
        review: "A group of young people with special abilities must fight to protect themselves from those who would exploit them.",
        image: "tomorrowpeople.jpeg",
        wiki: "https://en.wikipedia.org/wiki/The_Tomorrow_People_(American_TV_series)"
      },
      {
        title:"legion",
        platform: "FX",
        rating: 4,
        genre: "Drama",
        review: "A visually stunning and psychologically complex series that follows a young man with extraordinary abilities as he navigates a dangerous world.",
        image: "legion.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Legion_(TV_series)"
      },
      {
        title:"my life with walter boys",
        platform: "Netflix",
        rating: 4,
        genre: "Drama",
        review: "A young girl navigates the challenges of adolescence while dealing with her family's complicated dynamics.",
        image: "mylifewithwalterboys.jpg",
        wiki: "https://en.wikipedia.org/wiki/My_Life_with_Walter_Boys"
      },
      {
        title:"i woke up a vampire",
      },
      {
        title:"the perfect couple",
        platform: "Netflix",
        rating: 4,
        genre: "Romance",
        review: "A romantic comedy that follows a couple as they navigate the ups and downs of their relationship.",
        image: "theperfectcouple.jpeg",
        wiki: "https://en.wikipedia.org/wiki/The_Perfect_Couple_(TV_series)"
      },
      {
        title:"the gentlemen",
        platform: "Starz",
        rating: 4,
        genre: "Action",
        review: "A modern take on the classic story of a group of friends who become embroiled in the world of organized crime.",
        image: "thegentlemen.jpeg",
        wiki: "https://en.wikipedia.org/wiki/The_Gentlemen_(film)"
      },
      {
        title:"uthopia",
        platform: "Amazon Prime Video",
        rating: 4,
        genre: "Drama",
        review: "A gripping tale of a group of people who find themselves in a dystopian world where their every move is monitored.",
        image: "uthopia.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Utopia_(American_TV_series)"
      },
      {
        title:"time bandits" ,
        platform: "Apple TV+",
        rating: 4,
        genre: "Adventure",
        review: "A group of time-traveling bandits embark on a quest to steal treasures from different eras.",
        image: "timebandits.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Time_Bandits"
      },
      {
        title:"orphan black: echoes",
        platform: "AMC",
        rating: 4,
        genre: "Sci-Fi",
        review: "A continuation of the groundbreaking series that explores the lives of clones and the ethical implications of their existence.",
        image: "obe.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Orphan_Black:_Echoes"
      },
      {
        title:"crazy ex-girlfriend",
        platform: "The CW",
        rating: 4,
        genre: "Comedy",
        review: "A musical comedy-drama that follows a young woman as she impulsively moves to California in pursuit of her high school boyfriend.",
        image: "crazyexgrilfriend.jpeg",
        wiki: "https://en.wikipedia.org/wiki/Crazy_Ex-Girlfriend"
      },
      {
        title:"freaks and geeks",
        platform: "NBC",
        rating: 4,
        genre: "Comedy",
        review: "A cult classic that beautifully captures the awkwardness of high school life.",
        image: "freaksandgeeks.jpg",
        wiki: "https://en.wikipedia.org/wiki/Freaks_and_Geeks"
      },
      {
        title:"house",
        platform: "Fox",
        rating: 5,
        genre: "Drama",
        review: "A brilliant but misanthropic doctor solves medical mysteries.",
        image: "house.jpg",
        wiki: "https://en.wikipedia.org/wiki/House_(TV_series)"
      },
      {
        title:"american crime story",
        platform: "FX",
        rating: 4,
        genre: "Drama",
        review: "An anthology series that explores some of America's most notorious crimes.",
        image: "acs.jpg",
        wiki: "https://en.wikipedia.org/wiki/American_Crime_Story"
      },
      {
        title:"the alienist",
        platform: "TNT",
        rating: 4,
        genre: "Drama",
        review: "A psychological thriller set in the late 19th century that follows a team of experts as they investigate a series of gruesome murders.",
        image: "thealienist.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Alienist_(TV_series)"
      },
      { 
        title:"miracle workers",
        platform: "TBS",
        rating: 4,
        genre: "Comedy",
        review: "An anthology comedy series that takes a look at the various absurdities of life.",
        image: "miracleworkers.jpg",
        wiki: "https://en.wikipedia.org/wiki/Miracle_Workers"
      },
      {
        title:"your friends and neighbors",
        platform: "Hulu",
        rating: 4,
        genre: "Comedy",
        review: "A satirical look at the lives of two couples living in the same apartment complex.",
        image: "yfan.jpg",
        wiki: "https://en.wikipedia.org/wiki/Your_Friends_and_Neighbors"
      },
      {
        title:"the buccaneers",
        platform: "Apple TV+",
        rating: 4,
        genre: "Drama",
        review: "A period drama that follows a group of young women in 19th-century New York as they navigate society and their own ambitions.",
        image: "thebuccaneers.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Buccaneers_(miniseries)"
      },
      {
        title:"fallout",
        platform: "Amazon Prime Video",
        rating: 4,
        genre: "Sci-Fi",
        review: "A post-apocalyptic series based on the popular video game franchise.",
        image: "fallout.jpg",
        wiki: "https://en.wikipedia.org/wiki/Fallout_(TV_series)"
      },
      {
        title:"a good girls guide to murder",
        platform: "Netflix",
        rating: 4,
        genre: "Mystery",
        review: "A gripping mystery series that follows a high school student as she investigates a murder case.",
        image:"agg.jpg",
        wiki:"https://en.wikipedia.org/wiki/A_Good_Girl%27s_Guide_to_Murder_(TV_series)"
      },
      {
        title:"the waterfront",
        platform: "HBO",
        rating: 4,
        genre: "Drama",
        review: "A gripping drama series that explores the lives of residents in a struggling waterfront community.",
        image: "thewaterfront.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Waterfront"
      },
      {
        title:"overcompensating",
        platform: "HBO",
        rating: 4,
        genre: "Comedy",
        review: "A humorous take on the challenges of modern parenting.",
        image: "overcompensating.jpg",
        wiki: "https://en.wikipedia.org/wiki/Overcompensating"
      },
      {
        title:"girls",
        platform: "HBO",
        rating: 4,
        genre: "Comedy",
        review: "A fresh and honest look at the lives of a group of young women in New York City.",
        image: "girls.jpg",
        wiki: "https://en.wikipedia.org/wiki/Girls_(TV_series)"
      },
      {
        title:"barry",
        platform: "HBO",
        rating: 4,
        genre: "Comedy",
        review: "A darkly comedic look at a hitman who discovers a passion for acting.",
        image: "barry.jpg",
        wiki: "https://en.wikipedia.org/wiki/Barry_(TV_series)"
      },
      {
        title:"the following",
        platform: "Fox",
        rating: 4,
        genre: "Drama",
        review: "A gripping drama series that follows a group of friends as they navigate the complexities of life and relationships.",
        image: "thefollowing.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Following"
      },
      {
        title:"interview with the vampire",
        platform: "AMC",
        rating: 4,
        genre: "Drama",
        review: "A modern adaptation of Anne Rice's iconic novel, exploring the life of the vampire Louis de Pointe du Lac.",
        image: "iwtv.jpg",
        wiki: "https://en.wikipedia.org/wiki/Interview_with_the_Vampire_(TV_series)"
      },
      {
        title:"sweetpea",
        platform: "Netflix",
        rating: 4,
        genre: "Drama",
        review: "A poignant coming-of-age story about a young girl navigating the challenges of adolescence.",
        image: "sweetpea.jpg",
        wiki: "https://en.wikipedia.org/wiki/Sweetpea"
      },
      {
        title:"baby reindeer",
        platform: "Hulu",
        rating: 4,
        genre: "Comedy",
        review: "A darkly comedic look at a hitman who discovers a passion for acting.",
        image: "babyreindeer.jpg",
        wiki: "https://en.wikipedia.org/wiki/Baby_Reindeer"
      },
      {
        title:"ted",
        platform: "Apple TV+",
        rating: 4,
        genre: "Comedy",
        review: "A hilarious series that follows the adventures of a talking teddy bear.",
        image: "ted.jpg",
        wiki: "https://en.wikipedia.org/wiki/Ted_(TV_series)"
      },
      // Add more shows here
    ];

    const uniqueShows = [];
const titles = new Set();
for (const show of shows) {
  if (show.title && !titles.has(show.title.toLowerCase())) {
    uniqueShows.push(show);
    titles.add(show.title.toLowerCase());
  }
}
console.log(uniqueShows);

    const showGrid = document.getElementById('showGrid');
    const searchBar = document.getElementById('searchBar');
    const genreFilter = document.getElementById('genreFilter');
    const platformFilter = document.getElementById('platformFilter');

    function displayShows() {
      showGrid.innerHTML = '';
      const search = searchBar.value.toLowerCase();
      const genre = genreFilter.value;
      const platform = platformFilter.value;

      const filtered = shows.filter(show => {
        const matchesSearch = show.title.toLowerCase().includes(search);
        const matchesGenre = genre === '' || show.genre === genre;
        const matchesPlatform = platform === '' || show.platform === platform;
        return matchesSearch && matchesGenre && matchesPlatform;
      });

      for (const show of filtered) {
        const card = document.createElement('div');
        card.className = 'card';
  card.innerHTML = `
    <a href="${show.wiki}" target="_blank" rel="noopener noreferrer">
      <img class="poster" src="${show.image}" alt="${show.title} poster">
    </a>
    <div class="title">${show.title}</div>
    <div class="platform">${show.platform}</div>
    <div class="rating">${'⭐'.repeat(show.rating)}</div>
    <div class="review">${show.review}</div>
  `;
  showGrid.appendChild(card);
}
    }

    searchBar.addEventListener('input', displayShows);
    genreFilter.addEventListener('change', displayShows);
    platformFilter.addEventListener('change', displayShows);

    displayShows();
    window.addEventListener('load', () => {
  document.querySelectorAll('.card').forEach((card, i) => {
    card.style.animation = `bounceIn 0.6s ease ${i * 0.05}s both`;
  });
});

const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.9); }
  60% { opacity: 1; transform: scale(1.05); }
  100% { transform: scale(1); }
}`;
document.head.appendChild(styleSheet);
const seen = new Set();
const duplicates = new Set();
shows.forEach(show => {
  if (show.title) {
    const t = show.title.toLowerCase();
    if (seen.has(t)) {
      duplicates.add(show.title);
    } else {
      seen.add(t);
    }
  }
});
console.log([...duplicates]);

