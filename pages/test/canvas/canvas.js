// pages/test/canvas/canvas.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    awardsList: {},
    animationData: {},
    btnDisabled: '',
    nums:0,
    wins: [
      { tel: '135****7136', jp: '10元宝', times: '2018-05-01 11:11:22' },
      { tel: '135****7146', jp: '50元宝', times: '2018-05-01 11:11:22' },
      { tel: '135****7136', jp: '20元宝', times: '2018-05-01 11:11:22' }
    ]
  },
  getLottery: function (e) {
    var that = this
    let nums=this.data.nums;
    let num=nums+1;
    this.setData({
      nums:num
    })
    if(nums>=3){
      wx.showModal({
        title: '温馨提示',
        content: '今日的抽奖次数已经用完',
        showCancel:false      
      })
    }else{
      var awardIndex = Math.random() * 8 >>> 0;

      // 获取奖品配置
      var awardsConfig = app.awardsConfig,
        runNum = 8
      if (awardIndex < 2) awardsConfig.chance = false

      // 旋转抽奖
      app.runDegs = app.runDegs || 0
      app.runDegs = app.runDegs + (360 - app.runDegs % 360) + (360 * runNum - awardIndex * (360 / 8))

      var animationRun = wx.createAnimation({
        duration: 4000,
        timingFunction: 'ease'
      })
      that.animationRun = animationRun
      animationRun.rotate(app.runDegs).step()
      that.setData({
        animationData: animationRun.export(),
        btnDisabled: 'disabled'
      })

      // 记录奖品
      var winAwards = wx.getStorageSync('winAwards') || { data: [] }
      winAwards.data.push(awardsConfig.awards[awardIndex].name + '1个')
      wx.setStorageSync('winAwards', winAwards)

      // 中奖提示
      setTimeout(function () {
        wx.showModal({
          title: '温馨提示',
          content: '获得' + (awardsConfig.awards[awardIndex].name),
          showCancel: false
        })
      }, 4000);
    }

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
    var that = this;

    // getAwardsConfig
    app.awardsConfig = {
      chance: true,
      awards: [
        { 'index': 0, 'name': '5G流量卡' },
        { 'index': 1, 'name': '谢谢参与' },
        { 'index': 2, 'name': '20元宝' },
        { 'index': 3, 'name': '30元话费充值卡' },
        { 'index': 4, 'name': '10元宝' },
        { 'index': 5, 'name': '5元宝' },
        { 'index': 4, 'name': '净水器' },
        { 'index': 5, 'name': '100万保险' }
      ]
    }

    // wx.setStorageSync('awardsConfig', JSON.stringify(awardsConfig))


    // 绘制转盘
    var awardsConfig = app.awardsConfig.awards,
      len = awardsConfig.length,
      rotateDeg = 360 / len / 2 + 90,
      html = [],
      turnNum = 1 / len  // 文字旋转 turn 值
    that.setData({
      btnDisabled: app.awardsConfig.chance ? '' : 'disabled'
    })
    var ctx = wx.createContext()
    for (var i = 0; i < len; i++) {
      // 保存当前状态
      ctx.save();
      // 开始一条新路径
      ctx.beginPath();
      // 位移到圆心，下面需要围绕圆心旋转
      ctx.translate(150, 150);
      // 从(0, 0)坐标开始定义一条新的子路径
      ctx.moveTo(0, 0);
      // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
      ctx.rotate((360 / len * i - rotateDeg) * Math.PI / 180);
      // 绘制圆弧
      ctx.arc(0, 0, 150, 0, 2 * Math.PI / len, false);

      // 颜色间隔
      if (i % 2 == 0) {
        ctx.setFillStyle('rgba(255,184,32,.1)');
      } else {
        ctx.setFillStyle('rgba(255,203,63,.1)');
      }

      // 填充扇形
      ctx.fill();
      // 绘制边框
      ctx.setLineWidth(0.5);
      // ctx.setStrokeStyle('#f00');
      ctx.stroke();

      // 恢复前一个状态
      ctx.restore();

      // 奖项列表
      html.push({ turn: i * turnNum + 'turn', lineTurn: i * turnNum + turnNum / 2 + 'turn', award: awardsConfig[i].name });

    }
    that.setData({
      awardsList: html
    })
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