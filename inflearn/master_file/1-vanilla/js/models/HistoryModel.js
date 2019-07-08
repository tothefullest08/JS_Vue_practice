export default {
  // 데이터를 collecction의 형태로 갖고 있음.
  // keyword: 검색어, data: 검색날짜
  data: [
    { keyword: '검색기록2', date: '12.03' },
    { keyword: '검색기록1', date: '12.02'},
    { keyword: '검색기록0', date: '12.01' },
  ],

  // ㅣist 메서드는 데이터를 return 해줌. 특별하게는 Promise 패턴을 이용함. return this.data를 하지 않고 Promise 패턴을 사용한 이유는 history 모델의 경우 서버에서 비동기로 갖고 오는 경우도 있고, 쿠키로도 데이터를 얻을 수도 있기 떄문에 공통적으로 사용하기 위해 Promise 패턴 사용
  list() {
    return Promise.resolve(this.data)
  },
  
 // 추가될 검색어를 받아(keyword='') 실제 데이터가 데이터에 있는지를 체크한 후, 있으면 삭제, 다시 날짜를 산정하여 기존데이터와 합쳐서 추가하는 기능
  add(keyword = '') {
    keyword = keyword.trim()
    if (!keyword) return 
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }

    const date = '12.31'
    this.data = [{keyword, date}, ...this.data]
  },
  
 // keyword를 받아서 그 키워드에 해당하는 것들을 삭제하는 기능
  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}