import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto Céos</title>
        <meta name="description" content="Projeto Social para novos devs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo ao <a href="https://www.instagram.com/projetoceos/">Projeto Céos!</a>
        </h1>

        <p className={styles.description}>
          Aprenda e se torne um{' '}
          <code className={styles.code}>DEV</code>
        </p>

        <div className={styles.grid}>
          <a href="https://garrulous-hero-1f4.notion.site/Projeto-C-os-Dev-Aprendiz-265d9164a0704b85a365b8826ac56116" className={styles.card}>
            <h2>Documentação &rarr;</h2>
            <p>Base de conhecimento do projeto.</p>
          </a>

          <a href="/reviews" className={styles.card}>
            <h2>Avaliações &rarr;</h2>
            <p>Um CRUD de avaliações.</p>
          </a>

          <a
            href="/blog"
            className={styles.card}
          >
            <h2>Blog &rarr;</h2>
            <p>Um exemplo de um blog.</p>
          </a>

          <a
            href="/about"
            className={styles.card}
          >
            <h2>Sobre &rarr;</h2>
            <p>
              Um exemplo de página sobre.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
