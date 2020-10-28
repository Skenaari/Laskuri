
import React, { Component } from "react";
import LaskuriItems from "./LaskuriItems";
import "./Laskuri.css";
 
class Laskuri extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
   
  addItem(e) {
    if (this._inputElementa.value !== "") {
      var newItem = {
        texta: this._inputElementa.value,
        textb: this._inputElementb.value,
        textc: this._inputElementc.value,
        textd: this._inputElementd.value,
        texte: this._inputElemente.value,
        textf: this._inputElementf.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      //tyhjennetään lomakkeen kentät ed. syötteistä
      this._inputElementa.value = "";
      this._inputElementb.value = "";
      this._inputElementc.value = "";
      this._inputElementd.value = "";
      this._inputElemente.value = "";
      this._inputElementf.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

  
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="LaskuriMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElementa = a} placeholder="selite">
            </input>
            <input ref={(b) => this._inputElementb = b} placeholder="määrä">
            </input>
            <input ref={(c) => this._inputElementc = c} placeholder="yksikkö">
            </input>
            <input ref={(d) => this._inputElementd = d} placeholder="yksikköhinta">
            </input>
            <input ref={(e) => this._inputElemente = e} placeholder="alennus %">
            </input>
            <input ref={(f) => this._inputElementf = f} placeholder="summa">
            </input>
            <button type="submit">lisää rivi</button>
            <button type="lähetä">lähetä</button>
          </form>
        </div>
        <LaskuriItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
    );
  }
}
 
export default Laskuri;