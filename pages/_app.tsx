import 'antd/dist/reset.css';
import { Alef } from '@next/font/google';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

const alef = Alef({
  weight: '400',
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={alef.className}>
      <Component {...pageProps} />
    </main>
  
  );
}

export default MyApp
