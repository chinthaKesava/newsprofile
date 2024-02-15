import {Component} from 'react'

import EachCard  from '../EachCard'


const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'INPROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
  }

class BookMark extends Component{
    state={postsList:[],apiStatus: apiStatusConstants.initial,}

    componentDidMount(){
        this.getContentLine()
    }

    getContentLine=async()=>{
        this.setState({apiStatus: apiStatusConstants.inProgress})
        const updatedList=[
          {
              "id": "bf359abd-3c87-4ad4-8a09-59a2464343eb",
              "content": "Ignore your fitness tracker and walk to Mordor instead\r\nIgnore your fitness tracker and walk to Mordor instead\r\n / Sometimes low-stakes fun is just the thing you need to walk your way out of a fitnes… [+4500 chars]",
              "description": "While fitness trackers try to motivate you through data, Fantasy Hike is a fun walking app that pits you against Frodo in walking to Mordor.",
              "url": "https://cdn.vox-cdn.com/thumbor/oDKRLdy-MsmW7jk7LdudwLP9KrA=/0x0:4080x2720/1200x628/filters:focal(2040x1360:2041x1361)/cdn.vox-cdn.com/uploads/chorus_asset/file/25281455/fantasyhike.jpg",
              "publishedAt": "2024-02-13T15:00:00Z"
          },
          {
              "id": "390da739-0bcb-4c27-a082-948225ab2631",
              "content": "I had just 30 minutes to test out Apples $3,500 Vision Pro headset. Others who received a review unit from Apple or purchased one themselves have spent a week or more with it by this point. Weve seen… [+5964 chars]",
              "description": "I had just 30 minutes to test out Apple’s $3,500 Vision Pro headset. Others who received a review unit from Apple or purchased one themselves have spent a week or more with it by this point. We’ve seen a lot of interesting use cases for the headset and an equ…",
              "url": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1034eb31d614bc16612dd822b9c87068.jpg",
              "publishedAt": "2024-02-13T13:00:00Z"
          },
          {
              "id": "b0e1b076-ebf9-4e89-8c64-59c5c0c8e90a",
              "content": "16\r\nOn Monday, Nvidia CEO Jensen Huang said that every country should control its own AI infrastructure so it can protect its culture, Reuters reports. He called this concept \"Sovereign AI,\" which an… [+2829 chars]",
              "description": "Driven by AI boom, the two companies are neck-and-neck behind Apple, Microsoft, and Google.",
              "url": "https://cdn.arstechnica.net/wp-content/uploads/2024/02/nvidia_flag_2-760x380.jpg",
              "publishedAt": "2024-02-13T16:41:06Z"
          },
          {
              "id": "009f7e90-6afd-49a8-a99a-c230c1e1f30f",
              "content": "9\r\nApple's iMessage service is not a \"gatekeeper\" prone to unfair business practices and will thus not be required under the Fair Markets Act to open up to messages, files, and video calls from other… [+3556 chars]",
              "description": "Microsoft's Edge browser, Bing search, and ad business also avoid regulations.",
              "url": "https://cdn.arstechnica.net/wp-content/uploads/2024/02/GettyImages-1831276105-760x380.jpg",
              "publishedAt": "2024-02-13T19:06:04Z"
          },
          {
              "id": "d0436ea9-525b-4a81-9f2f-9f20a32aa607",
              "content": "<ul><li>The European Commissions concluded its investigation into Apple's iMessage, stating it will not fall within a \"core platform service\" under the Digital Markets Act.</li><li>It was previously … [+2982 chars]",
              "description": "Following the EU's investigation, it will not force Apple to open up iMessage for better interoperability.",
              "url": "https://cdn.mos.cms.futurecdn.net/GB5TtmLRcpbMih8aXYemjj-1200-80.jpg",
              "publishedAt": "2024-02-13T20:53:44Z"
          },
          {
              "id": "df4e7c54-8fbd-4352-ad74-69091e907fcc",
              "content": "Running watches have gotten more feature-packed and expensive in recent years, especially as more fitness brands switch away from battery-saving memory-in-pixel (MIP) displays to vivid AMOLEDs. For l… [+16346 chars]",
              "description": "These two excellent, budget-minded running watches are for serious endurance athletes who prioritize battery life, GPS accuracy, and low prices over colorful displays. They're both compelling, so we'll help you choose one.",
              "url": "https://cdn.mos.cms.futurecdn.net/TmQdLF2UZ6JnZ3dn7e4ggf-1200-80.jpeg",
              "publishedAt": "2024-02-13T06:54:51Z"
          },
          {
              "id": "e18ab89a-cbe4-423a-afca-2d59fe447865",
              "content": "Best Buy recently opened up a new Apple Watch sale, and in it you can get the 41mm GPS Apple Watch Series 9 for $309.00 in all aluminum colors, down from $399.00. These deals will only last for the r… [+1895 chars]",
              "description": "Best Buy recently opened up a new Apple Watch sale, and in it you can get the 41mm GPS Apple Watch Series 9 for $309.00 in all aluminum colors, down from $399.00. These deals will only last for the remainder of today, so if you've been waiting for great Apple…",
              "url": "https://images.macrumors.com/t/71MTaUIbR_6RAykvIDgH9jxOeHE=/2500x/article-new/2024/01/apple-watch-purple.jpg",
              "publishedAt": "2024-02-13T15:18:30Z"
          },
          {
              "id": "20262e9d-fa8a-4591-8a90-c5f1bdcf0e82",
              "content": "Following the launch of the Vision Pro, Apple has shared a new document outlining various privacy and security measures for the headset.\r\nAn overview of some of the Vision Pro's privacy policies, acc… [+1114 chars]",
              "description": "Following the launch of the Vision Pro, Apple has shared a new document outlining various privacy and security measures for the headset.\n\n\n\n\n\nAn overview of some of the Vision Pro's privacy policies, according to Apple:<ul><li>Where you look before you intera…",
              "url": "https://images.macrumors.com/t/kSou7sPBGckHYU0aJsDvf0UuEqc=/2500x/article-new/2024/02/visionOS-Privacy-Feature.jpg",
              "publishedAt": "2024-02-13T15:48:07Z"
          },
          {
              "id": "d877da90-41ae-454c-876e-25b406f7ddca",
              "content": "There are more than 1,000 apps available for the Vision Pro, Apple marketing chief Greg Joswiak said today. There are also more than 1.5 million iPad apps that are compatible with the Vision Pro and … [+551 chars]",
              "description": "There are more than 1,000 apps available for the Vision Pro, Apple marketing chief Greg Joswiak said today. There are also more than 1.5 million iPad apps that are compatible with the Vision Pro and that are able to run on the device.\n\n\n\n\n\nWhen the Vision Pro…",
              "url": "https://images.macrumors.com/t/AZUOzTC3qKcbYYS-C9mdPPKPbAE=/1960x/article-new/2024/01/Apple-Vision-Pro-Dual-Loop-Band-Orange-Feature-2.jpg",
              "publishedAt": "2024-02-13T23:09:12Z"
          },
          {
              "id": "f8b75056-e131-468b-8936-5b4c460f857c",
              "content": "The tvOS 17.4 beta that was released today contains code that references a future HomePod with a display, according to 9to5Mac. The site claims that there is evidence of a device with a \"Z314\" identi… [+1634 chars]",
              "description": "The tvOS 17.4 beta that was released today contains code that references a future HomePod with a display, according to 9to5Mac. The site claims that there is evidence of a device with a \"Z314\" identifier with an A15 chip inside, with both production and \"inte…",
              "url": "https://images.macrumors.com/t/fTLODf8MmxqpWkKXStaJni6QOLY=/2500x/article-new/2023/05/homepod-blue-green.jpg",
              "publishedAt": "2024-02-13T21:47:56Z"
          },
          {
              "id": "ccf141ea-e84b-4b33-8dcb-d3daa3b9b09e",
              "content": "Starting with iOS 17.3 and iPadOS 17.3, you can wirelessly stream content from your iPhone or iPad to a compatible hotel room TV via AirPlay, and we have now learned that the feature should begin rol… [+1923 chars]",
              "description": "Starting with iOS 17.3 and iPadOS 17.3, you can wirelessly stream content from your iPhone or iPad to a compatible hotel room TV via AirPlay, and we have now learned that the feature should begin rolling out at hotels over the coming months.\n\n\n\n\n\nA spokespers…",
              "url": "https://images.macrumors.com/t/fVRCWVcFNkrRbhULV7TKIMnhXIY=/1600x/article-new/2024/02/AirPlay-Hotel-Room-TV.jpg",
              "publishedAt": "2024-02-13T20:50:16Z"
          },
          {
              "id": "df022a3d-0595-4991-b167-83e755fa015f",
              "content": "Nvidia surpassed Amazon to become the fourth most valuable company in America and the fifth most valuable company in the world on Tuesday.\r\nThe milestone was briefly reached during Monday's trading s… [+1860 chars]",
              "description": "Nvidia stock has gotten cheaper based on popular valuation metrics, even as its stock price soared from about $200 last year to $732 today.",
              "url": "https://i.insider.com/654080210487ff031cb2b126?width=1200&format=jpeg",
              "publishedAt": "2024-02-13T17:01:47Z"
          },
          {
              "id": "789919b6-20d7-4374-9de5-a9f0f2a0f5d8",
              "content": "Apple today released the second beta of an upcoming visionOS 1.1 update for developers, allowing them to test new features ahead of the software seeing a public launch. The second beta comes a week a… [+1141 chars]",
              "description": "Apple today released the second beta of an upcoming visionOS 1.1 update for developers, allowing them to test new features ahead of the software seeing a public launch. The second beta comes a week after the release of the first beta.\n\n\n\n\n\nThe ‌visionOS‌ beta…",
              "url": "https://images.macrumors.com/t/BO4kPTSqY2ytaxPGR56Os77ZBdM=/1920x/article-new/2024/02/visionOS-Home-Screen.jpg",
              "publishedAt": "2024-02-13T18:18:53Z"
          },
          {
              "id": "62fdfbb0-6a0f-4b9e-bfa3-2785fd3fb4db",
              "content": "Apple today seeded the third beta of an upcoming tvOS 17.4 update to developers for testing purposes, with the beta coming one week after the release of the second tvOS 17.4 beta.\r\nRegistered develop… [+789 chars]",
              "description": "Apple today seeded the third beta of an upcoming tvOS 17.4 update to developers for testing purposes, with the beta coming one week after the release of the second tvOS 17.4 beta.\n\n\n\n\n\nRegistered developers are able to download the tvOS 17.4 update by opting …",
              "url": "https://images.macrumors.com/t/E_urDANwhe0J--lgmnYT6INo_ow=/2500x/article-new/2022/07/apple-tv-4k-green.jpg",
              "publishedAt": "2024-02-13T18:03:00Z"
          },
          {
              "id": "c3c96214-0799-4153-87d3-ba9f2b912ecd",
              "content": "Apple today seeded the third beta of an upcoming watchOS 10.4 update to developers for testing purposes, with the beta coming a week after the release of the second watchOS 10.4 beta.\r\nTo install the… [+795 chars]",
              "description": "Apple today seeded the third beta of an upcoming watchOS 10.4 update to developers for testing purposes, with the beta coming a week after the release of the second watchOS 10.4 beta.\n\n\n\n\n\nTo install the ‌watchOS 10.4‌ update, developers need to open the Appl…",
              "url": "https://images.macrumors.com/t/T9LvCyX5TC3cEOOFDRFgVrtLZTs=/1920x/article-new/2023/06/Apple-Watch-Faces-watchOS-10-Feature-Blue.jpg",
              "publishedAt": "2024-02-13T18:04:00Z"
          },
          {
              "id": "ad3eb652-aa68-4037-8e1f-3f52cce9ff0e",
              "content": "Amazon Prime Video content no longer includes Dolby Vision HDR or Dolby Atmos surround sound on its ads-supported tier, which is included in all Amazon Prime memberships.\r\nThe news was first reported… [+1216 chars]",
              "description": "Amazon Prime Video content no longer includes Dolby Vision HDR or Dolby Atmos surround sound on its ads-supported tier, which is included in all Amazon Prime memberships.\n\n\n\n\n\nThe news was first reported by German website 4KFilme and picked up by The Verge. I…",
              "url": "https://images.macrumors.com/t/0ek6BOAYjVmKXUEqBCryb1ua6hw=/1600x/article-new/2023/12/prime-video-logo.jpg",
              "publishedAt": "2024-02-13T11:23:37Z"
          },
          {
              "id": "1488141c-e465-457a-92b3-0926a21dc0e5",
              "content": "Apple's iMessage will avoid regulation under the EU's Digital Markets Act (DMA), following the conlusion of an investigation by the regulator (via Bloomberg).\r\nThe probe concluded that the iMessage p… [+270 chars]",
              "description": "Apple's iMessage will avoid regulation under the EU's Digital Markets Act (DMA), following the conlusion of an investigation by the regulator (via Bloomberg).\n\n\n\n\n\nThe probe concluded that the iMessage platform and Microsoft's Bing do not hold a dominant enou…",
              "url": "https://images.macrumors.com/t/mVsxVkokGvYOZLv_lWKhis5yQl8=/2500x/article-new/2021/07/General-Apps-Messages.jpg",
              "publishedAt": "2024-02-13T12:07:33Z"
          },
          {
              "id": "86cce876-8629-4159-82de-0b2eb11a0967",
              "content": "Some buyers are returning their Apple Vision Pros because they say its mixed reality features don't justify its $3,500 price tag.DAVID SWANSON/Getty\r\n<ul><li>Customers say they're returning their App… [+3989 chars]",
              "description": "Some Apple Vision Pro customers say the much-hyped headset's clunky design, blurry vision, and lack of use cases just don't justify the $3,500 price.",
              "url": "https://i.insider.com/65cbbe9ff533b039a883267f?width=1200&format=jpeg",
              "publishedAt": "2024-02-13T22:14:43Z"
          },
          {
              "id": "ef10f9e7-f350-4f88-ae13-156a0fb28386",
              "content": "Russian President Vladimir Putin suggested Wall Street Journalist Evan Gershkovich could be released in an interview with Tucker Carlson on Thursday.Getty Images\r\n<ul><li>This post originally appeare… [+7550 chars]",
              "description": "In today's big story, we're looking at why the recent resurgence of Vladimir Putin and Russia comes at an inopportune time for the markets.",
              "url": "https://i.insider.com/65cb73746fcb546d2d4ef324?width=1200&format=jpeg",
              "publishedAt": "2024-02-13T13:50:35Z"
          },
          {
              "id": "19b25101-8e89-405a-9b26-e323becc05f8",
              "content": "Temu, the ecommerce site with cheap delights loved by older people.NurPhoto\r\n<ul><li>Temu's Super Bowl ads sparked a surge in online searches despite recent downturn among users. </li><li>The e-comme… [+3217 chars]",
              "description": "Temu aired three commercials during Sunday's game as the Chinese-owned e-commerce company tries to keep momentum.",
              "url": "https://i.insider.com/65cac1f16fcb546d2d4edf79?width=1200&format=jpeg",
              "publishedAt": "2024-02-13T04:43:35Z"
          },
          {
              "id": "93a2990c-72ef-426b-9f4d-f02136cc2412",
              "content": "Apple won a victory for iMessage and Microsoft for its Bing search engine after the European Union (EU) found the respective services should not be designated as gatekeepers under its incoming Digita… [+2308 chars]",
              "description": "Apple won a victory for iMessage and Microsoft for its Bing search engine after the European Union (EU) found the […]\nThe post Apple, Microsoft granted exemptions from incoming EU digital legislation appeared first on ReadWrite.",
              "url": "https://readwrite.com/wp-content/uploads/2024/02/Apple-Microsoft-granted-exemptions-from-EU.jpg",
              "publishedAt": "2024-02-13T18:41:50Z"
          },
          {
              "id": "a2e9c118-c818-4329-ad12-bf58ab1f9c1b",
              "content": "Nvidia launches became the fourth most valuable U.S. corporation on Monday — temporarily surpassing Amazon.com Inc. and opening a new chapter in market capitalization as the chipmaker was propelled t… [+1674 chars]",
              "description": "Nvidia launches became the fourth most valuable U.S. corporation on Monday — temporarily surpassing Amazon.com Inc. and opening a new […]\nThe post Nvidia is ahead of Amazon in market value — but for how long? appeared first on ReadWrite.",
              "url": "https://readwrite.com/wp-content/uploads/2024/02/Nvidia-is-ahead-of-Amazon.jpg",
              "publishedAt": "2024-02-13T01:49:10Z"
          },
          {
              "id": "1e3360f3-a415-4291-9d39-ef369e0fb0e3",
              "content": "Infinite Craft continues to take the internet by storm and goes on to prove a  simple, well-executed idea by a one-man development team is better than a poor idea (like countless mainstream games) th… [+2442 chars]",
              "description": "Infinite Craft continues to take the internet by storm and goes on to prove a  simple, well-executed idea by a […]\nThe post How to make Life and Humans in Infinite Craft appeared first on ReadWrite.",
              "url": "https://readwrite.com/wp-content/uploads/2024/02/infinitecraft2.jpg",
              "publishedAt": "2024-02-13T10:12:35Z"
          },
          {
              "id": "0a086025-44ba-4609-8ec1-2bc8ca746c8d",
              "content": "Apple y Microsoft tienen una razón para celebrar en Europa. La Comisión Europea determinó que iMessage, Bing y el navegador Edge no serán consideradas como guardianes de acceso (gatekeepers) bajo la … [+2911 chars]",
              "description": "Apple y Microsoft tienen una razón para celebrar en Europa. La Comisión Europea determinó que iMessage, Bing y el navegador Edge no serán consideradas como guardianes de acceso (gatekeepers) bajo la Ley de Mercados Digitales (DMA). Los gigantes tecnológicos p…",
              "url": "https://imgs.hipertextual.com/wp-content/uploads/2024/02/imessage-iphone.jpg",
              "publishedAt": "2024-02-13T23:15:35Z"
          },
          {
              "id": "fedab4a3-3bd7-4a2e-bcfb-a009b92eade4",
              "content": "Conocer el estado de las carreteras y saber si están cortadas o hay algún tipo de incidencia, como una manifestación, es crucial para organizarse en un viaje. Para saberlo, a menudo hacemos uso de la… [+2568 chars]",
              "description": "Conocer el estado de las carreteras y saber si están cortadas o hay algún tipo de incidencia, como una manifestación, es crucial para organizarse en un viaje. Para saberlo, a menudo hacemos uso de las aplicaciones de mapas más comunes en nuestro móvil, como G…",
              "url": "https://imgs.hipertextual.com/wp-content/uploads/2019/02/hipertextual-uber-se-mueve-hacia-negocio-citymapper-2019950744-scaled.jpeg",
              "publishedAt": "2024-02-13T16:10:27Z"
          },
          {
              "id": "911531f9-3492-481d-9290-067cbbefbefc",
              "content": "While the proliferation of the smartphone has caused the personal music player (PMP) market to mostly evaporate, there are still those who prefer a standalone device for their music. The Melodio Self… [+1092 chars]",
              "description": "While the proliferation of the smartphone has caused the personal music player (PMP) market to mostly evaporate, there are still those who prefer a standalone device for their music. The Melodio Se…",
              "url": "https://hackaday.com/wp-content/uploads/2024/02/Melodio-R7.png",
              "publishedAt": "2024-02-13T00:00:10Z"
          },
          {
              "id": "6b576581-aff5-418c-b8df-19ad4f358bd8",
              "content": "La Comisión Europea ya ha anunciado su decisión sobre si incluirá iMessage o Bing como \"guardianes de acceso\" dentro de la Ley de Mercados Digitales (DMA). Apple y Microsoft pueden estar contentas, p… [+2472 chars]",
              "description": "La Comisión Europea ya ha anunciado su decisión sobre si incluirá iMessage o Bing como \"guardianes de acceso\" dentro de la Ley de Mercados Digitales (DMA). Apple y Microsoft pueden estar contentas, porque afortunadamente para sus intereses, la Comisión ha con…",
              "url": "https://i.blogs.es/057a5a/apple-microsoft/840_560.jpeg",
              "publishedAt": "2024-02-13T13:20:56Z"
          },
          {
              "id": "ddbe4bbb-dd6c-4cb9-b4e9-7d91b55000ac",
              "content": "Hay una gran cantidad de usuarios que han visto como su viejo televisor no proporciona funciones inteligentes, pero por el resto de prestaciones sería una pena prescindir de él. Algo parecido ocurre … [+3651 chars]",
              "description": "Hay una gran cantidad de usuarios que han visto como su viejo televisor no proporciona funciones inteligentes, pero por el resto de prestaciones sería una pena prescindir de él. Algo parecido ocurre con algunas smart TV, que han visto cómo sus sistemas operat…",
              "url": "https://i.blogs.es/4c9893/captura-de-pantalla-2024-02-13-a-las-13.10.04/840_560.png",
              "publishedAt": "2024-02-13T17:30:58Z"
          },
          {
              "id": "6467ba64-cf2d-4ace-9f09-9ff9e5f4b4b9",
              "content": "Luke Larsen / Digital Trends\r\nApple has just released a software update for the Vision Pro headset that launched just over a week ago — and it’s an important one.\r\nThat’s because it offers a simple w… [+1957 chars]",
              "description": "A software update for Apple's Vision Pro headset brings a much simpler way to reset the device if you forget the passcode that you created for it.",
              "url": "https://www.digitaltrends.com/wp-content/uploads/2024/02/A-person-tilts-their-head-while-wearing-the-Apple-Vision-Pro.jpg?resize=1200%2C630&p=1",
              "publishedAt": "2024-02-13T01:20:10Z"
          },
          {
              "id": "c1c87973-f9d2-4922-88b5-e71d724b270e",
              "content": "Given how powerful some of the Apple Vision Pros features are, you might find yourself wanting to share your headset with someone else so they can experience all it has to offer. But doing that is ea… [+5381 chars]",
              "description": "Sharing an Apple Vision Pro headset can be a tricky process. Here’s how to set up multiple user accounts on a Vision Pro so that other people can use it.",
              "url": "https://www.digitaltrends.com/wp-content/uploads/2024/02/Apple-Vision-Pro-EyeSight.jpg?resize=1200%2C630&p=1",
              "publishedAt": "2024-02-13T14:30:16Z"
          },
          {
              "id": "2d83055f-58ab-4e6a-8533-b77a277abea2",
              "content": "Luke Miani\r\nWe’ve all seen the concept art of futuristic MacBooks that completely eliminate the bezels around the screen. Those are pure fantasy, even though Apple has significantly reduced bezel thi… [+1747 chars]",
              "description": "Are your MacBook bezels driving you mad? Never fear, there's an extravagant and silly way to upgrade to a bezel-free MacBook for just $3,500.",
              "url": "https://www.digitaltrends.com/wp-content/uploads/2024/02/This-MacBook-has-no-bezels-thanks-to-Luke-Mianis-screen-removal-and-Vision-Pro-replacement.jpg?resize=1200%2C630&p=1",
              "publishedAt": "2024-02-13T00:32:09Z"
          },
          {
              "id": "928b2bc5-ab9f-41a2-878b-8c48f5b5f341",
              "content": "Meta\r\nAll this hubbub about the Apple Vision Pro brings up one very good point: There are a ton of other VR headsets to choose from, including the Meta Quest 2. But here’s the best part, Meta Quest 2… [+2701 chars]",
              "description": "If you're looking to capitalize on Meta Quest 2 deals for the popular VR headset while the new models are available, now's a great time. Here are some.",
              "url": "https://www.digitaltrends.com/wp-content/uploads/2022/10/A-Meta-Quest-2-adjusted-to-look-green-is-being-used-for-gaming.jpg?resize=1200%2C630&p=1",
              "publishedAt": "2024-02-13T21:05:07Z"
          },
          {
              "id": "81e8a953-ae4a-4c7b-8efa-92a2ad66e3b2",
              "content": "Bryan M. Wolfe / Digital Trends\r\nLike millions of others, I visit the Apple website every year and order a new iPhone. Once it arrives, I always have the same reaction when I see it for the first tim… [+5464 chars]",
              "description": "Are screen protectors really necessary on our smartphones? I used to not think so. However, one screen protector changed my mind.",
              "url": "https://www.digitaltrends.com/wp-content/uploads/2024/02/zagg-case-iphone-15-pro-max-1.jpeg?resize=1200%2C630&p=1",
              "publishedAt": "2024-02-13T13:00:39Z"
          },
          {
              "id": "c5a44d7e-2ab0-4f8b-abc5-e8b59982ea72",
              "content": "When Jon Stewart announced that he would return to The Daily Show as a part-time host, the reaction among fans was split. The nostalgists were vindicated on Monday night: there was no trace of rust i… [+10618 chars]",
              "description": "The “Daily Show” host transformed the late-night landscape before his departure almost a decade ago—and returns to reckon with a nation that’s been transformed, too.",
              "url": "https://media.newyorker.com/photos/65cb8de5d9926f4be0ac9517/16:9/w_1280,c_limit/Inkoo-Kang-Stewart-2024.jpg",
              "publishedAt": "2024-02-13T19:15:07Z"
          },
          {
              "id": "eb8ec803-87ca-454e-8a87-a3bdab29b0b0",
              "content": "The word content is a workhorse of the digital era, referring to any form of culture or media pumped through the distribution tubes of the Internet, regardless of its medium. Intellectual property, i… [+7873 chars]",
              "description": "Kyle Chayka reviews “Argylle,” directed by Matthew Vaughn, and writes about the convolutions that a production must undergo to justify its existence as an original story.",
              "url": "https://media.newyorker.com/photos/65ca8c4955548747130513b6/16:9/w_1280,c_limit/Chayka-Argyle.jpg",
              "publishedAt": "2024-02-13T20:08:02Z"
          },
          {
              "id": "bd31ffc5-8f0f-453c-bfb0-662117eb3ea8",
              "content": "The phone market in 2000-10 was crazy, but Nokias strategy was even crazier. Just in the year 05 alone, it launched more than fifty models, more than the number of iPhone models Apple has shipped in … [+3661 chars]",
              "description": "Comments",
              "url": "https://textquery.app/images/og_image.jpg",
              "publishedAt": "2024-02-13T08:35:01Z"
          },
          {
              "id": "5cf3cfb9-c5ca-4b08-81a0-1a917390c747",
              "content": "Today in Tedium: Computing has changed a lot in the past four decades, and one of the biggest changes, perhaps the most unheralded, comes down to compatibility. These days, you generally cant fry a c… [+14638 chars]",
              "description": "How Intel screwed over a standards body in the midst of giving computer users one of the most resilient technologies around.",
              "url": "https://images.tedium.co/uploads/tedium020924.gif",
              "publishedAt": "2024-02-13T22:04:31Z"
          },
          {
              "id": "b49bcc24-8200-4472-9168-1f7f4cec980c",
              "content": "Secure and reliable software update framework for macOS.\r\nSparkle 2 adds support for application sandboxing, custom user interfaces, updating external bundles, and a more modern architecture which in… [+3545 chars]",
              "description": "A software update framework for macOS. Contribute to sparkle-project/Sparkle development by creating an account on GitHub.",
              "url": "https://opengraph.githubassets.com/704002f58e64c09befe202ead5baa190af7275737639a3212fce1ceb73042873/sparkle-project/Sparkle",
              "publishedAt": "2024-02-13T12:31:46Z"
          },
          {
              "id": "eaea3113-c0f3-43bb-af3b-e937372121b7",
              "content": "Its pretty weird for a startup to remain in stealth for over five years. People ask me why we did that, and my answer is always the same: We wanted to build something awesome before releasing it out … [+11959 chars]",
              "description": "At Antithesis, we want to bring the confidence and productivity benefits of autonomous testing to your team. We have developed a platform that searches for bugs in your software, in a controlled environment where all bugs are reproducible. Our first offering …",
              "url": "https://antithesis.com/images/Open-graph-image.png",
              "publishedAt": "2024-02-13T12:13:12Z"
          },
          {
              "id": "d220b21b-ba7f-46d5-b19d-cf700aebf7ba",
              "content": "Its pretty weird for a startup to remain in stealth for over five years. People ask me why we did that, and my answer is always the same: We wanted to build something awesome before releasing it out … [+11959 chars]",
              "description": "At Antithesis, we want to bring the confidence and productivity benefits of autonomous testing to your team. We have developed a platform that searches for bugs in your software, in a controlled environment where all bugs are reproducible. Our first offering …",
              "url": "https://www.antithesis.com/images/Open-graph-image.png",
              "publishedAt": "2024-02-13T12:24:15Z"
          },
          {
              "id": "991148c3-3600-4440-936d-72471d68dd38",
              "content": "During the creation of Episode 6 of Play History, I launched deep into the subject of computer monitors. In addition to hosting many computer games, the early computer monitors served as a bridge bet… [+11548 chars]",
              "description": "A forgotten strand of computing illuminates the famous stories of the early micros.",
              "url": "https://thehistoryofhowweplay.files.wordpress.com/2023/10/1968-0304-information-display-pg-back.png?w=1200",
              "publishedAt": "2024-02-13T16:26:56Z"
          },
          {
              "id": "592b6fcd-1e9c-4fa8-bb70-bd8e2282df3d",
              "content": "A Copyright Easter Egg, in terms of mapping, is a feature that is drawn in a distinctive way in order to help identify its original author. It may be a nonexistent, or slightly or heavily distorted, … [+11098 chars]",
              "description": "Comments",
              "url": null,
              "publishedAt": "2024-02-13T18:50:01Z"
          },
          {
              "id": "5668d3ee-74f2-4773-b851-8cfb97811525",
              "content": "Wie lange wird es dauern, bis die Vision Pro den technischen Stand erreicht hat, den man sich bei Apple wünscht? Einige Mitglieder der sogenannten Vision Products Group (VPG), die für das Headset bei… [+2450 chars]",
              "description": "Die Vision Pro ist – trotz spannender Fähigkeiten – ein Gen-1-Produkt. Ein gut informierter Journalist machte nun Aussagen zu Apples Timeline für das Headset.",
              "url": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/4/1/1/9/6/vision_pro_set-e9ec54093d28d03c.png",
              "publishedAt": "2024-02-13T10:22:00Z"
          },
          {
              "id": "7bdcdab6-2f3c-4d3a-8e1e-a110fcb8a55b",
              "content": "Das Werbeabo von Prime Video ist offenbar noch weiter beschnitten als bekannt: Neben Dolby Atmos und Dolby Vision haben Werbekunden offenbar auch keine Möglichkeit mehr, eine Watch Party zu hosten. D… [+3085 chars]",
              "description": "Dolby Vision und Atmos funktionieren nicht, nun werden weitere Einschränkungen im Werbeabo von Prime Video bekannt: Die Funktion Watch Party wurde gestrichen.",
              "url": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/4/1/3/4/7/shutterstock_1036304524-0b2f8d80609d8d7f.jpg",
              "publishedAt": "2024-02-13T09:30:00Z"
          },
          {
              "id": "dcbff8b8-d766-40e0-a9f9-793be59612d6",
              "content": "Apple @ Work is exclusively brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that integrates in a single professional-grade platform all the solutions necessary … [+488 chars]",
              "description": "Apple @ Work is exclusively brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that integrates in a single professional-grade platform all the solutions necessary to seamlessly and automatically deploy, manage & protect App…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/Apple-At-Work-FI.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T10:00:00Z"
          },
          {
              "id": "2307f815-93d8-4a8e-938c-290dea258eea",
              "content": "Running a visionOS beta on your Apple Vision Pro and wishing to revert to a stable release? In this hands-on tutorial and video, I show you how to downgrade visionOS on Apple Vision Pro. The downside… [+3155 chars]",
              "description": "Running a visionOS beta on your Apple Vision Pro and wishing to revert to a stable release? In this hands-on tutorial and video, I show you how to downgrade visionOS on Apple Vision Pro. The downside? Downgrading requires the $300 Apple Vision Pro Developer S…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/Apple-Vision-Pro-visionOS-Downgrade-progress-bar-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T16:04:59Z"
          },
          {
              "id": "6588e909-7342-4903-b5b8-799528063cde",
              "content": "Last week, Apple was handed a significant victory in its legal battle with AliveCor over the Apple Watch’s heart monitoring technology. At the time, however, the full details of the decision were una… [+3308 chars]",
              "description": "Last week, Apple was handed a significant victory in its legal battle with AliveCor over the Apple Watch’s heart monitoring technology. At the time, however, the full details of the decision were unavailable for confidentiality reasons. \n\n\n\nThis week, the jud…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/07/apple-watch-heart-rate-app-watchos-10.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T20:18:49Z"
          },
          {
              "id": "51f84e25-aa79-4477-b1f2-a38fc1b6d226",
              "content": "Following this month’s release of Apple Vision Pro, Apple has shared an in-depth overview on how Vision Pro and visionOS protect your data. The new “Apple Vision Pro Privacy Overview” covers things l… [+3022 chars]",
              "description": "Following this month’s release of Apple Vision Pro, Apple has shared an in-depth overview on how Vision Pro and visionOS protect your data. The new “Apple Vision Pro Privacy Overview” covers things like Optic ID, cameras and your surroundings, Persona, EyeSig…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/Vision-Pro-China.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T14:47:59Z"
          },
          {
              "id": "aeb8277b-70b3-48ac-9b9c-bcd6d99106e9",
              "content": "Today’s best Apple deals are taking $90 off every Apple Watch Series 9 style. Both 41mm and 45mm models start from $309, with the second-best prices being joined by a rare discount on the official Ap… [+4472 chars]",
              "description": "Today’s best Apple deals are taking $90 off every Apple Watch Series 9 style. Both 41mm and 45mm models start from $309, with the second-best prices being joined by a rare discount on the official Apple Watch Ocean Band at $79. Plus, you can save $531 on Appl…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/apple-watch-series-9-iphone-14-pro.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T16:46:00Z"
          },
          {
              "id": "47338367-247f-4700-8ef2-e626c265b150",
              "content": "Apple is rolling out the second developer beta of visionOS 1.1, one week after the first beta was released. As we covered last week, visionOS 1.1 offers improvements to Personas, MDM support, and mor… [+494 chars]",
              "description": "Apple is rolling out the second developer beta of visionOS 1.1, one week after the first beta was released. As we covered last week, visionOS 1.1 offers improvements to Personas, MDM support, and more. \n\n\n\n more…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/Apple-Vision-Pro-visionOS-Downgrade-progress-bar-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T18:19:40Z"
          },
          {
              "id": "9359c363-8ae0-4b50-a865-96da48a07404",
              "content": "iOS 17.4 development is well under way. Apple just shipped iOS 17.4 beta 3 to developers. The pre-release software primarily focuses on changes made in the EU due to regulatory requirements.\r\nHere’s … [+531 chars]",
              "description": "iOS 17.4 development is well under way. Apple just shipped iOS 17.4 beta 3 to developers. The pre-release software primarily focuses on changes made in the EU due to regulatory requirements.\n\n\n\n more…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/iOS-17.4-hero.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T18:06:56Z"
          },
          {
              "id": "2a78ca47-ef7e-4e7a-be35-47bdab5b930e",
              "content": "Apple has bought the web domain iwork.ai, which some are taking as evidence of plans to introduce major new artificial intelligence features into the company’s productivity suite … \r\nThis has led to … [+2278 chars]",
              "description": "Apple has bought the web domain iwork.ai, which some are taking as evidence of plans to introduce major new artificial intelligence features into the company’s productivity suite … \n\n\n\n more…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/Apple-buys-iwork.ai_.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T14:48:53Z"
          },
          {
              "id": "43123b74-7fb2-4bca-9899-c7c04bfb3afc",
              "content": "With iOS 17 and macOS Sonoma, Apple has introduced new camera gestures that show 3D reactions such as a thumbs up, balloons, and even fireworks. However, as these reactions are enabled by default, th… [+2294 chars]",
              "description": "With iOS 17 and macOS Sonoma, Apple has introduced new camera gestures that show 3D reactions such as a thumbs up, balloons, and even fireworks. However, as these reactions are enabled by default, they have embarrassed many users in some situations – but Appl…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/FaceTime-3D-reactions.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T21:16:35Z"
          },
          {
              "id": "619d2b07-4662-4fed-8637-49a915db4968",
              "content": "The iMessageantitrust threat hanging over Apple has now been removed, as the EU decides that the messaging service does not have enough European users to qualify as a dominant service.\r\nThat means th… [+1910 chars]",
              "description": "The iMessage antitrust threat hanging over Apple has now been removed, as the EU decides that the messaging service does not have enough European users to qualify as a dominant service.\n\n\n\nThat means that Apple will not be required to support messaging intero…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/iMessage-antitrust-threat-removed.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T12:39:38Z"
          },
          {
              "id": "03f3a5e2-038c-4905-8a6f-1892a8df2d20",
              "content": "The Apple Vision Pro Developer Strap is Thunderbolt capable and is not strictly a USB 2.0 device. Although the Fast Ethernet connection established when connecting to a Mac Virtual Display via USB-C … [+5563 chars]",
              "description": "The Apple Vision Pro Developer Strap is Thunderbolt capable and is not strictly a USB 2.0 device. Although the Fast Ethernet connection established when connecting to a Mac Virtual Display via USB-C uses USB 2.0, the Developer Strap doesn’t have to be forever…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/Apple-Vision-Pro-Developer-Strap-Thunderbolt.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T18:49:45Z"
          },
          {
              "id": "00854d72-9db5-42f5-addb-1b25ad7d9736",
              "content": "PelotonGymKit support is being withdrawn later this month, says the company. However, the company says that Apple Watch users won’t be left out in the cold … \r\nBack in 2020, GymKit support was origin… [+2514 chars]",
              "description": "Peloton GymKit support is being withdrawn later this month, says the company. However, the company says that Apple Watch users won’t be left out in the cold … \n\n\n\n more…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/Peoloton-GymKit-support-ending.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T12:03:13Z"
          },
          {
              "id": "91ddfbf5-5d97-4d64-acbd-79d283e0a00d",
              "content": "Ready to sell or hand down your AirPods? Or maybe you want to fix an issue you’re having. Read along for how to reset AirPods and AirPods Pro and the separate process to remove AirPods Apple ID.\r\nPar… [+2861 chars]",
              "description": "Ready to sell or hand down your AirPods? Or maybe you want to fix an issue you’re having. Read along for how to reset AirPods and AirPods Pro and the separate process to remove AirPods Apple ID.\n\n\n\n more…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/04/reset-airpods.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T19:11:00Z"
          },
          {
              "id": "e3075b10-44ee-4a26-b988-5921bb6687b0",
              "content": "The popular fitness and wellness app Gentler Streak is receiving another important update this week. With this version, users will get more detailed fitness statuses, as well as new custom icons and … [+1661 chars]",
              "description": "The popular fitness and wellness app Gentler Streak is receiving another important update this week. With this version, users will get more detailed fitness statuses, as well as new custom icons and a rebuilt Apple Watch app. Read on as we detail what’s new w…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/Gentler-Streak.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T00:23:41Z"
          },
          {
              "id": "2862c848-1f8a-4316-8d49-d6d721b88e3d",
              "content": "Bloomberg reports that Apples longest-running senior designer, Bart Andre, is retiring. As the story explains, Andre joined Apple in 1992 with Jonny Ive. His departure marks the near-complete turnove… [+1385 chars]",
              "description": "Bloomberg reports that Apple’s longest-running senior designer, Bart Andre, is retiring. As the story explains, Andre joined Apple in 1992 with Jonny Ive. His departure marks “the near-complete turnover” of Ive’s former design team.\n\n\n\n more…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/Designed-by-Apple-in-California-Jony-Ive-book-6.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T23:04:55Z"
          },
          {
              "id": "7cc37e1f-4e9e-4641-81b0-a2bbf8abd40d",
              "content": "Apple has pulled an app dedicated to streaming pirated movies and TV shows from the App Store. The app in question, “Kimi,” disguised itself as an app that “tests your eyesight.” In reality, it offer… [+1789 chars]",
              "description": "Apple has pulled an app dedicated to streaming pirated movies and TV shows from the App Store. The app in question, “Kimi,” disguised itself as an app that “tests your eyesight.” In reality, it offered unfettered access to some of the most popular TV shows an…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/piracy-app.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T16:36:43Z"
          },
          {
              "id": "3d17f555-9eea-4433-99d0-0221d1598f87",
              "content": "We’ve been hearing rumors about Apple’s future plans for the HomePod, and 9to5Mac reported last year that the company has been internally running tvOS on a modified iPad mini to see how a new HomePod… [+2049 chars]",
              "description": "We’ve been hearing rumors about Apple’s future plans for the HomePod, and 9to5Mac reported last year that the company has been internally running tvOS on a modified iPad mini to see how a new HomePod with a built-in display would work. With tvOS 17.4 beta, we…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/Apple-HomePod-screen-concept.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T20:21:03Z"
          },
          {
              "id": "99f5b0d7-65f6-4a11-b02a-18be5b573dee",
              "content": "Nomad has unveiled its latest premium Apple accessory today, the Magnetic Leather Back for iPhone 15 Pro and Pro Max. Made with high-quality leather, this slick magnetic back is perfect for those who… [+2579 chars]",
              "description": "Nomad has unveiled its latest premium Apple accessory today, the Magnetic Leather Back for iPhone 15 Pro and Pro Max. Made with high-quality leather, this slick magnetic back is perfect for those who like to keep their iPhone as close to naked as possible but…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/nomad-magetic-leather-back-for-iphone.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T16:46:33Z"
          },
          {
              "id": "e55e57f0-d44b-4a3d-a118-5c00465b8dbc",
              "content": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apples Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overca… [+882 chars]",
              "description": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apple’s Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overcast and other podcast players.\n\n\n\nSponsored by Day One: Day …",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/12/9to5Mac-Daily-art-lead.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T19:12:53Z"
          },
          {
              "id": "8d097e75-4f68-47ae-9438-9bb7587dab1f",
              "content": "Last year was a pretty brutal time for many Spotify employees, with thousands of jobs cut in three separate rounds of layoffs. But the loss of one particular engineer is threatening the future of the… [+3777 chars]",
              "description": "Last year was a pretty brutal time for many Spotify employees, with thousands of jobs cut in three separate rounds of layoffs. But the loss of one particular engineer is threatening the future of the innovative music encyclopedia Every Noise at Once – and fan…",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/Every-Noise-at-Once.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T14:00:53Z"
          },
          {
              "id": "7404f3fc-29cb-411a-8a29-2b50471442f4",
              "content": "One of my favorite HomeKit features is HomeKit Secure Video, which lets me view and manage security camera recordings right in the Home app. There are a number of different cameras on the market that… [+4796 chars]",
              "description": "One of my favorite HomeKit features is HomeKit Secure Video, which lets me view and manage security camera recordings right in the Home app. There are a number of different cameras on the market that support this feature, and here are my favorites as someone …",
              "url": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/IMG_1438.jpeg.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-13T20:20:00Z"
          },
          {
              "id": "da0a585f-e10a-439c-97e1-d7545491f875",
              "content": "Welcome to our wishful thinking for Android, where we dream big and gripe fairly, where we imagine what Android could be if only a few things were improved. A world where updates arrive on all Androi… [+7158 chars]",
              "description": "Dive into our whimsical wishlist for a smarter, sleeker, and more user-friendly Android",
              "url": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/01/bugdroid-wall-hero-2-ces-2024-booth.jpg",
              "publishedAt": "2024-02-13T12:00:12Z"
          },
          {
              "id": "c1d0ab5b-fadf-4e73-9a59-dff946af31c7",
              "content": "When OpenAI introduced ChatGPT, it quickly went viral. Within five days of launching in November 2022, this large language model (LLM) gained 1 million users, making it one of the fastest-growing app… [+10143 chars]",
              "description": "ChatGPT is an AI chatbot created by OpenAI. It can answer complex questions similar to Google Gemini",
              "url": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/02/opened-ai-chat-laptop_1268-21506.jpg",
              "publishedAt": "2024-02-13T18:57:41Z"
          },
          {
              "id": "43ecf451-54ff-4e65-9c95-0dc623b6b40e",
              "content": "Artificial intelligence and machine learning are often used in the same context. They are related terms but have different purposes. AI has multiple applications across various industries, with the m… [+10714 chars]",
              "description": "While artificial intelligence and machine learning go hand in hand, there are some key differences between them.",
              "url": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/11/artificial-intelligence.jpg",
              "publishedAt": "2024-02-13T18:53:03Z"
          },
          {
              "id": "10ff0e0c-ed5d-401f-8aac-9bb2e3856f42",
              "content": "DETROIT Cruise, the troubled General Motors autonomous vehicle unit, has hired a veteran automotive and technology company safety official for the critical position of chief safety officer.\r\nSteve Ke… [+1657 chars]",
              "description": "Filed under:\n Hirings/Firings/Layoffs,GM,Safety,Autonomous Vehicles\n Continue reading GM's Cruise hires veteran Ford and Apple official to be its safety chief after crash\nGM's Cruise hires veteran Ford and Apple official to be its safety chief after crash ori…",
              "url": "https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/02/13103013/autonomous_vehicles_safety_chief.jpeg",
              "publishedAt": "2024-02-13T15:50:00Z"
          },
          {
              "id": "6924bc73-0f78-4019-8736-21ddabecd468",
              "content": "The epic scale of the so-called Magnificent Seven was put under the microscope by analysts at Deutsche Bank, which finds the grouping of U.S. tech giants equal in size to multiple major stock markets… [+1234 chars]",
              "description": "The epic scale of the so-called Magnificent Seven was put under the microscope by analysts at Deutsche Bank, which finds the grouping of U.S. tech giants...",
              "url": "https://images.mktw.net/im-23407130/social",
              "publishedAt": "2024-02-13T09:48:00Z"
          },
          {
              "id": "681e5a29-e3fe-416b-95a0-70838dca442c",
              "content": "Bets on risky bullish options tied to members of the Magnificent Seven and other market-leading technology stocks are nearing their most crowded levels in the past year, according to data from market… [+5237 chars]",
              "description": "The trend is prompting some derivatives-market experts to warn that the broader market could be at risk of a pullback as Big Tech stocks, which have led the market higher over the past year, could falter following Friday’s options expiration.",
              "url": "https://images.mktw.net/im-609932/social",
              "publishedAt": "2024-02-13T19:26:00Z"
          },
          {
              "id": "bebcd1bc-b5f9-4940-861c-38d34f5096e4",
              "content": "If you see a headline that a company beat analysts expectations when reporting its quarterly results, it may not mean very much. The analysts may have set the bar too low, based in part on the compan… [+8551 chars]",
              "description": "A stock screen identifies companies that increased sales the most while also improving gross margins and operating margins.",
              "url": "https://images.mktw.net/im-52818040/social",
              "publishedAt": "2024-02-13T15:40:00Z"
          },
          {
              "id": "2d8e4e53-19ce-4bb0-b6d0-e7bf1eb56990",
              "content": "A bad month for Joe Biden just got worse.The latest numbers show inflation is still running hotter than Fed chair Jay Powell and the Biden administration would like. The markets think that means shor… [+7699 chars]",
              "description": "And bad news for Biden is good news for Donald Trump.",
              "url": "https://images.mktw.net/im-79322181/social",
              "publishedAt": "2024-02-13T20:31:00Z"
          },
          {
              "id": "4f43c3e9-301e-43a1-844c-9ff4664c73ec",
              "content": "Apple says Apple Vision Pro was designed with privacy in mind from the start\r\nApple has published details of its Apple Vision Pro privacy measures, including preventing apps from relaying details of … [+2345 chars]",
              "description": "Apple has published details of its Apple Vision Pro privacy measures, including preventing apps from relaying details of location, and even blocking the recording of hand gestures.Apple says Apple Vision Pro was designed with privacy in mind from the startIn …",
              "url": "https://photos5.appleinsider.com/gallery/58581-119385-000-lede-AVP-lock-xl.jpg",
              "publishedAt": "2024-02-13T15:30:29Z"
          },
          {
              "id": "2f98bab5-5e38-4972-9df0-0f024fab5734",
              "content": "visionOS\r\nApple is marching on with beta testing visionOS 1.1 on the Apple Vision Pro, with a second round now available for developers.\r\nApple's first visionOS beta arrived on February 6. The second… [+1261 chars]",
              "description": "Apple is marching on with beta testing visionOS 1.1 on the Apple Vision Pro, with a second round now available for developers.visionOSApple's first visionOS beta arrived on February 6. The second beta build for visionOS 1.1 is number 21O5188c, replacing build…",
              "url": "https://photos5.appleinsider.com/gallery/57058-116036-visionOS-home-xl.jpg",
              "publishedAt": "2024-02-13T18:27:42Z"
          },
          {
              "id": "0882a9ad-676c-4bc8-ad2e-a20868414403",
              "content": "Exercise firm Peloton is moving users to its own app instead of Apple's GymKit\r\nExercise firm Peloton has told its users that will no longer support Apple's GymKit health data sharing service on Appl… [+1375 chars]",
              "description": "Exercise firm Peloton has told its users that will no longer support Apple's GymKit health data sharing service on Apple Watch, and instead will move them to its own app.Exercise firm Peloton is moving users to its own app instead of Apple's GymKitIn 2020, Pe…",
              "url": "https://photos5.appleinsider.com/gallery/58576-119380-000-lead-GymKit-xl.jpg",
              "publishedAt": "2024-02-13T11:48:46Z"
          },
          {
              "id": "4bb88d8f-a026-4d9d-95f4-af103d49740a",
              "content": "Save $300 on the Apple Studio Display.\r\nAmazon's $300 price drop on the Apple Studio Display discounts the 27-inch monitor to $1,299.99, a new record low price for the retailer.\r\nThe AppleInsiderComp… [+1015 chars]",
              "description": "Amazon's $300 price drop on the Apple Studio Display discounts the 27-inch monitor to $1,299.99, a new record low price for the retailer.Save $300 on the Apple Studio Display.The AppleInsider Computer Monitor Price Guide is tracking the $1,299 sale price at A…",
              "url": "https://photos5.appleinsider.com/gallery/58580-119384-apple-studio-display-deal-xl.jpg",
              "publishedAt": "2024-02-13T15:56:55Z"
          },
          {
              "id": "7c32b170-3ba8-4900-9599-08c7140dc275",
              "content": "iMessage is an Apple technology\r\nIt's not completely clear if a FCC commissioner understands what he's taking about, as he calls for antitrust action against Apple for its systematic shutdown of the … [+2282 chars]",
              "description": "It's not completely clear if a FCC commissioner understands what he's taking about, as he calls for antitrust action against Apple for its systematic shutdown of the iMessage-on-Android Beeper Mini app.iMessage is an Apple technologyThe United States governme…",
              "url": "https://photos5.appleinsider.com/gallery/58571-119374-iMessage-Group-Chat-xl.jpg",
              "publishedAt": "2024-02-13T01:08:54Z"
          },
          {
              "id": "cc435a7a-8284-4d99-afec-db7a26d72402",
              "content": "Apple TV+ 'Invasion'\r\nApple TV+ has officially greenlit season three of its original sci-fi series \"Invasion,\" promising a continuation of the show's compelling exploration of human resilience in the… [+1050 chars]",
              "description": "Apple TV+ has officially greenlit season three of its original sci-fi series \"Invasion,\" promising a continuation of the show's compelling exploration of human resilience in the face of an alien incursion.Apple TV+ 'Invasion'In \"Invasion,\" Earth is visited by…",
              "url": "https://photos5.appleinsider.com/gallery/46020-89574-Invasion-xl.jpg",
              "publishedAt": "2024-02-13T19:03:16Z"
          },
          {
              "id": "70cf893e-989f-47be-b915-0ddf2943b255",
              "content": "Steve Kenner [Kodiak]\r\nA former Apple executive linked to the Apple Car has joined General Motors Cruise, becoming the chief of its self-driving taxi unit. \r\nSteve Kenner became the chief of safety a… [+1460 chars]",
              "description": "A former Apple executive linked to the Apple Car has joined General Motors Cruise, becoming the chief of its self-driving taxi unit.Steve Kenner [Kodiak]Steve Kenner became the chief of safety at the GM autonomous vehicle unit on Monday, the company announced…",
              "url": "https://photos5.appleinsider.com/gallery/58575-119381-stevekenner-xl.jpg",
              "publishedAt": "2024-02-13T12:01:51Z"
          },
          {
              "id": "7f3960a9-3a5b-4ded-976f-c78589b145c4",
              "content": "Apple's iMessage\r\nThe European Union has accepted Apple's argument that iMessage isn't used enough to require that it be interoperable with third-party messaging services.\r\nIn 2022, the EU passed its… [+3113 chars]",
              "description": "The European Union has accepted Apple's argument that iMessage isn't used enough to require that it be interoperable with third-party messaging services.Apple's iMessageIn 2022, the EU passed its Digital Markets Act, which sets certain constraints on what it …",
              "url": "https://photos5.appleinsider.com/gallery/57188-116302-000-lead-Messages-xl.jpg",
              "publishedAt": "2024-02-13T13:05:34Z"
          },
          {
              "id": "96ae7e39-c057-4ee3-a68c-64022a52839e",
              "content": "Apple MixC Wenzhou\r\nApple's supply chain checks show there are fewer cuts to orders than they expected at this time of year, with Dan Ives of Wedbush Securities saying that because of it, Apple will … [+2261 chars]",
              "description": "Apple's supply chain checks show there are fewer cuts to orders than they expected at this time of year, with Dan Ives of Wedbush Securities saying that because of it, Apple will have a tremendous year.Apple MixC WenzhouOn February 4, Wedbush released a note …",
              "url": "https://photos5.appleinsider.com/gallery/58577-119382-57642-117426-57104-116123-Apple-MixC-Wenzhou-China-media-preview-Genius-Bar_bigjpglarge_2x-xl-xl-xl.jpg",
              "publishedAt": "2024-02-13T13:24:55Z"
          },
          {
              "id": "324d5ee4-3b22-437f-a99a-1864ea3240d8",
              "content": "AirPlay in hotels\r\nLG has confirmed that customers should see AirPlay-compatible TVs in select hotels sometime in the spring.\r\nApple released iOS 17.3 with the AirPlay in hotels feature in January, b… [+1522 chars]",
              "description": "LG has confirmed that customers should see AirPlay-compatible TVs in select hotels sometime in the spring.AirPlay in hotelsApple released iOS 17.3 with the AirPlay in hotels feature in January, but hotels have to have a compatible TV to use the feature. It wa…",
              "url": "https://photos5.appleinsider.com/gallery/58586-119404-IMG_0058-xl.jpg",
              "publishedAt": "2024-02-13T21:51:03Z"
          },
          {
              "id": "2d3d54a1-4304-4f28-aabf-6c8ba7896ea4",
              "content": "iOS 17\r\nApple's third developer betas of iOS 17.4, iPadOS 17, tvOS 17.4, watchOS 10.4, and macOS Sonoma 14.4 are out now, as Apple braces itself for its big EU App Store changes. \r\nDevelopers partici… [+2325 chars]",
              "description": "Apple's third developer betas of iOS 17.4, iPadOS 17, tvOS 17.4, watchOS 10.4, and macOS Sonoma 14.4 are out now, as Apple braces itself for its big EU App Store changes.iOS 17Developers participating in Apple's beta program can pick up new builds through the…",
              "url": "https://photos5.appleinsider.com/gallery/56302-114322-55901-113522-iOS-17-Beta-6-xl-xl.jpg",
              "publishedAt": "2024-02-13T18:36:20Z"
          },
          {
              "id": "27948c8a-6e36-4a00-a4d7-ae944ef745b7",
              "content": "The visionOS App Store\r\nDevelopers had little chance to develop apps with Apple Vision Pro hardware before its February 2 launch, resulting in a slow native app rollout of about 11 days to reach 1,00… [+1577 chars]",
              "description": "Developers had little chance to develop apps with Apple Vision Pro hardware before its February 2 launch, resulting in a slow native app rollout of about 11 days to reach 1,000 total.The visionOS App StoreBefore the Apple Vision Pro launch, there was some con…",
              "url": "https://photos5.appleinsider.com/gallery/58587-119405-vOS9-xl.jpg",
              "publishedAt": "2024-02-13T23:23:45Z"
          },
          {
              "id": "148782fb-515c-4e19-9283-ae1ef28018f8",
              "content": "iPhone 15 Pro\r\nBart Andre has been with Apple since 1992, is Apple's longest-serving industrial designer, and intends to leave the company soon.\r\nThere have been several high-profile departures from … [+1198 chars]",
              "description": "Bart Andre has been with Apple since 1992, is Apple's longest-serving industrial designer, and intends to leave the company soon.iPhone 15 ProThere have been several high-profile departures from Apple's design team since Jony Ive left in 2019. Ongoing concern…",
              "url": "https://photos5.appleinsider.com/gallery/58588-119406-iPhone-15-Pro-cameras-xl.jpg",
              "publishedAt": "2024-02-13T23:59:38Z"
          },
          {
              "id": "dd85b5c0-84ee-4581-a754-5fe03b0d7bc0",
              "content": "Kimi app removed from App Store for allowing users to pirate movies, tv\r\nApple needs to tighten its App Store review process because a movie piracy app disguised as a vision tester existed on it for … [+1302 chars]",
              "description": "Apple needs to tighten its App Store review process because a movie piracy app disguised as a vision tester existed on it for months without detection, despite Apple's emphasis on security.Kimi app removed from App Store for allowing users to pirate movies, t…",
              "url": "https://photos5.appleinsider.com/gallery/58583-119388-kimi-xl.jpg",
              "publishedAt": "2024-02-13T17:35:01Z"
          },
          {
              "id": "c0b0696a-f7c9-4ff8-9b5c-e904a56396e6",
              "content": "An artist's rendition of a HomePod with a display\r\nApple's rumored HomePod with a seven-inch display has allegedly made an unexpected appearance in the third tvOS 17.4 developer beta, with references… [+1676 chars]",
              "description": "Apple's rumored HomePod with a seven-inch display has allegedly made an unexpected appearance in the third tvOS 17.4 developer beta, with references pointing to an unreleased device with a screen.An artist's rendition of a HomePod with a displayRumors have pu…",
              "url": "https://photos5.appleinsider.com/gallery/58585-119403-53411-107169-000-lead-HomePod-with-Screen-xl-xl.jpg",
              "publishedAt": "2024-02-13T21:21:26Z"
          },
          {
              "id": "cbbedb27-367f-4a44-8e49-9aa8ad43405b",
              "content": "Microsoft Copilot for iOS and iPadOS\r\nMicrosoft's Copilot is an AI assistant available on multiple platforms. Here's how to use Microsoft's rival to Siri on iOS and iPadOS.\r\nAI assistants help you ge… [+3948 chars]",
              "description": "Microsoft's Copilot is an AI assistant available on multiple platforms. Here's how to use Microsoft's rival to Siri on iOS and iPadOS.Microsoft Copilot for iOS and iPadOSAI assistants help you get work done faster by providing you with answers which you post …",
              "url": "https://photos5.appleinsider.com/gallery/58120-119365-copilot-ios-xl.jpg",
              "publishedAt": "2024-02-13T03:56:24Z"
          },
          {
              "id": "89528fd3-2f72-471a-ae13-6f9cbbd2667e",
              "content": "Apple\r\nMac\r\nMac\r\nMacApple\r\nApple20152020Mac4202129000Mac\r\n10Mac\r\nMac\r\nMac1MacPCMacWindowsGet a Mac6MacPC\r\nPCPCMac\r\n114000PCMac\r\nApplemac20122012\r\nMac2015\r\nMacMac\r\n20139WindowsMac8Get a Mac2006MacMac\r… [+46 chars]",
              "description": "Image:shutterstockAppleのパソコンユーザーといえば、ウイルス知らず。「Macだから大丈夫」と、インターネットの世界を長年自由に泳いできました。…それ、もう都市伝説らしいよ。Macを狙ったマルウェア急増長年いわれてきたMac大丈夫論。Appleもこれを表立って否定してきませんでした。Appleのファームウェアウイルスが初めに発見されたのは2015年。その後、2020年にはMac",
              "url": "https://media.loom-app.com/gizmodo/dist/images/2024/02/13/shutterstock_197358395.jpg?w=1280&h=630&f=jpg",
              "publishedAt": "2024-02-13T23:00:00Z"
          },
          {
              "id": "aaaf5998-23a9-48db-b4b5-59d0e43d1b90",
              "content": "710001000100\r\nAI\r\nChatGPTOpenAI1000\r\n57\r\n577001000\r\nApple\r\nAIAmazonNvidia4600Nvidia H100\r\nAI507500\r\n7\r\nOpenAIChatGPTOpenAIAGI\r\nAI\r\nAI",
              "description": "Image:Hamara/Shutterstock.com7兆ドル…。日本円では1000兆円越え。もし、1000兆円あったら何に使う？って聞かれても、ケタが大きすぎてわかりませんよね。100万円あったらどうする？のほうが楽しく考えられそう。が、AI業界のトップを走る人は違います。ChatGPT有するOpenAIのトップ、サル・アルトマン氏は「1000兆円あったらなぁ」ってプランを考えているみたい。",
              "url": "https://media.loom-app.com/gizmodo/dist/images/2024/02/13/shutterstock_2278780315.jpg?w=1280&h=630&f=jpg",
              "publishedAt": "2024-02-13T10:30:00Z"
          },
          {
              "id": "b7f1407c-73fe-41f7-9a66-733fd6df3381",
              "content": "The idea of putting a wearable on the eyes that takes immersive interaction up close and personal is a mantra every tech company wants to recite. After the bigger ones like Google and Apple doing the… [+2450 chars]",
              "description": "Lightweight and stylish Brillant Labs Frame is first AI assisted glasses that’ll allow you to engage more with the world aroundThe idea of putting a wearable on the eyes that takes immersive interaction up close and personal is a mantra every tech company wan…",
              "url": "https://www.yankodesign.com/images/design_news/2024/02/lightweight-and-stylish-brillant-labs-frame-is-first-ai-assisted-glasses-thatll-allow-you-to-engage-more-with-the-world-around/Brillant-Labs-Frame-AI-glasses-1.jpg",
              "publishedAt": "2024-02-13T09:45:36Z"
          },
          {
              "id": "9bacc171-bd38-447e-ae8c-9e5b517d5a02",
              "content": "Si vous avez des tonnes de fichiers (photos, musiques, documents, etc…) que vous aimeriez stocker en toute sécurité, l’acquisition d’un disque dur externe est une excellente solution. Justement, en c… [+3851 chars]",
              "description": "Si vous avez des besoins de stockage conséquents et que vous cherchez un disque dur offrant une capacité confortable, vous craquerez peut-être pour le WD My Book de 18 To, actuellement en promo sur Amazon.",
              "url": "https://www.journaldugeek.com/app/uploads/2024/02/western-digital-disque-dur.jpg",
              "publishedAt": "2024-02-13T16:55:52Z"
          },
          {
              "id": "798bde95-f852-499d-92db-d024ec0bcfb7",
              "content": "De igual forma que podemos conseguir Apple Music gratis y que también encontramos promociones de Apple TV+, la plataforma de videojuegos de Apple Arcade también tiene ofertas. De hecho, son varias, p… [+3570 chars]",
              "description": "De igual forma que podemos conseguir Apple Music gratis y que también encontramos promociones de Apple TV+, la plataforma de videojuegos de Apple Arcade también tiene ofertas. De hecho, son varias, permitiendo obtener hasta cuatro meses gratis de forma que si…",
              "url": "https://i.blogs.es/2b2570/apple-arcade-gratis/840_560.jpeg",
              "publishedAt": "2024-02-13T11:00:58Z"
          },
          {
              "id": "b13ce85c-9089-463c-9279-0d75aa2760b3",
              "content": "Una tarjeta de acceso, un llavero, un cuaderno de notas y, al fondo del todo, una caja con varias tarjetas y una faja con un mensaje muy poderoso pero un tanto extraño. Muy Apple. La pasante Christin… [+3292 chars]",
              "description": "Una tarjeta de acceso, un llavero, un cuaderno de notas y, al fondo del todo, una caja con varias tarjetas y una faja con un mensaje muy poderoso pero un tanto extraño. Muy Apple. La pasante Christina Quan estuvo trabajando en Apple durante un verano y relata…",
              "url": "https://i.blogs.es/96fb79/cuaderno-apple/840_560.jpeg",
              "publishedAt": "2024-02-13T13:01:04Z"
          },
          {
              "id": "aa374cbf-8e31-48ce-914e-d9f95326db58",
              "content": "Las Leyes de Mercados y Servicios Digitales de la Unión Europea, conocidas también como DSA y DMA por sus siglas en inglés, están a punto de entrar en vigor y con ello empujar a compañías como Apple … [+3303 chars]",
              "description": "Las Leyes de Mercados y Servicios Digitales de la Unión Europea, conocidas también como DSA y DMA por sus siglas en inglés, están a punto de entrar en vigor y con ello empujar a compañías como Apple a aplicar importantes cambios. Lo visto en iOS 17.4 es la me…",
              "url": "https://i.blogs.es/335a78/apple-europa/840_560.jpeg",
              "publishedAt": "2024-02-13T14:46:25Z"
          },
          {
              "id": "ea552ffe-8a05-4e1e-9f41-87881930bdc4",
              "content": "Lo normal es que, cuando engañes o defraudes a una empresa, ésta haga todos los movimientos necesarios para que el peso de la ley caiga sobre ti tarde o temprano. Lo realmente extraño es que esa empr… [+2217 chars]",
              "description": "Lo normal es que, cuando engañes o defraudes a una empresa, ésta haga todos los movimientos necesarios para que el peso de la ley caiga sobre ti tarde o temprano. Lo realmente extraño es que esa empresa acabe agradeciéndote el gesto de forma cordial.\n<!-- BRE…",
              "url": "https://i.blogs.es/b6c7ef/hacker-macbook/840_560.jpeg",
              "publishedAt": "2024-02-13T09:30:58Z"
          },
          {
              "id": "11287552-17a7-467c-9f0e-2e85c5c576a0",
              "content": "Son muchas las tiendas que están con promociones estos días, entre ellas El Corte Inglés, que más allá de su Rebaja Final está ofreciendo varios modelos de iPhone con descuento gracias a las ofertas … [+3605 chars]",
              "description": "Son muchas las tiendas que están con promociones estos días, entre ellas El Corte Inglés, que más allá de su Rebaja Final está ofreciendo varios modelos de iPhone con descuento gracias a las ofertas flash, disponibles hasta el próximo 14 de febrero. Así que s…",
              "url": "https://i.blogs.es/673bde/ofertas-iphone-el-corte-ingles/840_560.jpeg",
              "publishedAt": "2024-02-13T07:30:57Z"
          },
          {
              "id": "37e3f4a1-f188-4f5e-bf96-06fedaa84894",
              "content": "Que un producto como el Vision Pro lleve desarrollándose 15 años como indican sus primeras patentes de 2008 no garantiza que a su llegada al mercado sea perfecto. De hecho, es en la cotidianidad dond… [+2320 chars]",
              "description": "Que un producto como el Vision Pro lleve desarrollándose 15 años como indican sus primeras patentes de 2008 no garantiza que a su llegada al mercado sea perfecto. De hecho, es en la cotidianidad donde más defectos se les puede sacar a dispositivos así y es ju…",
              "url": "https://i.blogs.es/f9ab9f/vision-pro/840_560.jpeg",
              "publishedAt": "2024-02-13T08:00:58Z"
          },
          {
              "id": "22d2d5e3-a5fa-4c5b-8dc2-4ff1baa6d5c7",
              "content": "2024 ha empezado muy fuerte en Apple. La compañía ha lanzado las Vision Pro en los Estados Unidos en lo que ya podemos considerar un momento histórico. Para Tim Cook, es el comienzo de la era de la c… [+3268 chars]",
              "description": "2024 ha empezado muy fuerte en Apple. La compañía ha lanzado las Vision Pro en los Estados Unidos en lo que ya podemos considerar un momento histórico. Para Tim Cook, es el comienzo de la era de la computación espacial. A partir de ahora, el foco de innovació…",
              "url": "https://i.blogs.es/caaa75/captura-de-pantalla-2024-02-13-a-las-12.34.19/840_560.jpeg",
              "publishedAt": "2024-02-13T17:00:58Z"
          }
      ]
        this.setState({
          postsList:updatedList,
          apiStatus: apiStatusConstants.success,
        })
    }

    renderLoader = () => (
        <div className='load'>
          <h1>Loading</h1>
        </div>
      )

failureView=()=>(
    <div className='load'>
        <h1>Failed to load</h1>
    </div>
)

renderHomeVideos=()=>{
    const{postsList}=this.state

    return(
        <div className='container' >
            <div className='row '>
              {postsList.map(eachPost=>(
                <EachCard postDetails={eachPost} key={eachPost.id}/>
              ))}  
            </div>
        </div>
    )
}

    render(){
        const{apiStatus}=this.state;
        let renderBasedOnApiStatus

        switch (apiStatus) {
            case apiStatusConstants.failure:
              renderBasedOnApiStatus = this.failureView()
              break
            case apiStatusConstants.success:
              renderBasedOnApiStatus = this.renderHomeVideos()
              break
            case apiStatusConstants.inProgress:
              renderBasedOnApiStatus = this.renderLoader()
              break
            default:
              renderBasedOnApiStatus = ''
          }
        return(
            
            <div>
                {renderBasedOnApiStatus}
            </div>
        )
    }
}
export default BookMark