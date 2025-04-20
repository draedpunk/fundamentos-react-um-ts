import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}){
    const [LikeCount, setLikeCount] = useState(0);
    function handleDeleteComment(){

        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/yuumi-kunii.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Yuumi Kunii</strong>
                            <time title="24 de maio de 2025 às 13h22" dateTime="2025-03-24 13:20:30">Há 1h</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{LikeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}