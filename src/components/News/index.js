import {Component} from 'react'
import {v4} from 'uuid'
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
        const apiUrl="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=906d75a1fc9e458ea27bc160ee3f4cd9"
        const options={
            method:'GET',
        }
        const response=await fetch(apiUrl,options)
        if (response.ok === true){
            const data=await response.json()
            console.log(data.articles[1])
            const updatedList=data.articles.map(eachVal=>({
                id:v4(),
                content:eachVal.content,
                description:eachVal.description,
                url:eachVal.urlToImage,
                publishedAt:eachVal.publishedAt
            }))
            //console.log(updatedList)
            this.setState({
                postsList:updatedList,
                apiStatus: apiStatusConstants.success,
              })
        }else {
            this.setState({apiStatus: apiStatusConstants.failure})
          }
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