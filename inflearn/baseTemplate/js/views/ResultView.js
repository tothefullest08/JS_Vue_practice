import View from './View.js'

// 디버깅을 위한 태그 정의
const tag = '[ResultView]'

// View 객체를 이용하여 복사
const ResultView = Object.create(View)


// Setup 메서드 정의
// 엘레멘트를 주입받아 내부 속성으로 엘레멘트를 갖고 있음.
// (그 역할은 init 메서드가 수행)
ResultView.setup = function(el) {
    this.init(el)
}

//HTML DOM을 만들어내는 함수
ResultView.render = function(data = []) {
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : '검색 결과가 없습니다'
}

ResultView.reset = function(){
    console.log(tag, 'reset()')
    this.el.innerHTML = ''

}

ResultView.getSearchResultsHtml = function(data) {
    return data.reduce((html, item) => {
        html+= this.getSearchItemHtml(item)
        return html
    }, '<ul>') + '</ul>'
}

ResultView.getSearchItemHtml = function (item) {
    return `<li>
    <img src="${item.image}">
    <p>${item.name}</p>
    </li>`
}

export default ResultView;
