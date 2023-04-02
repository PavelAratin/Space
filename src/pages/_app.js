import '../styles/main.scss';
import Layout from '@/components/layout/Layuot';

export default function App({ Component, pageProps }) {
  return (
    <div className="site-container">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
