import styles from "./Input.module.css"


const Input=(props)=>{
    return (
        <div className={styles.input}>{props.input}</div>

    )
 
}
export default Input