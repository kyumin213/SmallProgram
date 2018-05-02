// pages/test/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [{ id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 1, price: 0.01, selected: true }], 
    obj: {
      name: "hello"
    },
    imgtxt:true,
    parameter:false,
    count: 0,
    num: 0,
    nums:true,
    minusStatuses: ['disabled', 'disabled', 'normal', 'normal', 'disabled'],
    imgUrls: [
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    flowerNameSelect: "",//
    flowerSelect: 0,//判断是否选中
    chooseFlowers:[],
    goodflowers: [{ id: 1, name: '清韵梅香', selected: false }, { id: 2, name: '韵雅清香', selected: false }],
    select:0
  },
// 选择规格
  chooseFlower: function (data) {
    var that = this;
    var flower_id = data.currentTarget.dataset.select;
    var flower_name = data.currentTarget.dataset.flowerName;

    that.setData({//把选中值，放入判断值中
      flowerNameSelect: flower_name,
      flowerSelect: flower_id
    })
    var str = flower_id + ',' + flower_name;
    var chooseFlowers = that.data.chooseFlowers;
    chooseFlowers = [];
    chooseFlowers.push(str);
    that.setData({
      chooseFlowers: chooseFlowers
    })


  },
  // 数量减
  bindMinus: function (e) {
    const index = e.currentTarget.dataset.index;
    const obj = e.currentTarget.dataset.obj;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
  },
  // 数量加
  bindPlus: function (e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
  }, 
  imgtxt:function(e){
    this.setData({
      imgtxt:true,
      parameter:false
    })
  },
  parameter:function(e){
    this.setData({
      imgtxt:false,
      parameter:true
    })
  },
  shopCart:function(e){
    wx.reLaunch({
      url: '../shoppingcart/shoppingcart'
    })
  },
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
   
    animation.translateY(300).step();
    this.animation = animation;
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  // 关闭弹出框
  hideModals:function(e){
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    });
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false,
        nums:false,
        select:true
      })
    }.bind(this), 200)
  },
  cart:function(){
    wx.redirectTo({
      url: '../shoppingcart/shoppingcart',
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