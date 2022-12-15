import { Component } from "react";
import './card-container.styles.css'


class CardContainer extends Component {
    constructor() {
        super()
    }

   

    render() {
        const {id, name, email} = this.props

        return (
            <div className="card-container">
                <img src={`https://robohash.org/${id}set=set2&size=180x180`} alt={`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default CardContainer;