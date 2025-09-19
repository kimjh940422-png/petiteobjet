import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "../App.css";
import "react-multi-carousel/lib/styles.css";
import RecomCard from "../component/RecomCard";

//상단 스와이퍼
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Home = () => {
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then((r) => r.json()) // 요청한 데이터를 json형태로 바꿔줌
      .then((data) => {
        //console.log("전체데이터:", data);
        const meals = data.products || []; // data.meal가 있으면 그 값 그대로 보여주고, 없으면 빈 배열로 처리 -> meals 데이터가 항상 배열로 처리되도록 해주는 구문
        console.log("meals 배열:", meals);

        // db.json에서 recommended라는 값이 true인 요소만 모아서 새 배열로 만든다음 onlyRecommended에 담음.
        const onlyRecommended = meals.filter((m) => m.recommended);
        // console.log("추천만:", onlyRecommended)

        const firstFour = onlyRecommended.slice(0, 4);
        // console.log('앞 4개:', firstFour)

        setRecs(firstFour);
      })
      .catch((err) => {
        console.log("db.json 로드 실패: ", err);
      });
  }, []); // 의존성배열, []은 처음 실행했을 때 한번만 실행
  return (
    <div className="contents">
      <Carousel
        responsive={responsive}
        swipeable={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        infinite
        className="hero-slide"
      >
        <div>
          <img
            src="https://prs.ohousecdn.com/apne2/any/uploads/productions/v1-375358101946496.jpg?w=480&h=480&c=c&webp=1"
            alt="두꺼비집 가리개"
          />
        </div>
        <div>
          <img
            src="https://image.ohousecdn.com/i/bucketplace-v2-development/uploads/productions/images/167941725346791846.jpg?w=480&h=480&c=c&webp=1"
            alt="레터링 스티커"
          />
        </div>
        <div>
          <img
            src="https://prs.ohousecdn.com/apne2/any/uploads/productions/v1-356284464767104.jpg?w=480&h=480&c=c&webp=1"
            alt="포스터 액자"
          />
        </div>
      </Carousel>

      <div className="intro-text">
        <h2>당신의 공간을 빛내는 오브제 🎇</h2>
        <p>
          Petite Objet는 전 세계의 아기자기하고 감각적인 소품을<br /> 큐레이션해
          당신의 공간에 특별한 이야기를 더합니다.
        </p>

        <div className="text-area">
          <p>
            작은 물건이 만들어내는 큰 설렘, <br /><span>Petite Objet</span>와 함께 일상의 분위기를
            바꿔보세요.
          </p>
        </div>
      </div>

      <div className="recommendArea">
        <h2>오늘의 <span>PICK</span></h2>
        <div className="recom-card">
            {
                recs.map((item) => (
                    <RecomCard key={item.id} item={item} />
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Home;
