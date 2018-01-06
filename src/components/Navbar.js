import React, {Component} from 'react'
import InputGroup from './elements/InputGroup'
import Dropdown from './elements/Dropdown'
import Gallery from './Gallery'


const optionsFilters = [
  'All',
  'Lark',
  'Normal',
  'Reyes',
  'Valencia',
  'Ludwig',
  'Inkwell'
]

class Navbar extends Component {

  constructor() {
    super()
    this.state = {
      filter: 'All'
    }
  }

  onChangeInput = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  render() {
    const {filter} = this.state
    return (
      <div className='navbar-container'>
      <nav class="navbar navbar-default">
        <div class="container-fluid">


          <form class="navbar-form">

            <InputGroup name='Search' labelText='Search'>
              <input type="text" class="form-control" placeholder="Search" />
            </InputGroup>


            <ul class="nav navbar-nav navbar-right">
              <InputGroup name='filters' labelText='Filters'>
                <Dropdown name='filters' value={filter} options={optionsFilters} onChange={this.onChangeInput} />
              </InputGroup>
            </ul>

          </form>
        </div>
      </nav>

      <div className='container'>
        <Gallery filter={filter} onChange={this.onChangeInput} />
      </div>


      </div>
    )
  }
}

export default Navbar
