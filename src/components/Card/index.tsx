import { NextPage } from "next";
import Link from "next/link";
import { Document } from "prismic-javascript/types/documents";
import { RichText } from "prismic-dom";
import { CardStyled, CardBody, Description } from "./style";

interface CardProps {
  post: Document;
}

const Card: NextPage<CardProps> = ({ post }: CardProps) => {
  return (
    <CardStyled>
      <Link href={`/catalog/products/${post.uid}`}>
        <CardBody>
          <h1>{RichText.asText(post.data.title)}</h1>
          <img src={post.data.thumbnail.url} alt="" />
          <Description
            dangerouslySetInnerHTML={{
              __html: RichText.asHtml(post.data.description),
            }}
          />
        </CardBody>
      </Link>
    </CardStyled>
  );
};

export default Card;
