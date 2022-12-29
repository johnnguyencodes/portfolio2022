import Head from 'next/head'
import styles from '../styles/Index.module.css'

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="keywords" content="web development, programming"/>
      </Head>
      <div className="page-width">
        <h1>About John</h1>
        <p>Lorem Ipsum</p>
        <p>Lorem ipsum dolor sit amet, <a href="">projects Title</a> adipiscing elit. Vestibulum imperdiet risus et ligula tempus scelerisque. Quisque eleifend sagittis neque eu commodo. Donec vehicula tortor justo, ut venenatis ex lobortis nec. Proin dictum eget tortor ac ultricies. Nullam tristique ante id imperdiet imperdiet. Morbi sollicitudin arcu non nibh posuere consectetur. Donec tristique nunc et molestie vestibulum. Quisque at leo non diam commodo dignissim. Sed id hendrerit purus, eget aliquet sem. Quisque vitae sem ante. Fusce euismod odio vel auctor sodales. Integer sit amet justo lorem. Integer vitae ligula eget massa vulputate vehicula.</p>
        <p>Nullam at felis auctor, vehicula metus tincidunt, blandit metus. Donec efficitur arcu at dolor sodales, ac efficitur odio elementum. Duis sem metus, sollicitudin non ante sed, aliquam eleifend justo. Duis finibus leo vitae felis fermentum efficitur. Nunc sit amet justo vehicula, bibendum risus ac, convallis nisl. Suspendisse potenti. Maecenas at varius ex. Praesent pretium magna interdum consequat vestibulum. Integer ut ultricies diam, ut pretium augue.</p>
      </div>
    </div>
  )
}
