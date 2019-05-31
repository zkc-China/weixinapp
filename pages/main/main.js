// pages/test/test.js

const data = {
  name: "zkc",
  history: [{
    "time": "2012:11:11",
    "dots": "4",
    "near": 15,
    "far": 20,
    "ac": 3.5,
    "bcc": 0,
    "fu": "+0.50",
    "zheng": "-0.5",
    "od": 3,
    "ods": "+",
    "os:": "2",
    "oss": "+",
    "ou": 2,
    "ous": "+/-",
    "tiao": [9, 8.5, 10],
    "ji": 6.5,
    "result": "间歇性外斜视伴有调节过度"
  }, {
    "time": "2012:11:11",
  }, {
    "time": "2012:11:11",
  }, {
    "time": "2012:11:11",
  }]
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: data.history,
    message: "视功能数据库"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp({
      allowDefault: true
    });
    console.log(app.globalData);

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