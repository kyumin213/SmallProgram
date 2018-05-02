// pages/test/me/upgrade/upgrade.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'../../../../images/id_card_head_icon.png',
    srctail:'../../../../images/id_card_tail_icon.png'
  },
  formSubmit:function(e){

  },
  // 身份证正面上传
  uploadimg: function (e) {
    var _this=this;
    wx.chooseImage({
      count:1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) { 
        var tempFilePaths = res.tempFilePaths
        _this.setData({
          src:tempFilePaths
        })
      },
    })
  },
  // 身份证反面上传
  uploadtail:function(){
    let _this=this;
    wx.chooseImage({
      count:1,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success: function(res) {
        let tempFilePaths=res.tempFilePaths;
        _this.setData({
          srctail:tempFilePaths
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})