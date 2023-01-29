import classes from "./Content.module.css"

type Props = {
    text: string
    text2: string
    year: number
}
console.log(classes)
const Content = (props: Props) => {
  
    return (
        <>
            <p
               className={`${classes.text}`}
            >
                {props.text}
            </p>
            <p>{props.text2}</p>
            <div> {props.year}</div>
        </>
    )
}
export default Content
