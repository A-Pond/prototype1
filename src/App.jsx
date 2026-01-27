// import './App.module.css';

// const App = () => {
//   const cardData = [{
//     title: 'Card1',
//     description: 'Description1',
//     date: '01.01.2001',
//     img: '/img1.png' ,
//     tags: ['#card1', '#card11', '#card111']
//   },
//   {
//     title: 'Card2',
//     description: 'Description2',
//     date: '02.02.2002',
//     img: '/img2.jpg' ,
//     tags: ['#card2', '#card22', '#card222']
//   },
//   {
//     title: 'Card3',
//     description: 'Description3',
//     date: '03.03.2003',
//     img: '/img3.jpg' ,
//     tags: ['#card3', ' #card33 ', '#card333']
//   },
//   {
//     title: 'Card4',
//     description: 'Description4',
//     date: '04.04.2004',
//     img: '/img4.jpg' ,
//     tags: ['#card4', '#card44', '#card444']
//   },
// ]

//   const cardDataSpred = {...cardData}

//   return (
//     <div>
//       {/* <Card img={cardDataSpred[0].img} title={cardDataSpred[0].title} description={cardDataSpred[0].description} data={cardDataSpred} tags={cardDataSpred[0].tags} />
//       <Card img={cardDataSpred[1].img} title={cardDataSpred[1].title} description={cardDataSpred[1].description} data={cardDataSpred} tags={cardDataSpred[1].tags} />
//       <Card img={cardDataSpred[2].img} title={cardDataSpred[2].title} description={cardDataSpred[2].description} data={cardDataSpred} tags={cardDataSpred[2].tags} />
//       <Card img={cardDataSpred[3].img} title={cardDataSpred[3].title} description={cardDataSpred[3].description} data={cardDataSpred} tags={cardDataSpred[3].tags} /> */}

//       {cardData.map((item) => {
//         < CardTag object={item} />
//       })}
//     </div>
// )}

// const Card = (props) => {
//   return (
//     <div>
//       < CardContainer img={props.object.img} />
//       < CardTag title={props.object.title} description={props.object.description} tags={props.object.tags} />
//     </div>
//   )
// }

// const CardContainer = (props) => {
//   return (
//     <div>
//       <img src={props.object.img} alt="img" />
//     </div>
//   )
// }

// const CardTag = (props) => {
//   return (
//     <div>
//         <p>{props.object.title}</p>
//         <p>{props.object.description}</p>
//         <p>{props.object.date}</p>
//         <p>{props.object.tags}</p>
//     </div>
//   )
// }


// export default App;

// import './App.module.css';
// import { useState } from "react";

// const App = () => {

//   const [count, setCount] = useState(0);
//   const [open, setOpen] = useState(true);

//   function setLet() {
//     setOpen((prev) => !prev)
//   }
//   return (
//     <>
//       <button onClick={setLet}>Start</button>
//       {open || (
//         <>

//           <p>React & Vite = {count >= 2 ? 'Application' : ''}</p>
//           <p>Count is {count}</p>
//           <div>
//             <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
//             <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
//             <button onClick={() => setCount(0)}>Reset</button>
//           </div>
//         </>
//       )}
//     </>
//   )
// }

// export default App;

import { useState } from "react";
import img from '../public/img1.png'
import style from './App.module.css'

const data = [
  {
    id: 1,
    title: 'card 1',
    description: 'desk card 1',
    date: 'March 01 2001',
    image: '/img1.png',
    tags: '#tag1 #tag2 #tag3',
    archived: false,
  },
  {
    id: 2,
    title: 'card 2',
    description: 'desk card 2',
    date: 'March 02 2002',
    image: './',
    tags: '#tag1 #tag2 #tag3',
    archived: false,
  },
  {
    id: 3,
    title: 'card 3',
    description: 'desk card 3',
    date: 'March 03 2003',
    image: './',
    tags: '#tag1 #tag2 #tag3',
    archived: false,
  },
  {
    id: 4,
    title: 'card 4',
    description: 'desk card 4',
    date: 'March 04 2004',
    image: './',
    tags: '#tag1 #tag2 #tag3',
    archived: false,
  },
  {
    id: 5,
    title: 'card 5',
    description: 'desk card 5',
    date: 'March 05 2005',
    image: '',
    tags: '#tag1 #tag2 #tag3',
    archived: false,
  },
]

const dataSpred = { ...data };

const App = (props) => {
  return (
    <>
      <Card title={data[0].title} />
      {data.map((item) => {
        <Card object={item} />
      })}
    </>
  )
}

const Card = (props) => {
  return (
      <div className={style.container}>
        <div className={style.header}>
          <img src={img} />
        </div>
        <div className={style.body}>
          <p>{props.object.title}</p>
          <p>{data[0].description}</p>
        </div>
      </div>
  )
}

export default App;