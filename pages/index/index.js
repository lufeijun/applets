//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    searchName:"",
    list:[]
  },
  onLoad() {
    var _this = this;
    // _this.setData({
    //   list: [
    //     {
    //       id:1,
    //       name:"长岛冰茶",
    //       image:"/pages/imgs/2019/index/logo.jpg",
    //     },
    //     {
    //       id: 2,
    //       name: "长岛冰茶11",
    //       image: "/pages/imgs/2019/index/logo.jpg",
    //     }
    //   ],
    // });

    wx.request({
      url: app.data.service_url + "/api/cocktail/aticle/list",
      method:"POST",
      data: {},
      header: {},
      success(res) {
        console.log(res.data)
        _this.setData({
          list: res.data.values.all,
        });
      }
    });
  },
  toDetail: function (event) {
    var id = event.target.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id
    })
  },
  onShareAppMessage: function () {
    return {
      title: '鸡尾酒之约',
      imageUrl: '/pages/imgs/2019/index/logo.jpg'
    }
  },
  search: function(e) {
    var name = e.detail.value;
    if (name != "" ) {      
      wx.navigateTo({
        url: '/pages/search/search?name=' + name
      });
      this.setData({
        searchName:""
      });
    }
  }


})
