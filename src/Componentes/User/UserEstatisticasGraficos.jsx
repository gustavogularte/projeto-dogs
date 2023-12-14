import React from 'react';
import { VictoryBar, VictoryChart, VictoryPie } from 'victory';
import styles from './UserEstatisticasGraficos.module.css'

const UserEstatisticasGraficos = ({ data }) => {
  const [graficos, setGraficos] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const teste = data.map((item) => {
      return {
        x: item.title,
        y: +item.acessos
      }
    })
    setGraficos(teste)
    setTotal(data.map(({ acessos }) => +acessos).reduce((a, b) => a + b, 0));
  }, [data]);
  console.log(graficos)

  return (
    <article className={`${styles.graph} animeLeft`}>
      <section className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </section>
      <section className={styles.graphItem}>
        <VictoryPie
          data={graficos}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </section>
      <section className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graficos}></VictoryBar>
        </VictoryChart>
      </section>
    </article>
  );
};

export default UserEstatisticasGraficos;
