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
export function infoApi() {
  return service({
    method: "get",
    url: "/info",
  });
}

// 信息新增接口
export function infoAddApi(data) {
  data = qs.stringify(data);
  return service({
    method: "post",
    url: "/info",
    data,
  });
}

// 信息修改接口
export function infoEditApi(data) {
  data = qs.stringify(data);
  return service({
    method: "put",
    url: "/info",
    data,
  });
}

// 信息列表删除接口
export function infoDelApi(id) {
  return service({
    method: "delete",
    url: `/info/${id}`,
  });
}
