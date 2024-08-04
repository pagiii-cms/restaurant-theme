import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['content']
  connect() {    
    console.log('tab connected')  
  }

  showTab(e) {
    e.preventDefault()
    let className = e.currentTarget.getAttribute('data-tabname')
    
    this.contentTargets.forEach(e => e.classList.add('hidden'))
    this.element.querySelectorAll(`.${className}`).forEach((e)=>{      
      e.classList.remove('hidden')
    })
  }
}
