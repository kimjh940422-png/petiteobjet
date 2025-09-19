import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CollectionsDetail = () => {
  const { id } = useParams(); // url에서 id로 추출
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then((r) => r.json()) // json형식으로 데이터 변환
      .then((data) => {
        const found = data.products.find((m) => m.id === parseInt(id));
        setItem(found);
      })
      .catch(console.error);
  }, [id]); // id가 바뀔 때 마다 실행

  if (!item) return <p>데이터 불러오는 중..</p>;

  return (
    <section>
      <div className="card">
        <img src={item.image} alt={item.title} />
        <div className="recom-text">
          <h3>{item.title}</h3>
          <span className="tag">{item.tags.join(" # ")}</span>
          <p className="text">{item.description}</p>
        </div>
      </div>
    </section>
  );
};

export default CollectionsDetail;
