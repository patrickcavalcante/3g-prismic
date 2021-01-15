import Link from 'next/link';
import {
  FooterContainer,
  FooterComponent,
  H1,
  Block1,
  Block2,
  Block3,
} from './styles';

const Footer = () => {
  const Mapa =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15925.372575965383!2d-38.518808!3d-3.735187!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x15de6c04479853da!2s3G%20Corretora%20-%20Planos%20de%20Sa%C3%BAde%20da%20Unimed%2C%20Amil%20e%20Hapvida%20em%20Fortaleza%20Cear%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1610395715909!5m2!1spt-BR!2sbr" width="335" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';

  // codesandbox.io/s/react-iframe-demo-g3vst codePen =
  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
      />
    );
  }

  return (
    <>
      <FooterComponent>
        <FooterContainer>
          <Block1>
            <H1>Links Footer</H1>
            <h5>
              <Link href="/">
                <a>QUEM SOMOS</a>
              </Link>
            </h5>
            <h5>
              <Link href="/">
                <a>POLITÍCAS DE PRIVACIDADE</a>
              </Link>
            </h5>
            <h5>
              <Link href="/">
                <a>BLOG</a>
              </Link>
            </h5>
          </Block1>
          <Block2>
            <H1>Como Chegar</H1>
            <Iframe iframe={Mapa} allow="autoplay" />
          </Block2>
          <div>
            <H1>Redes Sociais</H1>
            <Block3>
              <Link href="/">
                <a>
                  <img src="/facebook-3g.png" alt="" width="32" height="32" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <img src="/instagram-3g.png" alt="" width="32" height="32" />
                </a>
              </Link>
            </Block3>
          </div>
        </FooterContainer>
      </FooterComponent>
    </>
  );
};

export default Footer;
