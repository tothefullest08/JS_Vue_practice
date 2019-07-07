import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'

import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'

export default {
    // 컨트롤러 초기화 부분
    init() {
        // console.log(tag, 'init()')
        FormView.setup(document.querySelector('form'))
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e=> this.onResetForm())

        ResultView.setup(document.querySelector('#search-result'))  
    },

    search(query) {
        console.log(tag, 'search()', query)
        // search API
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })

    },

    onSubmit(input) {
        console.log(tag, 'onSubmit()', input)
        this.search(input)
    },

    onResetForm(input) {
        console.log(tag, 'onResetForm()')
        ResultView.hide()
    },

    onSearchResult(data) {
        ResultView.render(data)
    },
}