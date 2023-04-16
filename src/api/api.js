import service from "@/service/service";
import qs from "qs";

// 登录接口
export function loginApi(data) {
  return service({
    method: "post",
    url: "/login",
    data,
  });
}

// 学生列表接口 (合并查询重置接口)
export function studentsApi(params) {
  return service({
    method: "get",
    url: "/students",
    params,
  });
}

// 学生数据删除接口
export function studentDelApi(id) {
  return service({
    method: "delete",
    url: `/students/${id}`,
  });
}

// 信息查询接口
// export function infoApi() {
//   return service({
//     method: "get",
//     url: "/info",
//   });
// }

// 信息新增&修改接口
// export function infoEditApi(type, data) {
//   data = qs.stringify(data);
//   let obj = { method: type, url: "/info", data };
//   return service(obj);
// }

// 信息列表删除接口
// export function infoDelApi(id) {
//   return service({
//     method: "delete",
//     url: `/info/${id}`,
//   });
// }

// 数据概览查询接口
export function dataViewApi() {
  return service({
    method: "get",
    url: "/dataview",
  });
}

// 地图概览接口
export function mapViewApi() {
  return service({
    method: "get",
    url: "/travel",
  });
}
