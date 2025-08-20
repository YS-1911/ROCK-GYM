import React from 'react';
// Importing Nav component for the article page
import Nav from '../components/nav.jsx';
// Importing Footer component for the article page
import Footer from "../components/footer.jsx";
// Importing CSS for the article page
import "../css/article.css"
import { useEffect } from "react";
// Assuming articles is an array of article objects imported from articles.jsx
import articles from '../components/articles.jsx'; 


const Article = () => {
    useEffect(() => {
        const filterButtons = document.querySelectorAll(".filter-btn-article");
        const articleCards = document.querySelectorAll(".article-card");

        const handleClick = (button) => () => {
            const filterValue = button.dataset.filter;

            articleCards.forEach((card) => {
                if (filterValue === "all" || card.dataset.category === filterValue) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });

            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
        };

        filterButtons.forEach((button) =>
            button.addEventListener("click", handleClick(button))
        );

        return () => {
            filterButtons.forEach((button) =>
                button.removeEventListener("click", handleClick(button))
            );
        };
    }, []);
    return (
        <div>
            <Nav />
            <section className="article">
                <div className="text_article">
                    <div className="text-center d-flex justify-content-center align-items-center" data-aos="fade-up">
                        <div className="marker mx-2" />
                        <h5 className="text-center">مقالات</h5>
                    </div>
                    <h5 className="d-flex justify-content-center align-items-center mt-2" data-aos="fade-up" data-aos-duration="2000">
                        مقالات عن فوائد الرياضة و الصحه و التغذيه.
                    </h5>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 d-flex justify-content-center align-items-center mx-auto my-3">
                    <div className="filter-article my-3 text-center">
                        <button className="btn filter-btn-article active m-2" data-filter="all">
                            الكل
                        </button>
                        <button className="btn filter-btn-article m-2" data-filter="sport">
                            الرياضه
                        </button>
                        <button className="btn filter-btn-article m-2" data-filter="health">
                            الصحه
                        </button>
                        <button className="btn filter-btn-article m-2" data-filter="nutrition">
                            التغذيه
                        </button>
                    </div>
                </div>
                <div className="row ">
                    {articles.map((article) => (<div className="col-lg-4 col-md-6 col-sm-10 article-card  my-4" key={article.id} data-category={article.category}>
                        <div className="card_main_article_container">
                            <div className="card" style={{ width: "100%" }}>
                                <img
                                    src={article.image}
                                    className="card-img-top"
                                    alt="..."
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <div className="text_marker d-flex align-items-center mb-2">
                                        <div className="marker" />
                                        <h4 className="mx-2 mb-0">{article.title}</h4>
                                    </div>
                                    <p className="card-text">
                                        {article.shortText}
                                    </p>
                                    <button
                                        type="button"
                                        className="btn2"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#${article.modalid}`}
                                    >
                                        <span className="btn-text-one">اقرأ المزيد</span>
                                        <span className="btn-text-two">اقرأ المزيد</span>
                                        {/* اقرأ المزيد */}
                                    </button>
                                </div>
                            </div>
                            <div className="back_blur_article" />
                        </div>

                        <div
                            className="modal fade"
                            id={article.modalid}
                            tabIndex={-1}
                            aria-labelledby="articleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content text-dark">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="articleModalLabel">
                                            {" "}
                                            {article.title}
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <img
                                            src={article.image}
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="d-flex flex-column">
                                            {article.modalContent.map((item) => (
                                                <div className="p-none my-2" key={item.id || item.index || item.heading}>
                                                    {item.icon} - <strong>{item.heading}</strong>

                                                    <a href={item.link} className='mx-2'>{item.source}</a>
                                                    <br />
                                                    {item.text}
                                                    {item.list && (
                                                        <ul className="mx-3 mb-none" >
                                                            {item.list.map((listItem, index) => (
                                                                <li key={index}>{listItem}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                    <br />

                                                </div>
                                            ))}


                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            إغلاق
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Article;


