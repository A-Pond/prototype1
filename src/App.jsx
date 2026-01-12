import './App.module.css';

const App = () => {
  const cardData = [{
    title: 'Card1',
    description: 'Description1',
    date: '01.01.2001',
    img: '/img1.png' ,
    tags: ['#card1', '#card11', '#card111']
  },
  {
    title: 'Card2',
    description: 'Description2',
    date: '02.02.2002',
    img: '/img2.jpg' ,
    tags: ['#card2', '#card22', '#card222']
  },
  {
    title: 'Card3',
    description: 'Description3',
    date: '03.03.2003',
    img: '/img3.jpg' ,
    tags: ['#card3', ' #card33 ', '#card333']
  },
  {
    title: 'Card4',
    description: 'Description4',
    date: '04.04.2004',
    img: '/img4.jpg' ,
    tags: ['#card4', '#card44', '#card444']
  },
]

  const cardDataSpred = {...cardData}

  return (
    <div>
      {/* <Card img={cardDataSpred[0].img} title={cardDataSpred[0].title} description={cardDataSpred[0].description} data={cardDataSpred} tags={cardDataSpred[0].tags} />
      <Card img={cardDataSpred[1].img} title={cardDataSpred[1].title} description={cardDataSpred[1].description} data={cardDataSpred} tags={cardDataSpred[1].tags} />
      <Card img={cardDataSpred[2].img} title={cardDataSpred[2].title} description={cardDataSpred[2].description} data={cardDataSpred} tags={cardDataSpred[2].tags} />
      <Card img={cardDataSpred[3].img} title={cardDataSpred[3].title} description={cardDataSpred[3].description} data={cardDataSpred} tags={cardDataSpred[3].tags} /> */}

      {cardData.map((item) => {
        < CardTag object={item} />
      })}
    </div>
)}

const Card = (props) => {
  return (
    <div>
      < CardContainer img={props.object.img} />
      < CardTag title={props.object.title} description={props.object.description} tags={props.object.tags} />
    </div>
  )
}

const CardContainer = (props) => {
  return (
    <div>
      <img src={props.object.img} alt="img" />
    </div>
  )
}

const CardTag = (props) => {
  return (
    <div>
        <p>{props.object.title}</p>
        <p>{props.object.description}</p>
        <p>{props.object.date}</p>
        <p>{props.object.tags}</p>
    </div>
  )
}


export default App;