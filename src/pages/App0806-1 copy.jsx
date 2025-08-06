import '../css/App0806-1.css'

const App = () => {
  // 資料抽離

  const photos = {
    photo1:{
      imgURL:'https://images.unsplash.com/photo-1649384843712-cba648ad6585?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title:'Les Paul',
      desc:'財力雄厚的玩家愛用，以及一些很猛的爵士樂手',
      btnName:'Play Jazz',
      btnURL:'https://images.unsplash.com/photo-1649384843712-cba648ad6585?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    photo2:{
      imgURL:'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title:'Stratocaster',
      desc:'新手以及老手友善，從搖滾到放克基本全包',
      btnName:'Play Rock',
      btnURL:'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    photo3:{
      imgURL:'https://images.unsplash.com/photo-1595340515434-8a89101240f5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title:'Telecaster',
      desc:'主要是一些硬地仔跟龐克仔，還有Radiohead鐵粉',
      btnName:'Play Indie',
      btnURL:'https://images.unsplash.com/photo-1595340515434-8a89101240f5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  } 

  return (
    <>
      <div className='container'>
        <div className="card">
          <img src={photos.photo1.imgURL} className="card-img-top" alt="blue Gibson" /> {/* jsx關閉標籤：在最後面加「／」 */}
          <div className="card-body">
            <h5 className="card-title">{photos.photo1.title}</h5>
            <p className="card-text">{photos.photo1.desc}</p>
            <a href={photos.photo1.btnURL} className="btn">{photos.photo1.btnName}</a>
          </div>
        </div>

        <div className="card">
          <img src={photos.photo2.imgURL} className="card-img-top" alt="mustard Strat" /> {/* jsx關閉標籤：在最後面加「／」 */}
          <div className="card-body">
            <h5 className="card-title">{photos.photo2.title}</h5>
            <p className="card-text">{photos.photo2.desc}</p>
            <a href={photos.photo2.btnURL} className="btn">{photos.photo2.btnName}</a>
          </div>
        </div>

        <div className="card">
          <img src={photos.photo3.imgURL} className="card-img-top" alt="mustard Strat" /> {/* jsx關閉標籤：在最後面加「／」 */}
          <div className="card-body">
            <h5 className="card-title">{photos.photo3.title}</h5>
            <p className="card-text">{photos.photo3.desc}</p>
            <a href={photos.photo3.btnURL} className="btn">{photos.photo3.btnName}</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;