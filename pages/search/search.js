// pages/search/search.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = options.name;
    var _this = this;
    _this.setData({
      name: name,
    });
    this.searchPost(name);

  },
  toDetail: function (event) {
    var id = event.target.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id
    })
  },
  search: function (e) {
    var name = e.detail.value;
    if (name != "") {
      this.searchPost(name);
    } else {
      wx.showToast({
        title: '请输入要搜索的名称',
        icon: 'none',
        duration: 2000
      });
    }
  },
  searchPost: function(name) {
    // 发送查询请求
    wx.showLoading({
      title: '加载中',
    });
    var _this = this;
    wx.request({
      url: app.data.service_url + "/api/cocktail/aticle/search",
      method: "POST",
      data: { name: name },
      header: {},
      success(res) {
        wx.hideLoading();
        if (res.data.values.count > 0) {
          _this.setData({
            list: res.data.values.all,
          });
        } else {
          _this.setData({
            list: [],
          });
          wx.showToast({
            title: '抱歉没有找到，小编会尽快添加',
            icon: 'none',
            duration: 2000
          });
        }
      }
    });

    // _this.setData({
    //   list:[
    //     {
    //       id:1,
    //       name:"长岛冰茶",
    //       image: "/pages/imgs/2019/index/logo.jpg",
    //     },
    //     {
    //       id: 2,
    //       name: "测试冰茶",
    //       image: "/pages/imgs/2019/index/logo.jpg",
    //     },
    //   ]
    // })
  }
})