// pages/test/forgetpwd/forgetpwd.js
var interval = null //倒计时函数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '请选择日期',
    fun_id: 2,
    time: '获取验证码', //倒计时 
    currentTime: 61,
    getSmsCodeBtnColor: "#C6B47A",
    registBtnTxt: "立即注册",
    registBtnBgBgColor: "##C6B47A",
    phoneNum: '',
    code: '',
    ajxtrue: false,
    pwd: '',
    pwds: ''
  },
  inputPhoneNum: function (e) {
    var phone = e.detail.value;
    if (!(/^1[34578]\d{9}$/.test(phone))) {
      this.setData({
        ajxtrue: false
      })
      wx.showToast({
        title: '手机号格式不正确',
        icon: 'loading'
      })
      if (phone.length >= 11) {
        wx.showToast({
          title: '手机号有误',
          icon: 'loading'
        })
      }
    } else {
      this.setData({
        ajxtrue: true
      })
    }
  },
  // 获取验证码
  getCode: function (options) {
    if (this.data.ajxtrue) {
      var that = this;
      var currentTime = that.data.currentTime
      interval = setInterval(function () {
        currentTime--;
        that.setData({
          time: currentTime + '秒',
          getSmsCodeBtnColor: "#999"
        })
        if (currentTime <= 0) {
          clearInterval(interval)
          that.setData({
            time: '重新发送',
            currentTime: 61
          })
        }

      }, 1000)
    } else {
      wx.showToast({
        title: '手机号不正确',
        icon: 'loading',
        duration: 1000
      })
    }

  },
  pwd: function (e) {
    let pwd = e.detail.value;
    this.setData({
      pwd: pwd
    })
  },
  pwds: function (e) {
    let pwds = e.detail.value;
    this.setData({
      pwds: pwds
    })
  },
  // 确认密码
  confirmPwd: function (e) {
    let pwds = e.detail.value;
    this.setData({
      pwds: pwds
    })
    let that = this;
    let pwd = that.data.pwd;
    let pwdss = that.data.pwds
    if (pwd != pwdss) {
      wx.showToast({
        title: '两次密码不一致',
        icon: 'loading',
        duration: 2000
      })
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