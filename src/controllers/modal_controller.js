import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['modal']
  connect() {    
    console.log('modal connected')  
  }

  showModal(e) {
    e.preventDefault()
    this.modalTarget.classList.remove('hidden')
    this.element.querySelectorAll('.yt_player_iframe').forEach((element)=>{
      element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
    });
  }

  hideModal(e) {
    e.preventDefault()
    this.modalTarget.classList.add('hidden')

    this.element.querySelectorAll('.yt_player_iframe').forEach((element)=>{
      element.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    });
  }
}
