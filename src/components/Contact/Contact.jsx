import './Contact.css'
import Photo from './Img/1.jpg'

function Contact(props) {
    return (
        <div  ref={props.contactCall}>
            <div className="contact-container" >
                <img src={Photo} />
                <h2>Email: aslanshaken@gmail.com</h2>
                
            </div>
            <div className="button-container">
                <img onClick={props.handleButton} src="https://cdn2.iconfinder.com/data/icons/abstract-9/32/go_up_arrow-512.png" />
            </div>
        </div>
    )
}

export default Contact