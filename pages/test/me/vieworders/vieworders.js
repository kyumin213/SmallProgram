// pages/test/me/vieworders/vieworders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allorder:true,
    pendPay: false,
    pendDelivery: false,
    received: false,
    completed: false
  },
  allorder:function(e){
    this.setData({
      allorder: true,
      pendPay: false,
      pendDelivery: false,
      received: false,
      completed: false
    })
  },
  pendPay:function(e){
    this.setData({
      allorder:false,
      pendPay:true,
      pendDelivery: false,
      received: false,
      completed: false
    })
  },
  pendDelivery:function(e){
    this.setData({
      allorder:false,
      pendPay:false,
      pendDelivery:true,
      received: false,
      completed: false
    })
  },
  received:function(e){
    this.setData({
      allorder: false,
      pendPay: false,
      pendDelivery: false,
      received:true,
      completed: false
    })
  },
  completed:function(e){
    this.setData({
      allorder: false,
      pendPay: false,
      pendDelivery: false,
      received: false,
      completed:true
    })
  },
  cancel:function(){
    wx.showModal({
      title: '温馨提示',
      content: '是否取消订单',
      success:function(res){
        if(res.confirm){
          console.log('确定')
        }else if(res.cancel){
          console.log('取消')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.allId==1){
      this.setData({
        allorder: false,
        pendPay: true,
        pendDelivery: false,
        received: false,
        completed: false
      })
    }else if(options.allId==2){
      this.setData({
        allorder: false,
        pendPay: false,
        pendDelivery: true,
        received: false,
        completed: false
      })
    }else if(options.allId==3){
      this.setData({
        allorder: false,
        pendPay: false,
        pendDelivery: false,
        received: true,
        completed: false
      })
    }else if(options.allId==4){
      this.setData({
        allorder: false,
        pendPay: false,
        pendDelivery: false,
        received: false,
        completed: true
      })
    }
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
