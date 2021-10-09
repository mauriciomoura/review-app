import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
          Bem-vindo ao <Link href="https://www.instagram.com/projetoceos/"><a>Projeto Céos!</a></Link>
        </h1>

        <p className={styles.description}>
          Aprenda e se torne um{' '}
          <code className={styles.code}>DEV</code>
        </p>

        <div className={styles.grid}>
          <Link href="https://garrulous-hero-1f4.notion.site/Projeto-C-os-Dev-Aprendiz-265d9164a0704b85a365b8826ac56116">
            <a className={styles.card}>
              <h2>Documentação &rarr;</h2>
              <p>Base de conhecimento do projeto.</p>
            </a>
          </Link>

          <Link href="/reviews"> 
            <a className={styles.card}>
              <h2>Avaliações &rarr;</h2>
              <p>Um CRUD de avaliações.</p>
            </a>
          </Link>

          <Link href="/blog">
            <a className={styles.card}>
              <h2>Blog &rarr;</h2>
              <p>Um exemplo de um blog.</p>
            </a>
          </Link>

          <Link href="/about">
            <a className={styles.card}>
              <h2>Sobre &rarr;</h2>
              <p>
                Um exemplo de página sobre.
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
