import UsersPosts from "@/components/usersPosts/UsersPosts";
import styles from "./feed.module.css";
import AddPost from "@/components/addPostBtn/AddPost";

export default function Feed() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.userProfile}>
          <figure>
            <img
              src="https://avatars.dicebear.com/api/open-peeps/juanes.svg"
              alt=""
              
            />
          </figure>
          <span>Juane Esteban</span>
        </div>
        <section className={styles.addPost}>
          <div className={styles.addTitle}>
            <span>Crear nuevo post</span>
            <AddPost />
          </div>
        </section>
        <section className={styles.allPost}>
          <UsersPosts />
          <UsersPosts />
        </section>
      </section>
    </main>
  );
}
