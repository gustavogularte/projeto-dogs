import React from 'react';
import FeedFotos from './FeedFotos';
import FeedModal from './FeedModal';

const Feed = ({ user }) => {
  const [modalFoto, setModalFoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinito, setInfinito] = React.useState(true);

  React.useEffect(() => {
    function scrollInfinito() {
      if (infinito) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        let wait = false;
        if (scroll > height * 0.75 && !wait) {
          console.log('carregar');
          setPages((page) => [...page, page.length + 1]);
          wait = false;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', scrollInfinito);
    window.addEventListener('scroll', scrollInfinito);
    return () => {
      window.removeEventListener('wheel', scrollInfinito);
      window.removeEventListener('scroll', scrollInfinito);
    };
  }, [infinito]);

  return (
    <article className="container grid">
      {modalFoto && <FeedModal foto={modalFoto} setModalFoto={setModalFoto} />}
      {pages.map((page) => (
        <FeedFotos
          key={page}
          setModalFoto={setModalFoto}
          user={user}
          page={page}
          setInfinito={setInfinito}
        />
      ))}
    </article>
  );
};

export default Feed;
