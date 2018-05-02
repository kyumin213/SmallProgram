// pages/test/shoppingcart/shoppingcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [{ id: 1,title:'酷户', des: '酷户coofor纸巾 抽纸 原生竹浆纸巾18包酷户coofor纸巾抽纸原生竹浆纸巾18包', spec:'素雅兰香',num: 4, price: 0.01, selected: false },
      { id: 2, title: '清风', des: '酷户coofor纸巾 抽纸 原生竹浆纸巾 18包',spec: '清韵梅香',num: 1, price: 0.03, selected: false }],
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: false,
    count: 0,
    number: 0,
    hasList: true
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
    this.getTotalPrice();
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
    this.getTotalPrice();
  },
  // 删除提示
  delitems:function(e){
    let that=this;
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    wx.showModal({
      title: '温馨提示',
      content: '是否删除该商品',
      success: function (res) {
        if (res.confirm) {
          carts.splice(index, 1);              // 删除购物车列表里这个商品
          that.setData({
            carts: carts
          })
          that.getTotalPrice();

        } else if (res.cancel) {
          console.log('取消')
        }
      }
    })
  },
  // 当前商品选中
  selectList: function (e) {
    var Allprice  = 0, i = 0;
    let id = e.target.dataset.id;
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    for (i = 0; i < this.data.carts.length; i++) {
      Allprice = Allprice  + this.data.carts[i].price;
    }
    if (Allprice  == this.data.totalPrice) {
      this.data.selectAllStatus = true;
    }
    else {
      this.data.selectAllStatus = false;
    }
    this.setData({
      selectAllStatus: this.data.selectAllStatus,
      carts: carts
    });

    this.getTotalPrice();
  },
  // 购物车全选
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;            // 改变所有商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();                               // 重新获取总价
  },
  // 总结
  getTotalPrice() {
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {                     // 判断选中才会计算价格
        total += carts[i].num * carts[i].price;   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
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
    this.getTotalPrice();
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