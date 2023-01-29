import "./Content.css"

type Props = {
    text: string
    text2: string
    year: number
}
const Content = (props: Props) => {
  
    return (
        <>
            <p
               className="content"
            >
                {props.text}
            </p>
            <p>{props.text2}</p>
            <div> {props.year}</div>
        </>
    )
}
export default Content
