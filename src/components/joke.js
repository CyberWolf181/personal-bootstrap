
export default function Joke (props) {
   const link = "http://www.ekremkurt.com";
    return(
        <div className="joke">
            {props.title && <h2>Title: {props.title}</h2>}
            <h3>{props.number}</h3>
            <p> Detail: {props.detail}</p>
            <h4>{props.array}</h4>
            <a href= {link} > Ekrem Kurt</a>
            <hr/>
        </div>
    )
}