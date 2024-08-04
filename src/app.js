import { Application } from '@hotwired/stimulus'
import ScrollReveal from 'stimulus-scroll-reveal'
import { createApp } from "vue/dist/vue.esm-bundler.js"

import TabController from "./controllers/tab_controller.js"
import ModalController from "./controllers/modal_controller.js"
import CarouselController from './controllers/carousel_controller.js'
import MenuScrollController from './controllers/menu_scroll_controller.js'
import NavMenuController from './controllers/nav_menu_controller.js'

const application = Application.start()
application.register('scroll-reveal', ScrollReveal)
application.register('tab', TabController)
application.register('modal', ModalController)
application.register('carousel', CarouselController)
application.register('menu-scroll', MenuScrollController)
application.register('nav-menu', NavMenuController)

document.addEventListener('DOMContentLoaded', function(){
  
})