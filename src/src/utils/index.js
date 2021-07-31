export default {
  downloadFile(url) {
    let link = document.createElement("a");
    link.style.display = "none";
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
  formatDate(v) {
    let date = new Date(v);
    let curYear = date.getFullYear();
    let curMonth = date.getMonth() + 1;
    let curDate = date.getDate();
    let strMonth = curMonth < 10 ? "0" + curMonth : "" + curMonth;
    let strDate = curDate < 10 ? "0" + curDate : "" + curDate;
    let day = curYear + "-" + strMonth + "-" + strDate;
    return day;
  },
  // 输入数字、字母，控制长度
  inputBranchIdLength(v, n) {
    v = v.replace(/[^0-9a-zA-Z]/g, '');
    if (v.length > n) {
      v = v.slice(0, n);
    }
    return v;
  },
  // 输入数字，控制长度
  inputNumberLength(v, n) {
    v = v.replace(/\D/g, '');
    if (v.length > n) {
      v = v.slice(0, n);
    }
    return v;
  },
  // 控制长度
  inputStrLength(v, n) {
    if (v.length > n) {
      v = v.slice(0, n);
    }
    return v;
  },
  // 禁用分页功能
  disabledPage(flag) {
    // 上一页、下一页、页面跳转
    let arr1 = document.getElementsByClassName("btn-prev");
    let arr2 = document.getElementsByClassName("btn-next");
    let arr3 = document.getElementsByClassName("bfe-pagination__editor");
    if(flag) {
      for (let i = 0; i < arr1.length; i++) {
        arr1[i].setAttribute("disabled", true);
      }
      for (let i = 0; i < arr2.length; i++) {
        arr2[i].setAttribute("disabled", true);
      }
      for (let i = 0; i < arr3.length; i++) {
        arr3[i].setAttribute("disabled", true);
      }
    } else {
      for (let i = 0; i < arr1.length; i++) {
        arr1[i].removeAttribute("disabled");
      }
      for (let i = 0; i < arr2.length; i++) {
        arr2[i].removeAttribute("disabled");
      }
      for (let i = 0; i < arr3.length; i++) {
        arr3[i].removeAttribute("disabled");
      }
    }
  }
}