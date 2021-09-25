import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
      fetch("https://api.imgflip.com/get_memes")
          .then(response => response.json())
          .then(response => {
              const {memes} = response.data
              this.setState({ allMemeImgs: memes })
              console.log(memes[4])
          })
  }
  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value})
  }
    render() {
        return (
          <div>
            <form className ="meme-form">
              <input
                type="text"
                name="topText"
                value={this.state.topText}
                placeholder="Top Text"
                onChange={this.handleChange}
              />
              
              <input
                type="text"
                name="bottomText"
                value={this.state.bottomText}
                placeholder="Bottom Text"
                onChange={this.handleChange}
              />
            
            </form>
            <h1>MEME GENERATOR SECTION</h1>
                </div>
        )
    }
}

export default MemeGenerator