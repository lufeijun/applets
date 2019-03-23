// pages/detail/detail.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    jiweijiu:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var _this = this;
    wx.request({
      url: app.data.service_url + "/api/cocktail/aticle/show/"+id,
      method:"POST",
      data: {},
      header: {},
      success(res) {
        console.log(res.data)
        _this.setData({
          jiweijiu: res.data.values.jiweijiu,
        });
      }
    });
  }
})