import { NextPage } from 'next';
import Link from 'next/link';
import { Document } from 'prismic-javascript/types/documents';
import { RichText } from 'prismic-dom';
import { CardStyled, CardBody, Description } from './style';

interface CardProps {
  post: Document;
}

const Card: NextPage<CardProps> = ({ post }: CardProps) => {
  return (
    <CardStyled>
      <img src={post.data.image.url} alt="" />
      <CardBody>
        <h1>{RichText.asText(post.data.title)}</h1>
        <Description
          dangerouslySetInnerHTML={{
            __html: RichText.asHtml(post.data.description),
          }}
        />
      </CardBody>
    </CardStyled>
  );
};

export default Card;
