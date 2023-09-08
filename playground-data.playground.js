use("world_events");

db.getCollection("events_categories").insertMany([
  {
    "id":"london",
    "title":"Events in London",
    "description":"London oh London, home of Doctor Who, The Beetles famous crossing of Abby Road, the OG Top Gear. Click the photo for events",
    "image":"https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    "id":"san-francisco",
    "title":"Events in San Francisco",
    "description":"Beautiful San Francisco, home to the painted ladies, Alcatraz, MythBusters, and silicon valley. Click the photo for events",
    "image":"https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
    "id":"barcelona",
    "title":"Events in Barcelona",
    "description":"Braca or Barcelona, is a beautiful coastal metro city on the northeastern coast of spain. Home to futbul club Barcelona of La Liga, beautiful beaches ceviche and amazing nightlife. Click the photo for events in barcelona",
    "image":"https://images.unsplash.com/photo-1579282240050-352db0a14c21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
  },
  {
    "id": "anime-conventions",
    "title": "Anime Conventions In The US and  the world",
    "description": "Anime conventions from all over the US and the World. Spanning from: kpop, jpop, Cosplay, Anime voice actors both sub and dub. Possible First views of new series's and much more.",
    "image": "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  }
])


 
db.getCollection("allEvents").insertMany([
  {
    "id":"london-comic-con-winter",
    "title":"London Comic Con Winter",
    "city":"london",
    "description":"London Comic Con Winter is coming to Olympia over the weekend of 11-12 November 2023. We will be bringing you the Stars of Film & TV for you to meet, get their autographs & have your photo taken with them! All this will be taking place at the historic Olympia London.",
    "image":"https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    "id":"hyde-park-winter-wonderland",
    "title":"Hyde Park Winter Wonderland",
    "city":"london",
    "description":"Located in London’s iconic Hyde Park, Winter Wonderland is the world’s ultimate destination for festive fun. Running for six magical weeks from 17th November 2023 to 1st January 2024, Hyde Park Winter Wonderland offers a variety of attractions, activities, entertainment, food, drinks, and so much more.",
    "image":"https://hydeparkwinterwonderland.com/static/252d7fe6693a6a8b1887bd2049204103/039f7/2021-503x503-3.webp",
  },
  {
    "id":"new-years-eve-in-london-2023",
    "title":"New Years Eve in London 2023 ",
    "city":"london",
    "description":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscisfa.",
    "image":"https://images.unsplash.com/photo-1521478413868-1bbd982fa4a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","emails_registered":[]},
  {
    "id":"'edtech-world-summit-2023",
    "title":"EdTech World Summit 2023",
    "city":"london",
    "description":"The leading education technology conference for elearning. Held in London UK. Distribution channels: Book Publishing Industry, Business & Economy, Companies, Conferences & Trade Fairs, Education, Environment, IT Industry, Science, Social Media, and Tech",
    "image":"https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","emails_registered":[]},
  {
    "id":"sigala-at-electric-brixton",
    "title":"Sigala at Electric Brixton",
    "city":"london",
    "description":"Singala,  a british based artist, producer and DJ Tour Stop.",
    "image":"https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","emails_registered":[]
  },
  {
    "id":"kiss-haunted-house-party-2023",
    "title":"KISS Haunted House Party 2023",
    "city":"london",
    "description":"KISS' 2022 haloween event with all your favorite acts performing live at one London's most iconic venues , OVO Arena.",
    "image":"https://wembleypark.com/media/images/KISS-HHP-42-1440x810-Logos-Date-de.2e16d0ba.fill-496x279.jpg",
    "emails_registered":[]
  },
  {
    "id":"sf-blockchain-week",
    "title":"SF Blockchain Week",
    "city":"san-francisco",
    "description":".SF Blockchain Week is where blockchain startups, enterprise companies, academics, developers, and investors from around the world come together to define the future of blockchain and cryptocurrencies.",
    "image":"https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    "emails_registered":[]
  },
  {
    "id":"innovation-summit-san-francisco",
    "title":"Innovation Summit San Francisco",
    "city":"san-francisco","description":"This conference offers a brounder and deeper take onthe issues and concerns driving the medical device industry today.",
    "image":"https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "emails_registered":[]
  },
  {
    "id":"fan-expo-san-francisco",
    "title":"FAN EXPO San Francisco",
    "city":"san-francisco",
    "description":"Experience the ultimate playground fro comics, anime, sci-fi, horror, and gaming. Three big days of of citywide family friendly events and world-renowned celebs all in one place.",
    "image":"https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "emails_registered":[]
  },
  {
    "id":"san-francisco-opera---san-francisco-tickets",
    "title":"San Francisco Opera - San Francisco Tickets",
    "city":"san-francisco",
    "description":"The San Francisco opera is one of the most renowned opera companies in the world. Founded in 1923, it has been a major part of cultural life of San Francisco for nearly a century.",
    "image":"https://images.unsplash.com/photo-1580809361436-42a7ec204889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "emails_registered":[]
  },
  {
    "id":"concert-christian-löffler-+-detect-ensemble",
    "title":"Concert Christian Löffler + Detect Ensemble",
    "city":"barcelona",
    "description":"Christian Loffler & Detect Ensemble bring a experimental tribute that lives somewhere between downtempo electronics and chamber music.",
    "image":"https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "emails_registered":[]
  },
  {
    "id":"the-halloween-house-party",
    "title":"The Halloween House Party",
    "city":"barcelona",
    "description":"A variety of events in Barcelona from nightlife to celebrations.",
    "image":"https://images.unsplash.com/photo-1587407627257-27b7127c868c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "emails_registered":[]
  },
  {
    "id":"international-conference-on-industrial-design",
    "title":"International Conference on Industrial Design",
    "city":"barcelona",
    "description":"A international conference on Industrial Design and tech. Hosted by the Barcelona School of Design and Engineering.",
    "image":"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "emails_registered":[]
  },
  {
    "id":"world-congress-2022---barcelona",
    "title":"World Congress 2022 - Barcelona",
    "city":"barcelona",
    "description":"Join the mobile technology ecosystem and influential connectivity event in the world, hosted by GSMA.",
    "image":"https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "emails_registered":[]
  },
  {
    "id":"riskminds-international",
    "title":"RiskMinds International",
    "city":"barcelona",
    "description":"Join 850+ of the world's most influential CROs senior risk managers, regulatory exports and renowned academics to examine the latest opportunities, challenges and projections for 2023 and beyond.",
    "image":"https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "emails_registered":[]
  },
  {
        "id": "anime-banzai",
        "eventCategory": "us-conventions",
        "title": "Anime Banzai",
        "city": "Layton",
        "description": "Utah's largest anime convention. We are non-profit convention focusing on Asian culture and we are all inclusive. Check out our Cosplay contest, AMV Contest, Panels, and more! Come join us and have fun! ",
        "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
   },
   {
        "id": "sakura-con",
        "eventCategory": "us-conventions",
        "title": "Sakura Con",
        "city": "Seattle",
        "description": "Presented by the Asia Northwest Cultural Education Association, Sakura-Con is the oldest and most well attended anime convention in the Pacific Northwest. Please join us for Sakura-Con 2020 where all of the excellent programming you’ve come to expect will be back in abundance. Anime theaters, gaming, cosplay, cultural panels, dances, concerts, art contests, AMV’s, industry guests, over 100,000 square feet of exhibits hall, guests of honor, and more! Pre-Register as a member now and save substantially versus at door prices. Remember that pre-registration helps ANCEA, a state and federal non-profit organization, put on the best Sakura-Con possible! As a member only event, we all work together to keep our event “by fans, for fans.” There are no additional fees for programming once you are at Sakura-Con, including for autographs, concerts, theaters, gaming, etc.",
        "image": "https://pbs.twimg.com/profile_images/1551643533785722880/nx59w7In_400x400.jpg"
   },
   {
        "id": "anime-matsuri",
        "eventCategory": "us-conventions",
        "title": "Anime Matsuri",
        "city": "Houston",
        "description": "Anime and Japanese Pop Culture, Cosplay, Art, Exhibitors, Live Concerts, Kpop, Jpop, Jrock, Idols, Manga, Exhibitions, Panels, Video Games, Sumo, and so much more",
        "image": "https://media.animecons.com/ConLogo/logo_C21376.png"
   },
   {
        "id": "otakuthon",
        "eventCategory": "world-conventions",
        "title": "Otakuthon",
        "city": "Montreal",
        "description": "Otakuthon is an event that celebrates the cultural phenomenon known as anime (Japanese animation) and manga. Since 2008, the event has been held every summer at the Palais des congrès.",
        "image": "https://media.animecons.com/ConLogo/logo_C21034.png"
   },
   {
        "id": "ax-anime-expo",
        "eventCategory": "us-conventions",
        "title": "AX Anime Expo",
        "city": "Los Angelos",
        "description": "There are a lot of small and large anime events held all across the world. What is the largest-scale anime event except Japan is Anime Expo, also known as AX, in America. The U.S. enormous anime convention is annually held at Los Angeles Convention Center in California for four days in the beginning of July. Anime Expo has attracted an audience of over 100,000.",
        "image": "https://jw-webmagazine.com/wp-content/uploads/2022/07/Anime-Expo-1536x941.jpg"
   },
   {
        "id": "anime-japan",
        "eventCategory": "world-conventions",
        "title": "Anime Japan",
        "city": "Tokyo",
        "description": "2023.1.30[Mon]AnimeJapan 2023, one of the world's largest anime events is coming back for another in person edition! 2023.1.30[Mon]Tickets Now on sale!!",
        "image": "https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lJTIwY29udmVudGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
   }
])

