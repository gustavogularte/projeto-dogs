import React from 'react'
import FeedFotos from './FeedFotos'
import FeedModal from './FeedModal'

const Feed = () => {
  const [modalFoto, setModalFoto] = React.useState(null);

  return (
    <article className='container'>
      {modalFoto && <FeedModal foto={modalFoto} setModalFoto={setModalFoto}/>}
      <FeedFotos setModalFoto={setModalFoto}/>
    </article>
  )
}

export default Feed
