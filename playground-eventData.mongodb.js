use('anime_events');

db.getCollection('events').insertMany([
   {
        "id": "anime-banzai",
        "eventCategory": "US",
        "title": "Anime Banzai",
        "city": "Layton",
        "description": "Utah's largest anime convention. We are non-profit convention focusing on Asian culture and we are all inclusive. Check out our Cosplay contest, AMV Contest, Panels, and more! Come join us and have fun! ",
        "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
   },
   {
        "id": "sakura-con",
        "eventCategory": "US",
        "title": "Sakura Con",
        "city": "Seattle",
        "description": "Presented by the Asia Northwest Cultural Education Association, Sakura-Con is the oldest and most well attended anime convention in the Pacific Northwest. Please join us for Sakura-Con 2020 where all of the excellent programming you’ve come to expect will be back in abundance. Anime theaters, gaming, cosplay, cultural panels, dances, concerts, art contests, AMV’s, industry guests, over 100,000 square feet of exhibits hall, guests of honor, and more! Pre-Register as a member now and save substantially versus at door prices. Remember that pre-registration helps ANCEA, a state and federal non-profit organization, put on the best Sakura-Con possible! As a member only event, we all work together to keep our event “by fans, for fans.” There are no additional fees for programming once you are at Sakura-Con, including for autographs, concerts, theaters, gaming, etc.",
        "image": "https://pbs.twimg.com/profile_images/1551643533785722880/nx59w7In_400x400.jpg"
   },
   {
        "id": "anime-matsuri",
        "eventCategory": "US",
        "title": "Anime Matsuri",
        "city": "Houston",
        "description": "Anime and Japanese Pop Culture, Cosplay, Art, Exhibitors, Live Concerts, Kpop, Jpop, Jrock, Idols, Manga, Exhibitions, Panels, Video Games, Sumo, and so much more",
        "image": "https://media.animecons.com/ConLogo/logo_C21376.png"
   },
   {
        "id": "otakuthon",
        "eventCategory": "World",
        "title": "Otakuthon",
        "city": "Montreal",
        "description": "Otakuthon is an event that celebrates the cultural phenomenon known as anime (Japanese animation) and manga. Since 2008, the event has been held every summer at the Palais des congrès.",
        "image": "https://media.animecons.com/ConLogo/logo_C21034.png"
   },
   {
        "id": "ax-anime-expo",
        "eventCategory": "US",
        "title": "AX Anime Expo",
        "city": "Los Angelos",
        "description": "There are a lot of small and large anime events held all across the world. What is the largest-scale anime event except Japan is Anime Expo, also known as AX, in America. The U.S. enormous anime convention is annually held at Los Angeles Convention Center in California for four days in the beginning of July. Anime Expo has attracted an audience of over 100,000.",
        "image": "https://jw-webmagazine.com/wp-content/uploads/2022/07/Anime-Expo-1536x941.jpg"
   },
   {
        "id": "anime-japan",
        "eventCategory": "World",
        "title": "Anime Japan",
        "city": "Tokyo",
        "desciption": "2023.1.30[Mon]AnimeJapan 2023, one of the world's largest anime events is coming back for another in person edition! 2023.1.30[Mon]Tickets Now on sale!!",
        "image": "https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lJTIwY29udmVudGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"  
   }
])
