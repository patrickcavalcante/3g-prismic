import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';
import PrismicDOM from 'prismic-dom';
import Link from 'next/link';
import { client } from '../../../lib/prismic';

interface CidadeProps {
  cidades: Document[];
  operadoras: Document[];
}

const Operadoras: NextPage<CidadeProps> = ({ cidades, operadoras }) => {
  const router = useRouter();
  const routePath = router.asPath;

  return (
    <>
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
    </>
  );
};

export default Operadoras;

export const getStaticPaths: GetStaticPaths = async () => {
  const cidadesOperadoras = await client().query([
    Prismic.Predicates.at('document.type', 'operadoras'),
  ]);

  const paths = cidadesOperadoras.results.map(operadora => {
    return {
      params: {
        cidades: operadora.data.cidades.uid,
        operadoras: operadora.uid,
      },
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
