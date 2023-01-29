type Props = {
    text: string
    text2: string
    year: number
}
const Content = (props: Props) => {
  let data = true
    return (
        <>
            <p
                style={{
                    color: data ? 'yellow' : 'White',
                    backgroundColor: 'green',
                    padding: `15px`,
                }}
            >
                {props.text}
            </p>
            <p>{props.text2}</p>
            <div> {props.year}</div>
        </>
    )
}
export default Content
