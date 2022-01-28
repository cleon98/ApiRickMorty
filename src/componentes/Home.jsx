import styles from "./Home.module.css"
import text from "../imgs/text1.jpg"
const Home = () =>{
    return(
        <div className={styles.explanation}>
        <h1>Rick and Morty</h1>
        <article>
        <p>Rick and Morty is one of the most succesful adults cartoons. This cartoon follows the adventures
            of a crazy genius sociopath and his introvert grandson. It success and popularity have made of 
            Rick and Morty one of the most influential cartoons in the pop culture. <br/><br/>

            According to it co-creator the inspiration for the show was a vulgar interpretation of Back to the
            Future. If you have seen the show this probably is something that you already noticed because
            Rick and Morty has always taken cues from Doc Brown and Marty.
        </p>
        <img className="text" src={text} alt="Rick and morty"></img>
        </article>
        </div>
    )
    
}

export default Home