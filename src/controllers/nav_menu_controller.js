import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ["open", "close", "nav"]
  connect(){
    console.log('nav-menu connected')
  }

  showMenu(e){
    e.preventDefault()
    this.openTarget.classList.add("hidden")
    this.closeTarget.classList.remove("hidden")
    this.navTarget.classList.remove("hidden")
  }

  closeMenu(e){
    e.preventDefault()
    this.openTarget.classList.remove("hidden")
    this.closeTarget.classList.add("hidden")
    this.navTarget.classList.add("hidden")
  }
}