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
    "title": "Anime Conventions In The US",
    "description": "Anime conventions from all over the US and the World. Spanning from: kpop, jpop, Cosplay, Anime voice actors both sub and dub. Possible First views of new series's and much more.",
    "image": "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  }
])


 
db.getCollection("allEvents").insertMany([
  {
    "id":"london-comic-con-winter",
    "title":"London Comic Con Winter",
    "city":"London",
    "description":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscisfa.",
    "image":"https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "emails_registered":[]
  },
  {
    "id":"hyde-park-winter-wonderland",
    "title":"Hyde Park Winter Wonderland",
    "city":"London",
    "description":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscisfa.",
    "image":"https://hydeparkwinterwonderland.com/static/252d7fe6693a6a8b1887bd2049204103/039f7/2021-503x503-3.webp",
    "emails_registered":[]
  },
  {
    "id":"new-years-eve-in-london-2023",
    "title":"New Years Eve in London 2023 ",
    "city":"London",
    "description":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscisfa.",
    "image":"https://images.unsplash.com/photo-1521478413868-1bbd982fa4a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","emails_registered":[]},
  {
    "id":"'edtech-world-summit-2023",
    "title":"EdTech World Summit 2023",
    "city":"london",
    "description":"The leading education technolgy conference for elearning. Held in London UK. Distibution channels: Book Publishing Industry, Business & Economy, Companies, Conferences & Trade Fairs, Education, Enviroment, IT Industry, Science, Social Media, and Tech",
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
    "city":"san-francisco","description":"This conference offers a brounder and deeper take onthe issues and concerns driving the medical device indaustry today.",
    "image":"https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "emails_registered":[]
  },
  {
    "id":"fan-expo-san-francisco",
    "title":"FAN EXPO San Francisco",
    "city":"san-francisco",
    "description":"Experience the ultimate playground fro comics, anime, sci-fi, horror, and gaming. Three big days of of citywide family friendly events and world-renowed celebs all in one place.",
    "image":"https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "emails_registered":[]
  },
  {
    "id":"san-francisco-opera---san-francisco-tickets",
    "title":"San Francisco Opera - San Francisco Tickets",
    "city":"san-francisco",
    "description":"The San Francisco oprea is one of the most renowed oprea companes in the world. Founded in 1923, it has been a major part of cultural life of San Francisco for nearly a century.",
    "image":"https://images.unsplash.com/photo-1580809361436-42a7ec204889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "emails_registered":[]
  },
  {
    "id":"concert-christian-löffler-+-detect-ensemble",
    "title":"Concert Christian Löffler + Detect Ensemble",
    "city":"barcelona",
    "description":"Christian Loffler & Dectect Ensemable bring a experimental tribute that lives somehwere between downtempo electronics and chamber music.",
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
    "description":"Join the mobile technolgy ecosystem and influential conectivity event in the world, hosted by GSMA.",
    "image":"https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "emails_registered":[]
  },
  {
    "id":"riskminds-international",
    "title":"RiskMinds International",
    "city":"barcelona",
    "description":"Join 850+ of the world's most influential CROs senior risk managers, reglatory exports and renoweed academics to examine the latest oppurtunities, challenges and projections for 2023 and beyond.",
    "image":"https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "emails_registered":[]
  }
])

