// pages/test/register/register.js
var maxTime = 60
var currentTime = maxTime //倒计时的事件（单位：s）  
var interval = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    time:'获取验证码',
    currentTime: 61,
    getSmsCodeBtnColor: "#C6B47A",
    registBtnTxt: "立即注册",
    registBtnBgBgColor: "##C6B47A",
    phoneNum: '',
    code: '',
    ajxtrue: false,
    pwd:'',
    pwds:''
  },
  inputPhoneNum: function (e) {
    var phone = e.detail.value;
    if (!(/^1[34578]\d{9}$/.test(phone))) {
      this.setData({
        ajxtrue:false
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
    if (this.data.ajxtrue){
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
            currentTime: 61,
            disabled: false
          })
        }

      }, 1000)
    }else{
      wx.showToast({
        title: '手机号不正确',
        icon:'loading',
        duration:1000
      })
    }
   
  },
  pwd:function(e){
    let pwd=e.detail.value;
    this.setData({
      pwd:pwd
    })
  },
  pwds:function(e){
    let pwds=e.detail.value;
    this.setData({
      pwds:pwds
    })
  },
  // 确认密码
  confirmPwd:function(e){
    let pwds = e.detail.value;
    this.setData({
      pwds: pwds
    })
    let that=this;
    let pwd = that.data.pwd;
    let pwdss=that.data.pwds
    if(pwd!=pwdss){
      wx.showToast({
        title: '两次密码不一致',
        icon:'loading',
        duration:2000
      })
    }
  },

  checkSmsCode: function (param) {
    var smsCode = param.code.trim();
    var tempSmsCode = '000000';//演示效果临时变量，正式开发需要通过wx.request获取
    if (smsCode != tempSmsCode) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入正确的短信验证码'
      });
      return false;
    } else {
      return true;
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
    currentTime = maxTime
    if (interval != null) {
      clearInterval(interval)
    }
  },
  formSubmit: function (e) {
    var param = e.detail.value;
    this.mysubmit(param);
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