const options = {
  method: "POST",
  url: "https://apis.openapi.sk.com/tmap/routes",
  params: { version: "1", callback: "function" },
  headers: {
    accept: "application/json",
    // "content-type": "application/json",
    appKey: "l7xxbbd9d1540e37447ba7a28a071bddb75c",
  },
  data: {
    startX: 126.92365493654832,
    startY: 37.556770374096615,
    angle: 20,
    speed: 30,
    endPoiId: "10001",
    endX: 126.92432158129688,
    endY: 37.55279861528311,
    passList: "126.92774822,37.55395475_126.92577620,37.55337145",
    reqCoordType: "WGS84GEO",
    startName: "%EC%B6%9C%EB%B0%9C",
    endName: "%EB%8F%84%EC%B0%A9",
    searchOption: "0",
    resCoordType: "WGS84GEO",
    sort: "index",
  },
};

let curData;

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    curData = response.data;
  })
  .catch(function (error) {
    console.error(error);
  });

const mapOptions = {
  center: new naver.maps.LatLng(37.5403622, 127.1258416),
  zoom: 15,
};

const map = new naver.maps.Map("map", mapOptions);

let id = setInterval(() => {
  if (curData) {
    for (let i = 0; i < curData.length; ++i) {}
  }
}, 100);
