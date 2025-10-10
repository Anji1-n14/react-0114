import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const params = useParams();
  console.log(params);
  const [article, setArticle] = useState({});

  const fetchArticles = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products/"+ params.articleId);
      console.log(res.data);
      setArticle(res.data);
      console.log(article);
      
    } catch (err) {
      console.log("error while fetching data", err);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div
    style={{
      display : "flex"
    }}>
      <p>"article:" ---{params.articleId}</p>
      <h1>{article.title}</h1>
       <img src={article.image} alt={article.title} />
    </div>
  );
};
export default ArticleDetails;
