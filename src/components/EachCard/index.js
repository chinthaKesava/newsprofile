import Card from 'react-bootstrap/Card';

const EachCard=props=>{
    const{postDetails}=props
    const{content,description,url,publishedAt}=postDetails
    return(
        <div className='col-12 col-md-3 text-center mb-3 align-items-center' >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} alt='error '/>
                <Card.Body>
                  <Card.Title>{description}</Card.Title>
                  <Card.Text>
                    {content}
                  </Card.Text>
                  <h5>publishedAt:{<Card.Text>{publishedAt}</Card.Text>}</h5>
                </Card.Body>
              </Card>
        </div>
    )
}
export default EachCard