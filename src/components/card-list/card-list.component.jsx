import { Component } from "react";
import CardContainer from "../card-component/card-container.component";
import './card-list.styles.css'

class CardList extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="card-list">
                {this.props.monsters.map((monster, index) => {
                    return (
                        <CardContainer key={monster.id} id={monster.id} className='card-container' name={monster.name} email={monster.email}/>
                    )
                })}
            </div>


        )
    }
}

export default CardList;