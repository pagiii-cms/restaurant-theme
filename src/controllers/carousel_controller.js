import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ["wrapper", "picker", "content", "dot"]
  connect(){
    console.log('carousel connected')
    let pickerCode = ""
    this.isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1
    let visibleSlideCount = (this.isMobile)? 1 : 2

    let circleCount = Math.ceil(this.contentTargets.length / visibleSlideCount)

    for (let i=0; i<circleCount; i++) {
      pickerCode = `
        ${pickerCode}
        <div class="cursor-pointer mx-2 rounded-full border border-gray-600 w-4 h-4 ${(i == 0)? 'active' : ''}" data-carousel-target="dot" data-action="click->carousel#showIndex" data-index="${i}">&nbsp;</div>
      `
    }
    this.pickerTarget.innerHTML = pickerCode
    this.currentIndex = 0
    this.circleCount = circleCount

    //this.startTimer()
  }

  showIndex(e) {    
    let index = parseInt(e.currentTarget.getAttribute('data-index'))
    this.currentIndex = index
    this.gotoIndex() 
  }

  gotoIndex() {        
    let itemWidth = this.contentTargets[0].clientWidth
    this.wrapperTarget.scrollTo({left: this.currentIndex * itemWidth, behavior: 'smooth'})    

    this.dotTargets.forEach(element=>{
      element.classList.remove('active')
    })
    this.dotTargets[this.currentIndex].classList.add("active")
  }

  startTimer() {
    setInterval(()=>{
      if (this.currentIndex >= (this.circleCount - 1)){
        this.currentIndex = 0
      }else{
        this.currentIndex = this.currentIndex + 1
      }
      this.gotoIndex()
    }, 8000)
  }
}