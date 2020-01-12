const toBookDetail =function(e){
  console.log(111)
  console.log(e.detail)
  const book_name = e.detail.book_name
  const book_id = e.detail.book_id
  wx.navigateTo({
    url: `../../otherpages/book/bookDesc/bookDesc?book_id=${book_id}`
  })
}
module.exports = {
  toBookDetail
}