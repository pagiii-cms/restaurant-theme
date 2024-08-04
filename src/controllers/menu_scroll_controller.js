import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['menu']
  connect(){
    console.log('menu scroll connected')

    this.isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1

    if (!this.isMobile){
      this.scrollFunc = ()=>{
        if (window.scrollY > 30){        
          this.menuTarget.classList.add("bg-black")
        }else{
          this.menuTarget.classList.remove("bg-black")
        }
      }
      
      window.addEventListener('scroll', this.scrollFunc)
    }
  }

  disconnect(){
    if (!this.isMobile){
      window.removeEventListener(this.scrollFunc)
    }
  }
}