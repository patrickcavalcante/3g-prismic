import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';
import PrismicDOM from 'prismic-dom';
import Link from 'next/link';
import { client } from '../../lib/prismic';

interface CidadeProps {
  cidades: Document[];
  operadoras: Document[];
}

const Cidades: NextPage<CidadeProps> = ({ cidades, operadoras }) => {
  const router = useRouter();
  const routePath = router.asPath;

  return (
    <div>
      {cidades.map(cidade => {
        return (
          <>
            <div>
              <img src={cidade.data.image.url} alt="" />
            </div>
            <div>
              <h1>Dados cidade</h1>
              <a>{PrismicDOM.RichText.asText(cidade.data.title)}</a>
            </div>
          </>
        );
      })}
      <h1>lista de operadoras</h1>
      {operadoras.map(operadora => {
        return (
          <li key={operadora.id}>
            <Link
              href={`${process.env.NEXT_PUBLIC_SITE_URL}${routePath}/${operadora.uid}`}
            >
              <a>{PrismicDOM.RichText.asText(operadora.data.title)}</a>
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Cidades;

export const getStaticPaths: GetStaticPaths = async () => {
  const cidadesOperadoras = await client().query([
    Prismic.Predicates.at('document.type', 'cidades'),
  ]);

  const paths = cidadesOperadoras.results.map(cidade => {
    return {
      params: { cidades: cidade.uid },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CidadeProps> = async () => {
  const cidades = await client().query([
    Prismic.Predicates.at('document.type', 'cidades'),
  ]);

  const operadoras = await client().query([
    Prismic.Predicates.at('document.type', 'operadoras'),
  ]);

  return {
    props: {
      cidades: cidades.results,
      operadoras: operadoras.results,
    },
    revalidate: 60,
  };
};
