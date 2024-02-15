import {Component} from 'react'
import './index.css'
import EachCard  from '../EachCard'


const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'INPROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
  }

class News extends Component{
    state={postsList:[],apiStatus: apiStatusConstants.initial,}

    componentDidMount(){
        this.getContentLine()
    }

    getContentLine=async()=>{
        this.setState({apiStatus: apiStatusConstants.inProgress})
        const updatedList=[
          {
              "id": "a9ddd595-9629-4782-ae5f-9b8bf04ebc45",
              "content": "This is a transcript of the latest episode of Equity, TechCrunchs venture capital-focused podcast. New episodes of Equity air every Monday, Wednesday and Friday.\r\nListen above or read below to catch … [+9883 chars]",
              "description": "This is our Wednesday show, where we dig into the critical startup and venture capital stories from the week thus far.",
              "url": "https://techcrunch.com/wp-content/uploads/2022/12/equity-podcast-2019-phone.webp?w=680",
              "publishedAt": "2024-02-14T16:53:07Z"
          },
          {
              "id": "056c16ae-5fef-4a6e-969d-60f0198ae760",
              "content": "Theres no such thing as a future-proof career. This is something I consider nearly any time I write about advances in generative AI. Is there a sense in which Im contributing to the propagation of my… [+1682 chars]",
              "description": "There’s no such thing as a future-proof career. This is something I consider nearly any time I write about advances in generative AI. Is there a sense in",
              "url": "https://techcrunch.com/wp-content/uploads/2023/10/robo-jobs.jpg?resize=1200,675",
              "publishedAt": "2024-02-14T15:56:56Z"
          },
          {
              "id": "0ae83862-e7d6-4864-ad74-8c7c822711a5",
              "content": "Mark Zuckerberg may be laughing off the competition in the AR/VR headset market, but Apple’s Vision Pro is gaining traction — with developers, at least. On Tuesday, Apple senior vice president of Wor… [+3477 chars]",
              "description": "Mark Zuckerberg may be laughing off the competition in the AR/VR headset market, but Apple's Vision Pro is gaining traction -- with developers, at least.",
              "url": "https://techcrunch.com/wp-content/uploads/2023/06/Vision-Pro-IMG-10.jpeg?resize=1200,675",
              "publishedAt": "2024-02-14T15:33:40Z"
          },
          {
              "id": "38e8e2e0-11de-4803-95ed-dbd3628c8a37",
              "content": "DuckDuckGo’s privacy-focused browser has introduced a new “Sync &amp; Backup” feature that lets users privately sync and access bookmarks, favorites and passwords across multiple devices. Although yo… [+1934 chars]",
              "description": "DuckDuckGo now lets users privately sync and access bookmarks, favorites and passwords across multiple devices.",
              "url": "https://techcrunch.com/wp-content/uploads/2024/02/duckduckgo-password-syncing.jpg?resize=1200,657",
              "publishedAt": "2024-02-14T15:25:11Z"
          },
          {
              "id": "abe118cd-82ca-4115-b7ed-b429f0a7d9b7",
              "content": "Immersion, a company specializing in haptic feedback tech, has settled a lawsuit with Meta over the latter’s use of touch-feedback in its Quest VR headsets.\r\nIn a press release, Immersion said that i… [+3068 chars]",
              "description": "Meta and Immersion have come to an agreement over the haptic feedback tech in the former's Quest VR headsets, for which Immersion claims to own the patent.",
              "url": "https://techcrunch.com/wp-content/uploads/2023/09/Oculus-Quest-3-wearing-4.jpg?w=1200",
              "publishedAt": "2024-02-14T15:16:56Z"
          },
          {
              "id": "bc9e6d44-9364-4c7a-82ac-42a7d9b04c73",
              "content": "U.K.-based water utility Southern Water has confirmed that hackers stole the personal data of as many as 470,000 customers in a recent data breach.\r\nSouthern Water, which provides water and wastewate… [+2650 chars]",
              "description": "Southern Water has confirmed that hackers stole the personal data of as many as 470,000 customers during a recent data breach",
              "url": "https://techcrunch.com/wp-content/uploads/2024/02/souther-water-cyberattack.jpeg?resize=1200,751",
              "publishedAt": "2024-02-14T15:15:52Z"
          },
          {
              "id": "8d4f2402-9be9-4d68-90c9-6a44804befba",
              "content": "Hello, and welcome back to Equity, the podcast about the business of startups, where we unpack the numbers and nuance behind the headlines.\r\nWelcome to our Wednesday show, in which we talk through th… [+1638 chars]",
              "description": "Equity's discussing the week's leading startup and vc news, including Bret Taylor's new AI startup, Foundry Group shutting down, and more.",
              "url": "https://techcrunch.com/wp-content/uploads/2023/11/openai-hp.jpg?resize=1200,675",
              "publishedAt": "2024-02-14T15:02:54Z"
          },
          {
              "id": "9c95192a-8433-4702-b7a8-452e014cc81b",
              "content": "Youth rideshare startup HopSkipDrive beat two key new California emissions standards in 2023, an accomplishment the company believes will bolster its case for relying more on shared passenger vehicle… [+4150 chars]",
              "description": "HopSkipDrive, a rideshare service for kids and teens, beat new emissions standards in California, bolstering its pitch to schools.",
              "url": "https://techcrunch.com/wp-content/uploads/2024/02/hopskipdrive.jpg?resize=1200,798",
              "publishedAt": "2024-02-14T15:01:09Z"
          },
          {
              "id": "38806153-ad64-42a7-ba7d-0ba83470d23f",
              "content": "Spatial computing, climate tech, and applications of AI technology join the newly announced list of startup incubator Y Combinator’s newest request for startups, announced on Wednesday. In a blog pos… [+2460 chars]",
              "description": "Spatial computing, climate tech, and applications of AI technology join the newly announced list of startup incubator Y Combinator's newest request for",
              "url": "https://techcrunch.com/wp-content/uploads/2022/09/yc-2022-fall-1-e1662566861873-copy.png?w=1000",
              "publishedAt": "2024-02-14T14:55:49Z"
          },
          {
              "id": "91a70f31-d2e7-452e-9537-44ceb97a7722",
              "content": "If you think growing leaves is easy, think again.\r\nLettuce isnt the worlds most challenging crop, but as any farmer knows, there are plenty of problems that pop up between planting and harvest. The g… [+5485 chars]",
              "description": "The indoor farming startup uses repurposed warehouse robots to grow produce for Amazon Fresh.",
              "url": "https://techcrunch.com/wp-content/uploads/2024/02/Copy-of-Copy-of-DSC01841.jpg?resize=1200,802",
              "publishedAt": "2024-02-14T13:45:07Z"
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
        <div className='container'>
            <div className='row'>
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
export default News