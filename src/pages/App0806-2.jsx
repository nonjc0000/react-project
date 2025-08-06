import Card from '../components/Card';
import '../css/App0806-1.css'

// 建立陣列物件資料
const arrCardInfo = [
  {
    id:1,
    imgURL: 'https://images.unsplash.com/photo-1649384843712-cba648ad6585?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Les Paul',
    desc: '財力雄厚的玩家愛用，以及一些很猛的爵士樂手',
    btnName: 'Play Jazz',
    btnURL: 'https://images.unsplash.com/photo-1649384843712-cba648ad6585?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id:2,
    imgURL: 'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Stratocaster',
    desc: '新手以及老手友善，從搖滾到放克基本全包',
    btnName: 'Play Rock',
    btnURL: 'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id:3,
    imgURL: 'https://images.unsplash.com/photo-1595340515434-8a89101240f5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Telecaster',
    desc: '主要是一些硬地仔跟龐克仔，還有Radiohead鐵粉',
    btnName: 'Play Indie',
    btnURL: 'https://images.unsplash.com/photo-1595340515434-8a89101240f5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id:4,
    imgURL: 'https://images.unsplash.com/photo-1642450530377-74f3a7327406?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amF6em1hc3RlciUyMGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Jazzmaster',
    desc: 'Is that u Kurt?',
    btnName: 'Play Grunge',
    btnURL: 'https://images.unsplash.com/photo-1642450530377-74f3a7327406?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amF6em1hc3RlciUyMGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D'
  }
]

const App = () => {
  // 資料抽離

  return (
    <>
      <div className='container'>
        {
          arrCardInfo.map((card) => {
            return (
              <Card 
              key={card.id}
              imgURL={card.imgURL} 
              title={card.title} 
              desc={card.desc} 
              btnName={card.btnName} 
              btnURL={card.btnURL} />
            )

          })
        }
      </div>
    </>
  )
}

export default App;