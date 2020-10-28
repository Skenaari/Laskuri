import React, { Component } from "react";
import FlipMove from "react-flip-move";
 
class LaskuriItems extends Component {
    constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
      }
     
      delete(key) {
        this.props.delete(key);
      }
      
    createTasks(item) {
        return <li onClick={() => this.delete(item.key)} 
              key={item.key}>{item.texta}: {item.textb} {item.textc} * {item.textd} £/{item.textc} - {item.texte}% = {item.textf} $</li>
    }
 
    render() {
    var laskuriEntries = this.props.entries;
    var laskuriItems = laskuriEntries.map(this.createTasks);

    return (
        <ul className="theLaskuri">
            <FlipMove duration={250} easing="ease-out">
                {laskuriItems}
            </FlipMove>
        </ul>
    );
    }
};
 
export default LaskuriItems;