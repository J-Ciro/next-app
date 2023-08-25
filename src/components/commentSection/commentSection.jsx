import UsersComments from '../usersComments/usersComments';
import styles from './commentSection.module.css'
export default function CommentSection() {
    
    return (
        <div>
            <section className={styles.userComment}>
                <figure>
                    <img src="https://avatars.dicebear.com/api/open-peeps/juanes.svg" alt="" />
                </figure>
                
                    <input type="text" placeholder="Inscribe un comentario"/>
                
            </section>
            <section>
                {/* Aqui seria hacer un map para mostrar la foto y el comentario relaizado por la persona */}
                <UsersComments/>
                <UsersComments/>
            </section>
        </div>

    );
  }
  