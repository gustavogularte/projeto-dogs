import React from 'react';
import FeedFotos from './FeedFotos';
import FeedModal from './FeedModal';

const Feed = ({ user }) => {
  const [modalFoto, setModalFoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinito, setInfinito] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function scrollInfinito() {
      if (infinito) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 1000);
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
      {!infinito && (
        <p
          style={{
            color: '#aaa',
            fontSize: '1.6rem',
            textAlign: 'center',
            paddingBottom: '4rem',
          }}
        >
          Não existem mais postagens.
        </p>
      )}
    </article>
  );
};

export default Feed;
