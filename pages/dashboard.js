import Head from 'next/head';
import Content from '../components/Content';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Thriftly</title>
        <link key='fav' rel="icon" href="/favicon.ico" />        
      </Head>
      <main>
        <Header />
        <Content />
        {/* content

        footer */}
      </main>      
    </div>
  )
};

export default Home
