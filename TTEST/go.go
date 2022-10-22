package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
)

func checkError(err error) {
	if err != nil {
		fmt.Println(err)
		panic(err)
	}
}

func main() {

	url := "https://apis.openapi.sk.com/tmap/routes?version=1&callback=function"

	payload := strings.NewReader("{\"tollgateFareOption\":16,\"roadType\":32,\"directionOption\":1,\"endX\":129.07579349764512,\"endY\":35.17883196265564,\"endRpFlag\":\"G\",\"reqCoordType\":\"WGS84GEO\",\"startX\":126.98217734415019,\"startY\":37.56468648536046,\"gpsTime\":\"20191125153000\",\"speed\":10,\"uncetaintyP\":1,\"uncetaintyA\":1,\"uncetaintyAP\":1,\"carType\":0,\"startName\":\"%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%9E%85%EA%B5%AC%EC%97%AD\",\"endName\":\"%ED%97%A4%EC%9D%B4%EB%A6%AC\",\"passList\":\"127.38454163183215,36.35127257501252\",\"gpsInfoList\":\"126.939376564495,37.470947057194365,120430,20,50,5,2,12,1_126.939376564495,37.470947057194365,120430,20,50,5,2,12,1\",\"detailPosFlag\":\"2\",\"resCoordType\":\"WGS84GEO\",\"sort\":\"index\"}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("accept", "application/json")
	req.Header.Add("content-type", "application/json")
	req.Header.Add("appKey", "l7xx1317e6cad24d4f0d8048aa7336e5623b")

	res, _ := http.DefaultClient.Do(req)

	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

	f1, err := os.Create("C:/Users/KGA_23/Desktop/WebDevStudy/TTEST/goLangToJson.json")
	checkError(err)
	fmt.Fprintf(f1, string(body))
}