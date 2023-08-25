"use client";
import CommentSection from "../commentSection/commentSection";
import ShowBtn from "../showBtn/ShowBtn";
import styles from "./UsersPosts.module.css";
export default function UsersPosts() {
  return (
    <div className={styles.userPost}>
      <div className={styles.userInfo}>
        <img
          src="https://avatars.dicebear.com/api/open-peeps/stefan.svg"
          alt=""
        />
        <div className={styles.userData}>
          <div className={styles.nameDate}>
            <span className={styles.userName}>Julian</span>
            <span className={styles.postDate}>20:23 Abril 12</span>
          </div>
          <span className={styles.userLocation}>Bogota - Colombia</span>
        </div>
        <div className={styles.postOptions}>
            <div className={styles.postLikes}>

          <button className={styles.likeBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
<span>29</span>
          </div>

          <button className={styles.trashBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
      <section className={styles.postContent}>
        <h3 className={styles.postTitle}>
          Busco personas para caminata ecologica
        </h3>
        <figure className={styles.postImg}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg"
            alt=""
          />
        </figure>

        <p className={styles.postText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
          eligendi eum neque consequatur voluptatibus facilis totam voluptas
          accusantium sed quae sequi corporis harum ad aliquid temporibus.
          Minima fugit quod quos. Eligendi vel in culpa autem voluptate harum
          delectus quam ullam suscipit! Cupiditate, sit! Sed culpa quibusdam
          explicabo fuga ea nam, beatae hic repudiandae! Accusantium expedita
          explicabo laboriosam delectus voluptate obcaecati? Culpa iusto maxime
          odit molestiae perferendis quas eveniet enim soluta ut quaerat. Nihil
          iste itaque nulla, reprehenderit optio fugit id soluta voluptates.
          Culpa asperiores labore vitae quo, quaerat a eveniet?
        </p>
        <ShowBtn/>
      </section>
      <section>
        <CommentSection />
      </section>
    </div>
  );
}
