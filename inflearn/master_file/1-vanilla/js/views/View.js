const tag = '[View]'

export default {

  // init은 el(element)를 주입받음.
  init(el) {
    if (!el) throw el
    // el을 자신의 property로 받게됨
    this.el = el
    return this
  },

  // On: 특정 이벤트에 대한 행동을 정의함. 이벤트와 핸들러를 같이 인자로 받음. 
  on(event, handler) {
    // 현재 가지고 있는 엘레멘트에서 특정 이벤트가 발생했을 때 handler가 실행되도록하는 역할
    // handler: vue를 사용할 때, vue에서 나온 이벤트를 어떻게 핸들링 할 것인가를 위해서 사용을 한 것
    this.el.addEventListener(event, handler)
    return this
  },

  // Emit: 스스로 이벤트를 방출하는 기능을 함. 이벤트와 데이터를 인자로 받음.
  emit(event, data) {
    // customEvent는 첫번째 인자로 event 이름을 받고, 
    // 2번째 인자로 디테일 키를 갖고 있는 데이터 객체를 받음
    const evt = new CustomEvent(event, { detail: data })
    
    // HTML el(element)에는 dispatchEvent라는 메서드가 있음. 인자로 방금 만든 evt 객체를 넘겨줌.
    // 이를 통해 el는 이벤트를 방출함.
    this.el.dispatchEvent(evt)
    return this
  },

  // css 
  hide() {
    // css 속성 중 display 값이 none으로 주면 hide가 됨
    this.el.style.display = 'none'
    return this
  },

  show() {
   	// css 속성 중 display 값을 주지않으로 주면 show
    this.el.style.display = ''
    return this
  }
}