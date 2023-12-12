import React from 'react';
import FeedFotos from './FeedFotos';
import FeedModal from './FeedModal';

const Feed = ({ user }) => {
  const [modalFoto, setModalFoto] = React.useState(null);

  return (
    <article className="container grid">
      {modalFoto && <FeedModal foto={modalFoto} setModalFoto={setModalFoto} />}
      <FeedFotos setModalFoto={setModalFoto} user={user}/>
    </article>
  );
};

export default Feed;
