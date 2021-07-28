import Head from "next/head";
import { useAmp } from "next/amp";
import Layout from "../components/Layout";
import Byline from "../components/Byline";

export const config = {
  amp: true,
};

export default function IndexPage() {
  const isAmp = useAmp();

  return (
    <>
      <Head>
        <title>The Cat</title>
        <script
          async
          custom-element='amp-iframe'
          src='https://cdn.ampproject.org/v0/amp-iframe-0.1.js'
        ></script>
      </Head>
      {/* <div style={{ height: "50vh" }}></div> */}
      {/* <div style={{ height: "50vh" }}></div> */}
      <button on='tap:quote-lb'>See Sudoko</button>
      <amp-lightbox id='quote-lb' layout='nodisplay'>
        <div style={{ background: "#888" }}>
          <button on='tap:quote-lb.close'>close</button>
          <amp-iframe
            width='390'
            height='520'
            frameborder='0'
            src='https://d25xzo2q5lr62k.cloudfront.net/'
            title='Netflix House of Cards branding: The Stack'
            layout='responsive'
            sandbox='allow-scripts allow-same-origin allow-popups'
            frameborder='0'
            // src='https://player.vimeo.com/video/140261016'
          >
            <amp-img
              layout='fill'
              src='https://via.placeholder.com/400'
              placeholder
            ></amp-img>
          </amp-iframe>
        </div>
        {/* <iframe
          src='http://www.free-sudoku.com/sudoku-webmaster.php?mescandi1=1&fondspage=FFFFFF&lesliens=4A4C87&coubo1=1C1D3D&couli1=C0C0C2&coucp1=FFFFFF&counp1=000000&counn1=3F428A&couce1=FFFFFF&coune1=FF0000&coucr1=FFFFFF&hauteur111=750'
          width='500'
          height='562'
          frameborder='0'
        ></iframe>
        <noframes>
          <a href='http://www.free-sudoku.com'>Sudoku</a>
        </noframes> */}
      </amp-lightbox>
    </>
  );
}
