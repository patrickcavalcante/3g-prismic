import { GetServerSideProps, NextPage } from 'next';
import Prismic from 'prismic-javascript';
import { useRouter } from 'next/router';
import { Document } from 'prismic-javascript/types/documents';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { client } from '../lib/prismic';
import SEO from '../components/SEO';
import {
  Band,
  Bg,
  Button,
  Form,
  Input,
  SubTitle,
  Title,
} from '../styles/pages/Home';
import Card from '../components/Card/index';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface HomeProps {
  cidadesPlanos: Document[];
}

const Home: NextPage<HomeProps> = ({ cidadesPlanos }) => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    router.push(`/search?q=${encodeURIComponent(search)}`);

    setSearch('');
  }

  return (
    <div>
      <SEO
        title="DevCommerce, your best e-commerce!"
        image="boost.png"
        shouldExcludeTitleSuffix
      />
      <Header />
      <Bg>
        <Title>3G Corretora</Title>
        <SubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </SubTitle>
        <Form onSubmit={handleSearch}>
          <Input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Button type="submit">Pesquisar</Button>
        </Form>
      </Bg>
      <Band style={{ paddingTop: 20 }}>
        {cidadesPlanos.map(cidades => (
          <Link href={`/${cidades.uid}`} key={cidades.id}>
            <a style={{ textDecoration: 'none' }}>
              <Card key={cidades.id} post={cidades} />
            </a>
          </Link>
        ))}
      </Band>
      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const cidadesPlanos = await client().query([
    Prismic.Predicates.at('document.type', 'cidades'),
  ]);

  return {
    props: {
      cidadesPlanos: cidadesPlanos.results,
    },
  };
};
