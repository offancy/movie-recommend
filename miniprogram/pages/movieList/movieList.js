// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showList:[],
    current:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    wx.cloud.callFunction({
      // 云函数名称
      name: 'getMovie',
      // 传给云函数的参数
      data: {
      },
      success: function (res) {
        console.log(res.result.list);
        that.setData({
          showList:res.result.list
        })
      },
      fail: console.error
    })
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
  nextImg(){
    let that=this
    let cur = this.data.current
    this.data.current = cur < 9 ? cur + 1 : 9;
    that.setData({
      current:this.data.current
    })
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